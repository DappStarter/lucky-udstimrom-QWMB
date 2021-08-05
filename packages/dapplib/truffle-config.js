require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture struggle rate soccer minor hope nature swap genius'; 
let testAccounts = [
"0x6844a90019171d2a7aa2c678598d557443ef5da74f3029b54aa99bea3bb4ddf6",
"0x6fe97b96f2a9d46d8cfcd388aea49b6ececc4afaebb02a435324f6d99de4d273",
"0x56330f428ff1777f38f12ebecc1c87a65b3d39230e5db82784d619bc11a6907a",
"0xc38ea7614467c2b60b408c13f916f6e001f7b647cfa76c5c2bd6dab854b243bc",
"0xd8708b44e87f8c323d3c37225c90ed80cdc7881c92fec72a5eb4d569314b6fda",
"0x7d06e72552db511268cb03a7366c106ce8117fb510d1e3ab70eb4ab443c6aea1",
"0x558f7a071b987d15682c0d6eb5a4a51bcbf2ef667e39e0d4e9bc0706d70e8563",
"0x26942ecc8e1e73e31dda1c13fe44733fe373d82b50da2270e5cab122ac7c194e",
"0xaae7dd3c5aeed2f99d2384d2aba99e1e6279a7fe92915599d5eb1c8dc377ed0c",
"0x5c2b29816b8537e3e1ffba93dfe0e24ee112d015a0bf2cf8c877c7582f7ab258"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

