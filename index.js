//Verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1, temp;

    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }

    if (b === num || num === 0) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}

// Exemplo de uso
let numero = 21;  // Informe o número desejado
isFibonacci(numero);

//Verificar a existência da letra 'a' em uma string e contar a quantidade de ocorrências
function countLetterA(str) {
    let count = 0;

    for (let char of str) {
        if (char.toLowerCase() === 'a') {
            count++;
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
}

// Exemplo de uso
let texto = "JavaScript é uma linguagem de programação"; // Defina o texto desejado
countLetterA(texto);

//Cálculo do valor final da variável SOMA
let INDICE = 12, SOMA = 0, K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);  // Resultado final
