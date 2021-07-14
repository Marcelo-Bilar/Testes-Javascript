const valido = true;
const nome = "Douglas";
let idade = 25;

if (valido || idade >= 50) {
    console.log("expressão válida ");
} 
else {
    console.log("expressão inválida");
}

//comparação
const marca = process.argv[2];

if (marca === "volks") {
    console.log("marca atendida");
}
else {
    console.log("marca não atendida");
}

//switch case
const listaMarcas = ["volks", "ford"];

if (marca === "volks") {
    console.log("marca atendida");
}
else if (marca === "ford"){
    console.log("marca atendida");
}
else {
    console.log("marca não atendida");
}

switch (marca) {
    case "volks":
        console.log("switch - volks atendida");
        break;
    case "ford":
        console.log("switch - ford atendida");
        break;
    default:
        console.log("switch - marca não atendida");
        break;
}