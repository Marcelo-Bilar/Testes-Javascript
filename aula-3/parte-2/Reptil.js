const Animal = require('./animal');

class Reptil extends Animal {
    constructor(nome, controlaTemperaturaCorpo) {
        super(nome);
        this.controlaTemperaturaCorpo = controlaTemperaturaCorpo || false;
    }
}

module.exports = Reptil;