require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/CmuoyYn9RzpOnmEhB5XdDfgKzJHLzMNK",
       accounts: ["5dbe1c92849a8335c161a51cd7005bdf044333a8bf283517fc5f61245fcb4f89"]
    }
  }

};
