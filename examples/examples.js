var asymtotp = require('../index.js')

var mn = 'yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow'
var s = new asymtotp.AsymTOTPSecret(mn)
var pu = new asymtotp.AsymTOTPPublic.fromSecret(s)

var si = s.getOTP(1)

var otp = asymtotp.signatueToHex(si)
var otpSig = asymtotp.hexToSignature(otp)
console.log(pu.verifyOTP(1, otpSig))

var usrString = pu.toBase58()
var newPu = new asymtotp.AsymTOTPPublic.fromBase58(usrString)
console.log(newPu.verifyOTP(1, otpSig))