function substituirElemento(array, valorAntigo, novoValor) {
    return array.map(function(elemento) {
        return elemento === valorAntigo ? novoValor : elemento;
    });
}

const array = [1, 2, 3, 1, 4, 1, 5];
const resultado = substituirElemento(array, 1, 99);
console.log(resultado);
