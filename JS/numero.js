// Função para verificar se um número é inteiro positivo
function validarNumero(num) {
    return Number.isInteger(num) && num > 0;
}

// Função para solicitar um número inteiro positivo ao usuário
function solicitarNumero() {
    let num = parseFloat(prompt("Digite um número inteiro positivo:"));
    if (!validarNumero(num)) {
        console.log("Por favor, digite um número inteiro positivo válido.");
        return solicitarNumero(); // Chamada recursiva se o número não for válido
    }
    return num;
}

// Função para realizar a divisão de dois números
function dividirNumeros(a, b) {
    return a / b;
}

// Função principal
function main() {
    console.log("Este programa divide dois números inteiros positivos.");
    
    // Solicitar dois números inteiros positivos
    let numero1 = solicitarNumero();
    let numero2 = solicitarNumero();
    
    // Dividir os números
    let resultado = dividirNumeros(numero1, numero2);
    
    // Imprimir o resultado
    console.log(`O resultado da divisão de ${numero1} por ${numero2} é: ${resultado}`);
}

// Chamada da função principal
main();
