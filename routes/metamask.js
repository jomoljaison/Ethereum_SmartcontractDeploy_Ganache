
var express = require('express');
var router =  express.Router();

const EthereumTx = require('ethereumjs-tx').Transaction;

const Web3 = require("web3");


router.post('/', function(req,res,next)
{
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/b55a95e35ac54d0cb3acb5e81971ef49"))

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
})


module.exports = router;
