function contarOcorrencias(array) {
    let ocorrencias = {};

    array.forEach(function(numero) {
        if (ocorrencias[numero]) {
            ocorrencias[numero]++;
        } else {
            ocorrencias[numero] = 1;
        }
    });

    return ocorrencias;
}

const numeros = [1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5];
const resultado = contarOcorrencias(numeros);
console.log(resultado);
