//Chama as classes dos animais
const Ave = require('./Ave');
const Mamifero = require('./Mamifero');
const Peixe = require('./Peixe');
const Reptil = require('./Reptil');

//receber o nome de  um animal
const nomeAnimal = process.argv[2];

if (!nomeAnimal) {
    console.log('Favor passar o nome do animal');
    return;
}

//define a lista de animais que o programa espera
const listaAnimais = [
    new Mamifero("vaca", 4),
    new Reptil("Cobra"),
    new Ave("Gaviao", true),
    new Peixe("Tubarao", 2)
];

//identifica o animal que o usuario digitou
const animalSelecionado = listaAnimais.find(animal => animal.nome.toLowerCase() === nomeAnimal.toLowerCase())

// validar se o animal foi encontrado
if(!animalSelecionado) {
    console.log('O animal não esta na nossa lista!');
    return;
}


// identificar a qual grupo o animal pertence
if(animalSelecionado instanceof Mamifero) {
    // exibir os dados genericos e exclusivos do animal
    console.log(`O animal encontrado é um mamifero com nome ${animalSelecionado.nome} e quantidade de mamas é ${animalSelecionado.quantidadeMamas}`);
} else if(animalSelecionado instanceof Reptil) {
    // exibir os dados genericos e exclusivos do animal
    console.log(`O animal encontrado é um reptil com nome ${animalSelecionado.nome} e sabe controlar a temperatura ${animalSelecionado.controlaTemperaturaCorpo}`);
} else if(animalSelecionado instanceof Ave) {
    // exibir os dados genericos e exclusivos do animal
    console.log(`O animal encontrado é uma ave com nome ${animalSelecionado.nome} e sabe voar ${animalSelecionado.voa}`);
} else if(animalSelecionado instanceof Peixe) {
    // exibir os dados genericos e exclusivos do animal
    console.log(`O animal encontrado é um peixe com nome ${animalSelecionado.nome} e quantidade de nadadeiras é ${animalSelecionado.quantidadeNadadeiras}`);
}



