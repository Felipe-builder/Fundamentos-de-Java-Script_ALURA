const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros =[numerosPares, numerosImpares]

console.log(numeros)

const numeros1 =[...numerosPares, ...numerosImpares]

console.log(numeros1)


const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

console.log(num1, num2, outrosNumeros)

const [nome1 = 'Ju'] = []

console.log(nome1)

const pessoa = {
    nome: 'Ju',
    idade: 25,

}

const pessoaComTelefone = {...pessoa, telefone: 882919123}

console.log(pessoa, pessoaComTelefone)

const { idade } = pessoa

console.log(idade)

function imprimeDados({ nome, idade }) {
    console.log(nome, idade)
}

imprimeDados(pessoa)
