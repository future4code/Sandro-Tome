/* console.log("Olá mundo!") */

/* ********************Exercícios de interpretação de código****************** */

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXERCÍCIO 1
// Leia o código abaixo:

/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) */

// a. O que vai ser impresso no console?
// Vai retornar os valores 10 e 50, respectivamente, pois a condição "variavel" será 
// multiplicada por 5, conforme solicitado no console.log

// b. O que aconteceria se retirasse os dois console.log e simplesmente invocasse a 
// função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// Nada seria impresso no console, mas os valores seriam retornados igualmente





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXERCÍCIO 2
// Leia o código abaixo:

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)   

// a. Explicite quais são as saídas impressas no console
// Será os nomes Darvas e Caio.

// b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
// No lugar de Darvas, seria impresso o nome Amanda

// >>>>>>>>>>>>>>>>>>>EXERCÍCIO 3
// O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas 
// palavras o que ela faz e sugira um nome melhor para ela!

/* const metodo = (array) => {
    let arrayFinal = [];
  
    for (let x of array) {
          if (x % 2 === 0) {
          arrayFinal.push(x * x)
          }
    }
  
    return arrayFinal;
  } */

// Se o resto da divisão do valor de x for igual a 0, então o resultado da multiplicação de x * x, deve ser 
// incluido na variavel arrayFinal.




/* ***************************Exercícios de escrita de código********************************** */




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXERCÍCIO 4
// Escreva as funções explicadas abaixo:

// a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações 
// sobre você, como: "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não 
// possui entradas, apenas imprimir essa mensagem.

/* function meusDados(){
    console.log(`Olá, meu nome é Sandro, tenho 23 anos, moro no Paraná e sou estudante.`)
}

meusDados() */

// b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome 
// (string), a idade (number), a cidade (string) e um boolean que representa se é estudante ou não. Ela deve 
// retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

/* let souEstudante = true

function meusDados(nome , idade , ondeVive, souEstudante){
    if(!souEstudante){
        souEstudante = "não sou"
    }
    console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${ondeVive} e ${souEstudante} estudante`)
} 

meusDados("sandro", 23, "Itp", true) */




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXERCÍCIO 5
// Escreva as funções explicadas abaixo:

// a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e 
// retorne o resultado. Invoque a função e imprima no console o resultado.

// function somaNumeros (num1, num2){
//     let soma = num1 + num2
//     console.log(soma)
// }

// somaNumeros(10, 10)

// b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

// function booleanNumeros (num1, num2){
//     if(num1 >= num2){
//         let maior = true
//         return maior
//     } else{
//         let menor = false
//         return menor
//     }
// }

// console.log(booleanNumeros(11, 12))

// c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido 
// escrever 10 console.log dentro da função, use outra estrutura de código para isso)

// function mensagem ("Eu sou uma mensagem obrigatória deste exercicio!"){
//     console.log(10 * mensagem)
// }

// mensagem("Eu sou uma mensagem obrigatória deste exercicio!")



/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXERCÍCIO 6
Para os itens a seguir, considere o seguinte array para os seus testes: */

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

// function quantidadeItens (meuArray){
//     return meuArray.length
// }

// const qntdItens = quantidadeItens(array)
// console.log("tamanho array:", qntdItens)

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function parOuImpar(meuArray){
    for (let i = 0; i < meuArray.length; i++) {
        if (i % 2 === 0) {
            let numPar = true
            return numPar
        } else {
            let numImpar = false
            return numImpar
        }
  }
}

parOuImpar(array)

// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

function numPares(){

}

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar 
// se o número é par