function ehPalindromo(palavra) {
    const palavraNormalizada = palavra.toLowerCase().replace(/[^a-z0-9]/g, '');
    const palavraInvertida = palavraNormalizada.split('').reverse().join('');
    return palavraNormalizada === palavraInvertida;
}

const palavra = "Ana";
const resultado = ehPalindromo(palavra);
console.log(resultado);
