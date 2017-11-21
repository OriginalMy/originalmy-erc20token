const ABC = artifacts.require(`./ABC.sol`)

module.exports = (deployer) => {
    const _initialAmount = 20000000000000000;
    const _name = "Anti Bureaucracy Coin";
    const _decimals = 8; 
    const _symbol = "ABC";
    deployer.deploy(ABC, _initialAmount, _name, _decimals, _symbol, {gas: 4000000})
}
