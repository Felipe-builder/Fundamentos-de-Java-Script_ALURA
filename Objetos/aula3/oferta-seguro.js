const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '15444322982',
    email: 'andre@email.com',
    fones: [ '55634728291', '88599930200' ],
    dependentes: [
        { nome: 'Sara Silva', parentesco: 'filha', dataNasc: '20/03/2011' },
        {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
        }
    ],
    saldo: 100,
    depositar: function(valor)
    {
        this.saldo += valor
    }
}

const propsClientes = Object.keys(cliente);

console.log(propsClientes);

function oferecerSeguro(obj){
    
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)
