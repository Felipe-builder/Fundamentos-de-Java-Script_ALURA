const texto1 = "Olá, Mundo!";
const texto2 = 'Olá, Mundo!';
const senha = 'senhaSuperSegura456!';
const stringDeNumero = "34567";

const citacao = 'O leo disse "oi!"';
const frase = "Meu nome é ";
const meuNome = "Leonardo";
console.log(citacao)

// concatenação (+)
console.log(frase+meuNome)

//codigicação de strings
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//comparações
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// length
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


//template string ou template literal
