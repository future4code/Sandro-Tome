/* Exercício 1: */

//a) Para acessar os parâmetros passados na linha de comando utilizamos a propriedade process.argv 

//b)

const name = process.argv[2]
const age = Number(process.argv[3])

console.log(`Olá ${name}! Você tem ${age} anos.`)

//c)

console.log(`Olá ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`)