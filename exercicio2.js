function ordenarPorIdade(pessoas) {
    return pessoas.sort(function(a, b) {
        return a.idade - b.idade;
    });
}

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 22 },
    { nome: "Pedro", idade: 28 }
];

const resultado = ordenarPorIdade(pessoas);
console.log(resultado);
