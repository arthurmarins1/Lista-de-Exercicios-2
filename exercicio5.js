function somaMatriz(matriz) {
    let soma = 0;

    matriz.forEach(function(linha) {
        linha.forEach(function(elemento) {
            soma += elemento;
        });
    });

    return soma;
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const resultado = somaMatriz(matriz);
console.log(resultado);
