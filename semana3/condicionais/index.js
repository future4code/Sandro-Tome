/* >>>>>>>>>>>>>>> EXERCÍCIO 1 <<<<<<<<<<<<<<
Leia o código abaixo: */

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

/* Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números
ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"? 
Resposta: O código realiza o teste de verificação de numeros pares e ímpares, ao escrever um número qualquer, 
sendo ele par, o console vai imprimir "Passou no teste", já se o número for impar, será impresso "Não passou no teste" */

/* >>>>>>>>>>>>>>>>>> EXERCÍCIO 2 <<<<<<<<<<<<<<<<

O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo: */

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     // break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. Para que serve o código acima?
/* Resposta: Para o usuario escolher a fruta e saber o preço dela. */

// b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
/* Resposta: O preço da fruta Maçã, é R$ 2.25 */

// c. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console 
// se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// Resposta: O preço da fruta Pêra, é R$ 5

/*>>>>>>>>>>>> EXERCÍCIO 3 <<<<<<<<<<<<<

Leia o código abaixo: */

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

/* a. O que a primeira linha está fazendo?
Resposta: Transformando a resposta do prompt em um Number */

/* b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Resposta: Para o número 10 o terminal respoonderia "Esse número passou no teste", para o -10 não haveria resposta. */

/* c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Resposta: Sim, o erro acontece porque a variavel "mensagem" pertence ao bloco "if", e o console.log(mensagem) se encontra fora do bloco, onde nao conhece a existencia da variavel */

/* ******************************Exercícios de escrita de código******************************* */

/* >>>>>>>>>>>EXERCÍCIO 4<<<<<<<

Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual 
a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade). */

// let cnh = Number(prompt("Digite sua idade para saber se você já pode dirigir: "))

// if(cnh >= 18) {
//     console.log("Parabéns! Você já pode dirigir.")
// }   else {
//     console.log("Que pena, você ainda não tem idade 😐")
// }

/* >>>>>>>>>>>>EXERCÍCIO 5<<<<<<<<<<

Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) 
ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else */

// let turno = prompt("Em qual turno você estuda? Digite M (matutino), V (vespertino) ou N (noturno)")

// if(turno === "M") {
//     console.log("Bom dia!")
// }   else if (turno === "V") {
//     console.log("Boa tarde!")
// }   else if (turno === "N") {
//     console.log("Boa noite!")
// }

/* >>>>>>>>>>>>>>>EXERCÍCIO 6<<<<<<<<<<<<<<

Repita o exercício anterior, mas utilizando a estrutura de switch case agora. */

// let turno = prompt("Em qual turno você estuda? Digite M (matutino), V (vespertino) ou N (noturno)")

// switch (turno) {
//     case "M":
//         console.log("Bom dia!")
//     break
//     case "V":
//         console.log("Boa tarde!")
//     break
//     case "N":
//         console.log("Boa noite!")
//     break
// }

/* >>>>>>>>>>>>>>>EXERCÍCIO 7<<<<<<<<<<<<<<<<<<<<<<

Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia 
e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão 
assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */

// let generoFilme = prompt("Qual gênero de filme vocês vão assistir")
// let precoIngresso = Number(prompt("Qual o valor do ingresso: (digite apenas numeros) "))

// if(generoFilme === "fantasia", precoIngresso < 15) {
//     console.log("Bom filme!")
// }   else {
//     console.log("Escolha outro filme 🙁")
// }