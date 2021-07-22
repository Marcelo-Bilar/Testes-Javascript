const formaPagamento = require('./FormaPagamento');

class Pix extends formaPagamento {
    efetuarPagamento(valor) {
        console.log(`Efetuando pagamento de R$: ${valor} no pix`);
    }
}

module.exports = Pix;