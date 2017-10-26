# AsymTOTPPublic

[index.js:59-61](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L59-L61 "Source code on GitHub")

This is the AsymTOTP public, share with everyone

**Parameters**

-   `secret` **secret** Need the secret to generate the public
-   `node`  

## toBase58

[index.js:85-87](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L85-L87 "Source code on GitHub")

Public node to base58 string

Returns **String** base58 version of node to be sent

## fromBase58

[index.js:68-70](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L68-L70 "Source code on GitHub")

Public node from base58 string

**Parameters**

-   `str` **String** String version of pub node

Returns **AsymTOTPPublic** 

## fromSecret

[index.js:77-79](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L77-L79 "Source code on GitHub")

Public node from secret master node

**Parameters**

-   `secret` **bitcoin.hdWallet** 

Returns **AsymTOTPPublic** 

# AsymTOTPSecret

[index.js:39-42](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L39-L42 "Source code on GitHub")

This is the AsymTOTP secret, do not share with anyone

**Parameters**

-   `mnemonic` **String** 12 word mnemonic

## getOTP

[index.js:49-53](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L49-L53 "Source code on GitHub")

**Parameters**

-   `site` **** [description]

Returns **** [description]

# bufferToHex

[index.js:115-117](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L115-L117 "Source code on GitHub")

Converts a `Buffer` into a hex `String`

**Parameters**

-   `buf` **Buffer** 

Returns **String** 

# intToBuffer

[index.js:144-148](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L144-L148 "Source code on GitHub")

Converts an `Number` to a `Buffer`

**Parameters**

-   `i` **Number** 

Returns **Buffer** 

# intToHex

[index.js:155-159](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L155-L159 "Source code on GitHub")

Converts a `Number` into a hex `String`

**Parameters**

-   `i` **Number** 

Returns **String** 

# isHexString

[index.js:169-177](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L169-L177 "Source code on GitHub")

Is the string a hex string.

**Parameters**

-   `value` **String** 
-   `length` **Number** 

Returns **Boolean** output the string is a hex string

# padToEven

[index.js:185-197](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L185-L197 "Source code on GitHub")

Pads a `String` to have an even length

**Parameters**

-   `value` **String** 

Returns **String** output

# randomMnemonic

[index.js:27-29](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L27-L29 "Source code on GitHub")

Generates a random 12 word mnemonic seed

Returns **String** 12 word mnemonic

# sha256

[index.js:133-136](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L133-L136 "Source code on GitHub")

Creates SHA256 hash of the input

**Parameters**

-   `a` **Buffer or Array or String or Number** the input data

Returns **Buffer** 

# toBuffer

[index.js:203-225](https://github.com/Emyrk/asymtotp/blob/a9031deb760c63352805b9b4b29c2279b6fa3172/index.js#L203-L225 "Source code on GitHub")

Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.

**Parameters**

-   `v` **Any** the value
