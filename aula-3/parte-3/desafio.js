// importar as classes
const Boleto  = require('./Boleto');
const Pix  = require('./Pix');
// importar enum
const TipoPagamento = require('./TipoPagamento');

// receber a forma de pagamento e o valor
const formaDePagamento = process.argv[2]; //primeiro argumento da função
const valor = process.argv[3]; //segundo argumento da função

// validar parametros de entrada
if(!formaDePagamento) {
    console.log('Forma de pagamento não informada!');
    return;
}
if(!valor) {
    console.log('valor não informado!');
    return;
}

let objetoFormaPagamento;

const eBoleto = formaDePagamento.toLowerCase() === TipoPagamento.BOLETO.toLowerCase();
const ePix = formaDePagamento.toLowerCase() === TipoPagamento.PIX.toLowerCase();

// identificar a forma de pagamento
if(eBoleto) {
    objetoFormaPagamento = new Boleto();
} else if (ePix) {
    objetoFormaPagamento = new Pix();
} else {
    console.log('Forma de pagamento inválida!');
    return;
}

// efetuar pagamento
objetoFormaPagamento.efetuarPagamento(valor);