require('dotenv').config();
var Web3 = require('web3');
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // web3 = new Web3(new Web3.providers.IpcProvider('/home/ubuntu/.ethereum/geth.ipc', require('net')));
}

String.prototype.leftJustify = function( length, char ) {
    var fill = [];
    while ( fill.length + this.length < length ) {
        fill[fill.length] = char;
    }
    return fill.join('') + this;
};
String.prototype.rightJustify = function( length, char ) {
    var fill = [];
    while ( fill.length + this.length < length ) {
        fill[fill.length] = char;
    }
    return this + fill.join('');
};

let daiABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
    {"constant":false,
        "inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],
        "name":"transferFrom",
        "outputs":[{"name":"","type":"bool"}],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"bytes32"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
    {
        "constant":false,
        "inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],
        "name":"transfer",
        "outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable",
        "type":"function"
    }
    ,{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"guy","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"symbol_","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"}];

console.log(process.env.DAI_ContractAddress);
var ContractAddress = process.env.DAI_ContractAddress;

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

var filter = web3.eth.filter({toBlock:'pending', address: web3.eth.coinbase});
filter.watch(function (error, log) {
    console.log(log);
});

var tokenContract =  web3.eth.contract(baseAbi);
var contractinstance = tokenContract.at(ContractAddress);
var decimal = contractinstance.decimals();
function tryCollectDai() {
    var dai_accounts = web3.eth.accounts.slice(1);
    dai_accounts.forEach( function(guy){

        bal1 = parseInt(contractinstance.balanceOf(guy));
        if (bal1 >= 3 * Math.pow(10, decimal)) {
            console.log(guy, bal1);
            var amount = '0x' + bal1.toString(16);
            var data = abi_encode('transfer(address,uint256)',[web3.eth.coinbase,amount]);
            var gasAmount = web3.eth.estimateGas({from: guy, to: ContractAddress, data: data}) * 2;
            var gasPrice = web3.eth.gasPrice * 1.5;
            var estimateFee = gasAmount * gasPrice;
            if(web3.eth.getBalance(guy) > estimateFee) {
                console.log('collect dai from guy address');
                if(web3.personal.unlockAccount(guy, process.env.GUY_PASSPHARSE, 3000)){
                    console.log(web3.eth.sendTransaction({
                        from: guy,
                        to: ContractAddress,
                        gas: gasAmount,
                        gasPrice: gasPrice,
                        data: data}
                    ));
                } else {
                    return 'Guy Password Failed';
                    return;
                }
            } else {
                filter.get(function (errror, logs) {
                    if(logs.length > 0) {
                        console.log("Wait Pending Transactions Total");
                        return;
                    } else {
                        // Send ether to guy for DAI transfer fee
                        console.log('send ether to guy address');
                        if(web3.personal.unlockAccount(web3.eth.coinbase, process.env.DAI_PASSPHARSE, 3000)) {
                            console.log(web3.eth.sendTransaction({
                                from: web3.eth.coinbase,
                                to: guy,
                                value: estimateFee * 3
                            }))
                        } else {
                            console.error('Coinbase Password Failed');
                            return;
                        }
                    }
                });
            }
            console.log(web3.eth.getBalance(guy));
        }
    });
}


function abi_encode(method, vargs=[]) {
    var data = web3.sha3(method,256).substring(0,10);
    vargs.forEach(elem=>{
        data = data.concat(elem.replace(/0x/g,'').leftJustify(64, '0'));
    });
    console.log(data);
    return data;
}

tryCollectDai();


