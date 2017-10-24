# Asymmetric Time Based One Time Password

Current OTP solutions require the sever and user to keep a shared secret as a seed. That way both parties can generate the same OTP based on the current time. This is a solution using an asymmetric key pair, meaning only the user needs the secret, and anyone with the public key can valid the OTP. The idea is to store the public key on an identity located on the blockchain, allowing for someone to use 2 factor authentication similar to Google Autenticator.

## How to use BIP32 and TOTP
Existing TOTP relies on a symmetric (shared) secret, the goal is to create an asymmetric version of TOTP. To do this we will use BIP32 to verify secret keys generated via signatures on timestamps.

We can do this by distributing the extended public key, meaning anyone can now derive this identity’s public keys. In order to keep things user friendly, a mobile app can be used by users to store the private seed, similar to google authenticator.

When verifying an account online, existing solutions of requiring a password would still apply, and this could act as a second factor of authentication. The difficulties of using this app is that a signature is much longer than the typical TOTP sequence (4-6 numbers). To overcome this, the easiest action would be to have the app talk directly to the site over an API. The mobile app will generate the private key (m/SITEID/UNIX_TIME_MINS) and sign the current time minute, and send it to the site. The site will derive the public key based off of the current time (m/SITEID/UNIX_TIME_MINS) and verify the signature, granting access.

This means both parties can generate the asymmetric keys used in the signature process. Instead of signing the time, the user could input some site generated value hashed with the time to generate a larger message digest to be signed. This process would also mean the signed value would be valid for at least 1 minute, plus whatever slippage should be allowed (1min in this implementation). Existing practices about clock syncing would also have to be used (already done in TOTP).
    
## Sequence Diagram
If an app was made similar to google authenicator, it would work like such:

![UML Sequence Diagram Img](https://imgur.com/vhnbTuW)

## Disclaimer
