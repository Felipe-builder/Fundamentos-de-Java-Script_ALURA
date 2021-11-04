const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]
let listaDeNotasEAlunos1 = [['João', 'Juliana', 'Caio', 'Ana'], [10, 7, 9, 6]]

console.log(listaDeNotasEAlunos)

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)
console.log(`${listaDeNotasEAlunos1[0][1]}, sua média é ${listaDeNotasEAlunos1[1][1]}`)

idades = [30, 35, 28]
nomes = ["Ana", "Juliana", "Leonardo"]
faculdade = [false, true, true]

funcionarios = [nomes,idades,faculdade]

console.log(`${funcionarios[0][0]} tem ${funcionarios[1][0]} anos e a faculdade ${funcionarios[2][0]}`)