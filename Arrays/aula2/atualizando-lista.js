const listaDeChamada = ['João', 'Ana', 'Caio','Lara', 'Marjorie', 'Leo']

console.log(`Lista de chamada: ${listaDeChamada}`)

listaDeChamada.splice(1, 3, 'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)

listaDeChamada.splice(2, 0, "Thiago")

console.log(`Lista de chamada: ${listaDeChamada}`)