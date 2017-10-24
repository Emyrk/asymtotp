var assert = require('assert')
var asymtotp = require('../index.js')
const Buffer = require('safe-buffer').Buffer

describe('asymtotp tests', function () {
  it('AsymTOTP Test', function () {
    var mn = 'yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow'
    var s = new asymtotp.AsymTOTPSecret(mn)
    var pu = new asymtotp.AsymTOTPPublic(s)

    var si = s.getOTP(1)
    assert.equal(true, pu.verifyOTP(1, si))
  })

  it('AsymTOTP String Test', function () {
    var mn = 'yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow'
    var s = new asymtotp.AsymTOTPSecret(mn)
    var pu = new asymtotp.AsymTOTPPublic(s)
    var si = s.getOTP(1)
    assert.equal(true, pu.verifyOTP(1, asymtotp.hexToSignature(asymtotp.signatueToHex(si))))
  })
})
