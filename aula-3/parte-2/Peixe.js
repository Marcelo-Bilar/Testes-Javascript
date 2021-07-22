const Animal = require('./animal');

class Peixe extends Animal {
    constructor(nome, quantidadeNadadeiras) {
        super(nome);
        this.quantidadeNadadeiras = quantidadeNadadeiras;
    }
}

module.exports = Peixe;