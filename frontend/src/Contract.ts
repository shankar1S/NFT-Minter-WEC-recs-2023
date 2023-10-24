import web3 from './web3';

const address = "0xCBf7Fc670b07cc4bC97cf8D0E188F1b06df8Fb71";

const abi = [
 //  Your Contract's abi code
];

// @ts-ignore
export default new web3.eth.Contract(abi, address);
