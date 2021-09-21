function primeiroOperador(){
    console.log("Avaliando primeiro operador");
    return true;
}

function segundoOperador(){
    console.log("Avaliando segundo operador");
    return false;
}

//usando not
const logico = false;

console.log("NOT: ");
console.log(!logico);

//usando and
console.log("AND: ");
const a = false && primeiroOperador()
console.log(a);
const b = true && primeiroOperador()
console.log(b);

//usando or
console.log("OR: ");
const c = false || segundoOperador()
console.log(c);
const d = true || segundoOperador()
console.log(d);
