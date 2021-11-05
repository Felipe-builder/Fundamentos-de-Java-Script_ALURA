const clientes = [
    {
        nome: 'Andre',
        cpf: '15444322982',
        dependentes: [
            { 
                nome: 'Sara Silva',
                parentesco: 'filha',
                dataNasc: '20/03/2011' 
            }
        ]
    },
    {
        nome: 'Juliana',
        idade: 36,
        cpf: '49425531687',
        dependentes: [
            {
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '30/08/2020'
            }
        ]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
// const listaDependentes = [clientes[0].dependentes, clientes[1].dependentes] //fica separado em listas
// let listaDependentes = []
// for (let index = 0; index < clientes.length; index++) {
//     listaDependentes.push(...clientes[index].dependentes);  
// }
console.log(listaDependentes)
