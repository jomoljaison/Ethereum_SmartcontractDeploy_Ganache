const HDWalletProvider = require("truffle-hdwallet-provider");
var path = require('path');

// Web3 constructor function.
const Web3 = require("web3");

// Get bytecode and ABI after compiling
// solidity code.

const interface = require(path.join(__dirname,'build/contracts/token.json'));

const provider = new HDWalletProvider(
"2e90151318bb7bbdce4e2399d044a275496f26cf3568e91ac8a8c33439536f2b",
// Remember to change this to your own phrase!
"https://mainnet.infura.io/v3/b55a95e35ac54d0cb3acb5e81971ef49"
// Remember to change this to your own endpoint!
);

// Create an instance of Web3 and pass the
// provider as an argument.
const web3 = new Web3(provider);

const deploy = async () => {
// Get access to all accounts linked to mnemonic
// Make sure you have metamask installed.
const accounts = await web3.eth.getAccounts();

console.log("Attempting to deploy from account", accounts[0]);

// Pass initial gas and account to use in the send function
const result = await new web3.eth.Contract(interface)
	.deploy({ data: bytecode })
	.send({ gas: "1000000", from: accounts[0]});

console.log("Contract deployed to", result.options.address);
};

deploy();

