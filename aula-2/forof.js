const novosAlunos = ["Douglas", "Marcelo", "Pedro"];

const darBoasVindas = (nomeAluno) => {
    console.log(`Seja bem vindo ${nomeAluno}`);
}

for (const aluno of novosAlunos) {
    darBoasVindas(aluno);
}