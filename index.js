var bip39 = require('bip39')
var bitcoin = require('bitcoinjs-lib')
var bip32utils = require('bip32-utils')
const Buffer = require('safe-buffer').Buffer
const fctUtils = require('factomjs-util')
const createHash = require('create-hash')
const stripHexPrefix = require('strip-hex-prefix')

// https://github.com/crypto-browserify/randombytes
// var randomBytes = require('randombytes');

module.exports = {
  AsymTOTPSecret,
  randomMnemonic,
  validMnemonic,
  AsymTOTPPublic,
  hexToSignature,
  signatueToHex,
  getOTPTime,
  getOTPTimeHash,
  sha256
}

/**
 * Generates a random 12 word mnemonic seed
 * @return {String} 12 word mnemonic
 */
function randomMnemonic () {
  return bip39.generateMnemonic()
}

function validMnemonic (mnemonic) {
  return bip39.validateMnemonic(mnemonic)
}

function AsymTOTPSecret (mnemonic) {
  var seed = bip39.mnemonicToSeedHex(mnemonic)
  this.hdWallet = bitcoin.HDNode.fromSeedHex(seed)
}

AsymTOTPSecret.prototype.getOTP = function(site) {
  var t = getOTPTime()
  var signKey = this.hdWallet.derive(site).derive(t)
  return signKey.sign(sha256(t))
}

function AsymTOTPPublic(secret) {
  this.masterNode = secret.hdWallet.neutered()
}

AsymTOTPPublic.prototype.verifyOTP = function(site, sig) {
  var siteNode = this.masterNode.derive(site)
  var t = getOTPTime()
  if(siteNode.derive(t).verify(sha256(t), sig)) {
    return true
  }
  if(siteNode.derive(t-1).verify(sha256(t-1), sig)) {
    return true
  }
  return false
}

function hexToSignature(hex) {
  return bitcoin.ECSignature.parseCompact(toBuffer(hex)).signature
}

function signatueToHex(sig) {
  return bufferToHex(sig.toCompact(1))
}

/**
 * Converts a `Buffer` into a hex `String`
 * @param {Buffer} buf
 * @return {String}
 */
function bufferToHex (buf) {
  return '0x' + buf.toString('hex')
}


function getOTPTime() {
  return Math.round(Date.now()/1000/60)
}

function getOTPTimeHash() {
  return sha256(getOTPTime())
}

/**
 * Creates SHA256 hash of the input
 * @param {Buffer|Array|String|Number} a the input data
 * @return {Buffer}
 */
function sha256 (a) {
  a = intToBuffer(a)
  return createHash('sha256').update(a).digest()
}


/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */
function intToBuffer (i) {
  const hex = intToHex(i)

  return new Buffer(hex.slice(2), 'hex')
}

/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */
function intToHex (i) {
  var hex = i.toString(16); // eslint-disable-line

  return `0x${padToEven(hex)}`
}

/**
 * Is the string a hex string.
 *
 * @method check if string is hex string of specific length
 * @param {String} value
 * @param {Number} length
 * @returns {Boolean} output the string is a hex string
 */
function isHexString (value, length) {
  if (typeof (value) !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
    return false
  }

  if (length && value.length !== 2 + 2 * length) { return false }

  return true
}


/**
 * Pads a `String` to have an even length
 * @param {String} value
 * @return {String} output
 */
function padToEven(value) {
  var a = value; // eslint-disable-line

  if (typeof a !== 'string') {
    throw new Error(`[ethjs-util] while padding to even, value must be string, is currently ${typeof a}, while padToEven.`);
  }

  if (a.length % 2) {
    a = `0${a}`;
  }

  return a;
}

/**
 * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.
 * @param {*} v the value
 */
function toBuffer (v) {
  if (!Buffer.isBuffer(v)) {
    if (Array.isArray(v)) {
      v = Buffer.from(v)
    } else if (typeof v === 'string') {
      if (isHexString(v)) {
        v = Buffer.from(padToEven(stripHexPrefix(v)), 'hex')
      } else {
        v = Buffer.from(v)
      }
    } else if (typeof v === 'number') {
      v = intToBuffer(v)
    } else if (v === null || v === undefined) {
      v = Buffer.allocUnsafe(0)
    } else if (v.toArray) {
      // converts a BN to a Buffer
      v = Buffer.from(v.toArray())
    } else {
      throw new Error('invalid type')
    }
  }
  return v
}