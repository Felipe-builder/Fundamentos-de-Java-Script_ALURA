const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "15444322982",
    email: "andre@email.com",
    fones: ["55634728291", "88599930200"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNascimento: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)