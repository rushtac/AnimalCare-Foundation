const animalcare = artifacts.require("Animalcare");

module.exports = function (deployer) {
  deployer.deploy(animalcare);
};
