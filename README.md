# Asymmetric Time Based One Time Password

Current OTP solutions require the sever and user to keep a shared secret as a seed. That way both parties can generate the same OTP based on the current time. This is a solution using an asymmetric key pair, meaning only the user needs the secret, and anyone with the public key can valid the OTP. The idea is to store the public key on an identity located on the blockchain, allowing for someone to use 2 factor authentication similar to Google Autenticator.

## Sequence Diagram
If an app was made similar to google authenicator, it would work like such:

![UML Sequence Diagram Img](https://imgur.com/vhnbTuW)

## Disclaimer

This is not built for actual use, just a proof of concept.

