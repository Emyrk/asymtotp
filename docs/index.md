# AsymTOTPPublic

[index.js:60-62](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L60-L62 "Source code on GitHub")

This is the AsymTOTP public, share with everyone

**Parameters**

-   `secret` **secret** Need the secret to generate the public
-   `node`  

## toBase58

[index.js:86-88](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L86-L88 "Source code on GitHub")

Public node to base58 string

Returns **String** base58 version of node to be sent

## fromBase58

[index.js:69-71](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L69-L71 "Source code on GitHub")

Public node from base58 string

**Parameters**

-   `str` **String** String version of pub node

Returns **AsymTOTPPublic** 

## fromSecret

[index.js:78-80](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L78-L80 "Source code on GitHub")

Public node from secret master node

**Parameters**

-   `secret` **bitcoin.hdWallet** 

Returns **AsymTOTPPublic** 

# AsymTOTPSecret

[index.js:40-43](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L40-L43 "Source code on GitHub")

This is the AsymTOTP secret, do not share with anyone

**Parameters**

-   `mnemonic` **String** 12 word mnemonic

## getOTP

[index.js:50-54](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L50-L54 "Source code on GitHub")

**Parameters**

-   `site` **** [description]

Returns **** [description]

# bufferToHex

[index.js:116-118](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L116-L118 "Source code on GitHub")

Converts a `Buffer` into a hex `String`

**Parameters**

-   `buf` **Buffer** 

Returns **String** 

# intToBuffer

[index.js:145-149](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L145-L149 "Source code on GitHub")

Converts an `Number` to a `Buffer`

**Parameters**

-   `i` **Number** 

Returns **Buffer** 

# intToHex

[index.js:156-160](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L156-L160 "Source code on GitHub")

Converts a `Number` into a hex `String`

**Parameters**

-   `i` **Number** 

Returns **String** 

# isHexString

[index.js:170-178](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L170-L178 "Source code on GitHub")

Is the string a hex string.

**Parameters**

-   `value` **String** 
-   `length` **Number** 

Returns **Boolean** output the string is a hex string

# padToEven

[index.js:186-198](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L186-L198 "Source code on GitHub")

Pads a `String` to have an even length

**Parameters**

-   `value` **String** 

Returns **String** output

# randomMnemonic

[index.js:28-30](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L28-L30 "Source code on GitHub")

Generates a random 12 word mnemonic seed

Returns **String** 12 word mnemonic

# sha256

[index.js:134-137](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L134-L137 "Source code on GitHub")

Creates SHA256 hash of the input

**Parameters**

-   `a` **Buffer or Array or String or Number** the input data

Returns **Buffer** 

# toBuffer

[index.js:204-226](https://github.com/Emyrk/asymtotp/blob/f034da26f1655686aca73ed35eec4bca80924569/index.js#L204-L226 "Source code on GitHub")

Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.

**Parameters**

-   `v` **Any** the value
