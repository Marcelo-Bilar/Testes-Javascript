const readline = require('readline');
const Produto = require('../Produto');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtosMercado = [
    new Produto("feijão", 5), 
    new Produto("arroz", 10.50),
    new Produto("melancia", 2),
    new Produto("suco", 10),
    new Produto("alface", 2)
];

const validarLista = (listaMercado) => {
    if(!listaMercado) {
        throw Error("A lista não pode ser vazia");
    }

    const itensDesejados = listaMercado.split(",");
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length;

    if (itensInvalidos > 0 ) {
        throw Error(`Existem ${itensInvalidos} itens inválidos`);
    }
    
    return itensDesejados;
}

const obterDisponibilidade = (listaValida) => {
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    for (const item of listaValida) {
        const itemFormatado = item.trim().toLowerCase();
        const produto = produtosMercado
        .find(produtoMercado => produtoMercado.nome == itemFormatado);

        if (produto) {
            produtosDisponiveis.push(produto);
        } else {
            produtosIndisponiveis.push(itemFormatado);
        }
    }

    return {
        produtosDisponiveis,
        produtosIndisponiveis
    }
}

leitor.question("Digite a lista de produtos separados por vírgula: ", listaProdutos => {
    try {
        const listaValida = validarLista(listaProdutos);
        const disponibilidade = obterDisponibilidade(listaValida);

        console.log("Os seguintes itens estão disponiveis: ", disponibilidade.produtosDisponiveis);

        console.log("Os seguintes produtos estão indisponiveis", disponibilidade.produtosIndisponiveis);

        const disponiveisOrdenados = disponibilidade.produtosDisponiveis.sort((produto1, produto2) => produto1.nome.localeCompare(produto2.nome));

        console.log("Produtos Ordenados alfabeticamente", disponiveisOrdenados);

    } catch(e) {
        console.log(`Erro ao processar a lista! (${e.message})\n`);
    }
    leitor.close();
})