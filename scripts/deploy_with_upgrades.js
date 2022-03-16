const { ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
  const tuttleDeploy = await hre.ethers.getContractFactory("TuttleTribe");
  const tuttleInSitu = await tuttleDeploy.deploy()
  await tuttleInSitu.deployed()
  console.log("Contract deployed to:", tuttleInSitu.address)

  const tuttleProxy = await upgrades.deployProxy(tuttleDeploy, { kind: 'uups' });

  await tuttleProxy.deployed();
  console.log("The Proxy is deployed to:", tuttleProxy.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })