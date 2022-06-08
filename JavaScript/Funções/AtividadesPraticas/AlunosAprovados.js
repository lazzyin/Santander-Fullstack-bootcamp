const alunos = [
    {
        nome: "John",
        nota:"8",
    },
    {
        nome: "Jane",
        nota:"6",
    },
    {
        nome: "Joseph",
        nota:"4",
    },
]

function AlunosAprovados(alun, med) {
    aprovados=[]
    for (i = 0; i < alun.length; i++){
        const { nome, nota }=alun[i];
        if (nota >= med) {
            aprovados.push(nome)
        }
    }
    return console.log(aprovados)
}

AlunosAprovados(alunos,6)