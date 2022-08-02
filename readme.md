# steakwallet private-key-export

For historical reasons (and oversight on our part), Ethereum wallets in Steakwallet are not derived from the typical `m/44’/60’/0’/0/0` derivation path. This makes it difficult to import your Steakwallet into other wallets. For our upcoming OMNI release, and corresponding OMNI wallets, this incompatibility has been fixed.

This repository contains a script that will, given a mnemonic, print out the corresponding Steakwallet private key.

## Usage

```
yarn
node index.js "ENTER YOUR MNEMONIC HERE"
```
