var express = require('express');
var router =  express.Router();
var path = require('path');

const EthereumTx = require('ethereumjs-tx').Transaction;



router.post('/', function(req,res,next)
{


 
  var sccode=req.body.sccode;
  console.log(sccode);

//  var bytecode=req.body.bytecode;
  //console.log(bytecode);

  
  var ContractJSON =  require(path.join(__dirname,'../build/contracts/token.json'))

  contractAddress = ContractJSON.networks['5777'].address;
  console.log("contractAddress is",contractAddress);


  const abi = ContractJSON.abi;
  console.log("abi is",abi);


let contractAcsddress=  web3.eth.getCode(contractAddress);
console.log("getcode",contractAcsddress)


  //Contract object and account info
let deploy_contract = new web3.eth.Contract(abi);
let account = '0xE7Cf2dD902F41F85902beCc7c97f5cEF7a711977';
bytecode = ContractJSON.bytecode;
console.log("bytecode is",bytecode);


// Function Parameter
let payload = {
    data: bytecode
}

let parameter = {
    from: account,
    gas: web3.utils.toHex(800000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei'))
}

// Function Call
deploy_contract.deploy(payload).send(parameter, (err, transactionHash) => {
    console.log('Transaction Hash :', transactionHash);
}).on('confirmation', () => {}).then((newContractInstance) => {
    console.log('Deployed Contract Address : ', newContractInstance.options.address);
    
})
  // MyContract =  new web3.eth.Contract(abi,contractAddress);
  




});



module.exports = router;
    

