# Tokens

This repo contains Solidity smart contract code to issue simple, standards-compliant tokens on Ethereum. It can be used to create any form of asset, currency, coin, hours, usage tokens, vunk, etc.  

[ABC.sol](https://github.com/OriginalMy/blob/master/contracts/ABC.sol) is an example of a token that has optional extras fit for your issuing your own tokens, to be mainly used by other humans. It includes:  

1. Initial Finite Supply (upon creation one specifies how much is minted).  
2. In the absence of a token registry: Optional Decimal, Symbol & Name.  
3. Optional approveAndCall() functionality to notify a contract if an approval() has occurred.  
4. Permits Issuing of new tokens
5. Enable vanish (burn) tokens, just from the owner
6. Enable freezing accounts 

This token is based on [HumanStandardToken](https://github.com/ConsenSys/Tokens/blob/master/contracts/HumanStandardToken.sol) from Consensys.

There is a set of tests written for the ABC.sol using the Truffle framework to do so.

Standards allows other contract developers to easily incorporate your token into their application (governance, exchanges, games, etc). It will be updated as often as possible.  

## Testing

```npm install```

For getting truffle-hdwallet-provider. Solidity tests have to still be written.

Uses Truffle 3.x.

## Contributing

**Pull requests are welcome! Please keep standards discussions to the EIP repos.**

When submitting a pull request, please do so to the `staging` branch. 
