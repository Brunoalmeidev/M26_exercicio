// Declaração da função 'saudar' que recebe um parâmetro 'nome' do tipo 'string'.
// A função retorna um valor do tipo 'string', que é a concatenação de "olá" com o valor do parâmetro 'nome'.
function saudar(nome: string): string {
    return "olá" + nome;
}

// Chamada da função 'saudar' com o argumento "Carlos".
// O valor retornado pela função será armazenado na constante 'saudacao'.
const saudacao = saudar("Carlos");

// Exibe no console o valor da constante 'saudacao'.
// Nesse caso, o resultado será "oláCarlos".
console.log(saudacao);