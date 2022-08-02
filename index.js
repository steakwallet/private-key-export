const bip39 = require("bip39");
const ethers = require("ethers");

const [, , mnemonic] = process.argv;

async function main() {
  if (!bip39.validateMnemonic(mnemonic)) {
    console.log("Invalid mnemonic");
    return;
  }

  const seed = await bip39.mnemonicToSeed(mnemonic);

  const hdNode = ethers.utils.HDNode.fromSeed(seed);
  console.log(hdNode.privateKey);
}

main();
