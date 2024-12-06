// Declaração da função 'multiplicar' com dois parâmetros: 'a' e 'b', ambos do tipo 'number'.
// A função retorna um valor do tipo 'number', que é o produto de 'a' e 'b'.
function multiplicar(a: number, b: number): number {
    return a * b;
}


// Chamada da função 'multiplicar' com os valores 2 e 2 como argumentos.
// O resultado da multiplicação será armazenado na constante 'resultadoMultiplicacao'.
const resultadoMultiplicacao = multiplicar(2, 2);

// Exibe no console o resultado da multiplicação, formatado em uma string com template literals.
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);