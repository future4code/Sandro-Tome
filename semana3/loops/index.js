/* ***************************Exercícios de interpretação de código************************* */

/* EXERCÍCIO 1
O que o código abaixo está fazendo? Qual o resultado impresso no console? */

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Resposta: Ele esta somando a variavel valor mais a variavel i, até a variavel i alcançar o valor de 4;

/* EXERCÍCIO 2
Leia o código abaixo: */

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a. O que vai ser impresso no console?
// Resposta: Números maiores que 18, que estão na lista
// b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? 
// Se sim, o que poderia ser usado para fazer isso?
// 


/* Exercícios de escrita de código */

/* EXERCÍCIO 3
Nas perguntas abaixo, considere que você tenha acesso a um array  (chamado de 'array original') 
que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta 
final de cada programa individualmente. */

let arrayOriginal = [10, 101, 202, 303, 404, 505, 606, 707]

/* a. Escreva um programa que:
- **Imprima** cada um dos valores do array original. */
// for(let i = 0; i < arrayOriginal.length; i++) {
// 	console.log(arrayOriginal[i])
// }

/* b. Escreva um programa que:
- **Imprima** cada um dos valores do array original divididos por 10 */
// for(let i = 0; i < arrayOriginal.length; i++) {
// 	  arrayOriginal[i] /= 10
// }
// 	console.log(arrayOriginal)

/* c. Escreva um programa que:
- **Crie** um novo array contendo, somente, os números pares do array original.
- **Imprima** esse novo array */
// for(let pares of arrayOriginal) {
// 	if(pares % 2 === 0)
// 	console.log(pares)
// }

/* d. Escreva um programa que:
- **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
- **Imprima** este novo array */
// let string = []
// for(let i = 0; i < arrayOriginal.length; i++) {
// 	string.push(`O elemento do index ${i} é: ${arrayOriginal[i]}`)
// }
//   console.log(string)

/* e. Escreva um programa que imprima no console o maior e o menor números contidos no array original */
// let maior = 0
// let menor = arrayOriginal[0]

// for(let i = 0; i < arrayOriginal.length; i++) {
// 	if(arrayOriginal[i] > maior){
// 		maior = arrayOriginal[i]
// 	}
// 	if(arrayOriginal[i] < menor) {
// 		menor = arrayOriginal[i]
// 	}
// }

// console.log(maior)
// console.log(menor)

