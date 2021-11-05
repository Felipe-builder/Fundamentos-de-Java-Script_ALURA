const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "15444322982",
    email: "andre@email.com",
    fones: ["55634728291", "88599930200"],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]
}

console.log(cliente)
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome)
