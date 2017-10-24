var assert = require('assert')
var asymtotp = require('../index.js')
const Buffer = require('safe-buffer').Buffer

describe('asymtotp tests', function () {
  it('AsymTOTP Test', function () {
    var mn = 'yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow'
    var s = new asymtotp.AsymTOTPSecret(mn)
    var pu = new asymtotp.AsymTOTPPublic.fromSecret(s)

    var si = s.getOTP(1)
    assert.equal(true, pu.verifyOTP(1, si))
  })

  it('AsymTOTP String Test', function () {
    var mn = 'yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow'
    var s = new asymtotp.AsymTOTPSecret(mn)
    var pu = new asymtotp.AsymTOTPPublic.fromSecret(s)
    var si = s.getOTP(1)
    assert.equal(true, pu.verifyOTP(1, asymtotp.hexToSignature(asymtotp.signatueToHex(si))))
  })

  it('AsymTOTP Pub Test', function () {
    var mn = 'yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow'
    var s = new asymtotp.AsymTOTPSecret(mn)
    var pu = new asymtotp.AsymTOTPPublic.fromSecret(s)
    var si = s.getOTP(1)
    assert.equal(true, pu.verifyOTP(1, asymtotp.hexToSignature(asymtotp.signatueToHex(si))))
  })

  it('AsymTOTP Pub Test Str', function () {
    var mn = 'yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow'
    var s = new asymtotp.AsymTOTPSecret(mn)
    var p = new asymtotp.AsymTOTPPublic.fromSecret(s)
    var np = new asymtotp.AsymTOTPPublic.fromBase58(p.toBase58())

    var si = s.getOTP(1)
    assert.equal(true, np.verifyOTP(1, asymtotp.hexToSignature(asymtotp.signatueToHex(si))))
  })
})
