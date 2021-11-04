// parâmetro de função

function soma(x, y) {
    return x + y;
}

console.log(soma(4, 8))
console.log(soma(123, 53))
console.log(soma(131, -29))

// parâmetros X argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `eu nome é ${nome} e minnha idade é ${idade}`
}

console.log(nomeIdade("Gustavo", 35))

function multiplica(numero1=1, numero2=1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3, 3)))
console.log(multiplica(soma(4,5)))
 