require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note machine equip grid problem equal gate'; 
let testAccounts = [
"0x36b461b1f8b3ae1fc10f5a0cf85207aea2826f4f3374e22375cbf89024b7bead",
"0xba1dec1440f8b614aec392ba2e45e05bec06f72020daf1503ea8ea7844dc8903",
"0xe2e8d58099621c54b1752a3b91c82749f4f2a46d846f72df4c080f583efeec75",
"0x0874c769d7ce26a7e5ad97757aaf1dfe079d800d8b0b174efff8585b636f6399",
"0x1318284fb86cf9245d46f6e1c028c493b798253bfae8ff510983d4eb31edcabf",
"0x9604558b4818e9e8f8c976a3dcc0c1dbe2f7756c3c0de4c75125cd29fd97303e",
"0xd8e314dc882fc3b0d3265ccd2d2769aa5d61284dd87e329c83736d515dc307a2",
"0x8a16068524030f0294a3f6d9b235b0a5d6adc64820a137977a76e7c33367c09f",
"0xcd9dd84ac7ffc9624f3f573664dbaf23305b24e24e85a55eb4588d77193640c7",
"0x6b29765fef467f25a53a6d74009990166b1718ad51b61ed32bdfe738f187638e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

