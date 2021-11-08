const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${pessoa.nome}`)
    }
   }
   
   pessoa.imprimeNome() //Ana

   const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${this.nome}`)
    }
   }
   
   pessoa1.imprimeNome() //Ana

   function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
   }

   imprimeNomeEmail()

   const pessoa2 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   const pessoa3 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   pessoa2.imprimeInfo()
   //nome: Ana, email a@email.com
   pessoa3.imprimeInfo()
   //nome: Paula, email p@email.com

   function Pessoa(nome, email){
    this.nome =nome
    this.email =email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
   }

   const pessoa10 = new Pessoa("Ana", "a@email.com")
   const pessoa20 = new Pessoa("Paula", "p@email.com")
   
   pessoa10.imprimeNomeEmail()
   // nome: Ana, email: a@email.com
   pessoa20.imprimeNomeEmail()
   // nome: Paula, email: p@email.com

   function imprimeNomeEmail2(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente11 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente21 = {
    nome: "Fred",
    email: "f@email.com"
   }

   imprimeNomeEmail2.call(cliente11, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail2.call(cliente21, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

imprimeNomeEmail2(cliente11, "cliente especial")
// [object Object] - nome: undefined, email: undefined

imprimeNomeEmail2(cliente21, "cliente estudante")
// [object Object] - nome: undefined, email: undefined

function imprimeNomeEmail3(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
   const cliente12 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente22 = {
    nome: "Fred",
    email: "f@email.com"
   }

   const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail3.apply(cliente12, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail3.apply(cliente22, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

   const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia