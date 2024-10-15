function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    if (colunasA !== linhasB) {
        throw new Error("O numero de colunas da primeira matriz deve ser igual ao numero de linhas da segunda.");
    }

    const resultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return resultado;
}

const matrizA = [
    [1, 2],
    [3, 4]
];

const matrizB = [
    [5, 6],
    [7, 8]
];

const resultado = multiplicarMatrizes(matrizA, matrizB);
console.log(resultado);
