const hre = require("hardhat");

async function main() {
    // We get the contract to deploy
    const MerkleContract = await hre.ethers.getContractFactory("MerkleDistributor");

    const merkleContract = await MerkleContract.deploy(
        "0x5fbdb2315678afecb367f032d93f642f64180aa3",                                     // token
        "0xb1962a6d29a4d37e8622d56746d28942ea8f88033cac5dd976b7416e11d23357",             // merkle root
        "0x198e10b883B5A64F4ad46038B7Fb0691D20929eF"                                      // address that can sweep
    );
  
    console.log("Merkle Claim deployed to:", merkleContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });