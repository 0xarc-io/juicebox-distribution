const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const MerkleContract = await hre.ethers.getContractFactory("MerkleDistributor");

  const merkleContract = await MerkleContract.deploy(
      "0x3abf2a4f8452ccc2cf7b4c1e4663147600646f66",                                     // token
      "0xba0ccda021dd3008d51728ccd530dfe42d6bba07f8118d8a796e26d80e305009",             // merkle root
      "0xAF28bcB48C40dBC86f52D459A6562F658fc94B1e"                                      // address that can sweep
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