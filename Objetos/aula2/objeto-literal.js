const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

// pega a referencia de outro objeto
const objPersonagem2 = objPersonagem
console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

// de fato cria uma cópia
let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100

objPersonagem.nome = "Gandalf"
const objPersonagem3 = Object.create(objPersonagem)
objPersonagem3.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem3.nome) //Gandalf, o Cinzento
