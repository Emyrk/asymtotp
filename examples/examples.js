var asymtotp = require('../index.js')

var mn = 'yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow'
var s = new asymtotp.AsymTOTPSecret(mn)
var pu = new asymtotp.AsymTOTPPublic(s)

var si = s.getOTP(1)

var otp = asymtotp.signatueToHex(si)
var otpSig = asymtotp.hexToSignature(otp)
console.log(pu.verifyOTP(1, otpSig))