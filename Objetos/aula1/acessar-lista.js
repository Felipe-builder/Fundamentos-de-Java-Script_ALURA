const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "15444322982",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]
const chave = "nome"
console.log(cliente[chaves[0]])
console.log(cliente[chave])
console.log(cliente.nome)

console.log(cliente)

chaves.forEach(info => console.log(cliente[info]))

