// scripts/deploy.js

const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const TokenContract = await ethers.getContractFactory("TestToken");
  const initialOwner = deployer.address;
  const myToken = await TokenContract.deploy(initialOwner);

  console.log("Token address:", myToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });