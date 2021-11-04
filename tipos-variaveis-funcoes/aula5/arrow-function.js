function apresentar(nome) {
    return `meu nome é ${nome}`;
}

console.log(apresentar("Felipe"))

// Arrrow function
const apresentarArrow = nome => `meu nome é ${nome}`;

console.log(apresentar("Iasmim"))

const soma = (num1, num2) => num1 + num2;

console.log(soma(4, 6))

//Arrow funciton com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(4, 16))