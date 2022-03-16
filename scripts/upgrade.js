const { ethers, upgrades } = require("hardhat");

async function main() {
  const tuttleUpgrade = await ethers.getContractFactory("TuttleUpgrade");
  const tuttlePush = await upgrades.upgradeProxy(
    // '0x7374b28F49192CB628634BAE81D892d418d72Fe3', // RINKEBY address of the previous
    '0x29989769868a93923fE0e813f436dB68A3685067', // MAINNET address of the previous
    tuttleUpgrade,
  );

  await tuttlePush.deployed();
  console.log("tuttle VIP upgraded at:", tuttlePush.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })