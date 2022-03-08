const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const MerkleContract = await hre.ethers.getContractFactory("MerkleDistributor");

  const merkleContract = await MerkleContract.deploy(
      "0xc778417e063141139fce010982780140aa0cd5ab",                                     // token
      "0x07e4720c559a375114bfeb18a115ca0754d476d5751b5654f9d3e4e54a3a3832",             // merkle root
      "0x198e10b883B5A64F4ad46038B7Fb0691D20929eF"                                      // address that can sweep
  );

  console.log("Merkle Claim deployed to:", merkleContract.address);
  console.log("Tx hash: " + merkleContract.deployTransaction.hash);
}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });