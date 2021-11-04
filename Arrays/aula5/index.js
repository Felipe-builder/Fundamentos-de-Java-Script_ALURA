const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

const soma1 = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)

function operacaoNumerica(acum, atual) {
    return atual + acum
}

const soma2 = numeros.reduce(operacaoNumerica, 0)

console.log(soma) //170
console.log(soma1)
console.log(soma2)
