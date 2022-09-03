require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
solidity: "0.8.0",
networks: {
rinkeby: {
url: 'https://eth-rinkeby.alchemyapi.io/v2/MfBqFQbdruParaK0r6ZT9nniQjs7SKqb',
accounts: ['994b4452f98a23b7fbb35f44695e15c18c9fa9b029408194cfd90c46fb0b899f'],

}

}

};

