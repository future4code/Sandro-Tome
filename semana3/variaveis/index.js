/* No exemplo a seguir 1:

a = 10
b = 10

console.log(b)

b = 5
console.log(a, b)

O resultado impresso no console, sera: 10, e 10 e 5; pois a primeira leitura vai reconhecer o valor de b como 10, e na segunda leitura o valor de b é alterado para 5 */


let nome = prompt("Qual o seu nome?")
console.log(nome)


let idade = prompt("Qual a sua idade?")
console.log(idade)

// tipo impresso como indefinido, pois os valores das variaveis nao foram atribuidos antes de perguntar os valores pelo comando prompt;
// Após o comando prompt, os valores foram definidos pelo usuario

let endereco = prompt("1. Gato ou cachorro")
console.log(endereco)

let cor = prompt("Qual a sua cor favorita?")
console.log(cor)

let serie = prompt("Qual a sua serie favorita?")
console.log(serie)

let filme = prompt("Qual a seu filme favorita?")
console.log(filme)

let desenho = prompt("Qual a sua desenho favorita?")
console.log(desenho)

// Exercicio 3

let comidasPreferidas = ["pizza", "bacon", "chocolate", "hamburguer", "churrasco"]

console.log(comidasPreferidas)
console.log(comidasPreferidas [0])
console.log(comidasPreferidas [1])
console.log(comidasPreferidas [2])
console.log(comidasPreferidas [3])
console.log(comidasPreferidas [4])

// Exercicio 4

let perguntas = ["Esta chovendo hoje?", "Esta frio?", "Voce ja tomou agua hoje?"]
let respostas = [true, false, true]
console.log(perguntas [0], respostas [0])
console.log(perguntas [1], respostas [1])
console.log(perguntas [2], respostas [2])