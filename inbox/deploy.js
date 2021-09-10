const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'oak traffic segment empty response fabric solve cliff file museum tuition much',
    'https://rinkeby.infura.io/v3/512909f1b2e94626afdd9f47d30b6de2'
);

const web3 = new Web3(provider);

// function so you can use async/await
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Blake, Lexi, Max, Mushu, 10 Sep 2021'] })
        .send({ gas: '1000000', gasPrice: '5000000000' ,from: accounts[0]});

    console.log('result');
};
deploy();
