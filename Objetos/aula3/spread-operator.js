const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)

const guerreiro1 = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro1)

const mago = {
 nome: "Gandalf",
 classe: "mago"
}
 const guerreiro2 = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const ranger = {
 nome: "Legolas",
 classe: "ranger"
}

const personagens = { ...mago, ...guerreiro2, ...ranger }// vai sobrescrever os outros objetos.
console.log(personagens)

const personagens1 = { mago, guerreiro2, ranger } // não sobrescreve
console.log(personagens1)