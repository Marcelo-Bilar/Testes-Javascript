const formaPagamento = require('./FormaPagamento');

class Boleto extends formaPagamento {
    efetuarPagamento(valor) {
        console.log(`Efetuando pagamento de R$: ${valor} no boleto`);
    }
}

module.exports = Boleto;