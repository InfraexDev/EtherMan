require('dotenv').config();
var Web3 = require('web3');
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

function totBal(currency){
    if (currency == 'dai')
        var ContractAddress = process.env.DAI_ContractAddress;
    var i = 0;
    var bal1 = 0;
    var bal2 = 0;
    var baseAbi = [
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "type": "function"
        }
    ];

    var tokenContract =  web3.eth.contract(baseAbi);
    var contractinstance = tokenContract.at(ContractAddress);
    var decimal = contractinstance.decimals();
    web3.eth.accounts.forEach( function(e){

        bal1 = parseInt(contractinstance.balanceOf(e));
        bal2 += parseInt(bal1);
    });
    return (bal2 / Math.pow(10, decimal)).toString();
};

module.exports = totBal;
