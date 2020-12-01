    
// o console.log A e B ira retornar false pois existem valores false
// o console.log c retornara true, pois resultado é false mas !resultado quer dizer "não falso", logo true, e true ou true retorna true
// o console.log e vai retornar boolean, pois estamos trabalhos com valores booleanos


// a. undefined
// b. null
// c. array.lenght : [11]
// d. array [3]
// e. não tenho certeza mas acho que  vai adicionar na frente do indice 0 o valor 19
// f. acho que vai somar o indice 0 [3] mais 6, que vai dar 9 como resultado, mas não entendi muito bem

__________________

// Faça um programa que:
// a. Pergunte a idade do usuário
// b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// c. Imprima na tela a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
// d. Imprima na tela a diferença de idade (não tem problema se sair um número negativo)

let idade = prompt("Qual a sua idade?")
console.log(idade)

let idadeAmigo = prompt("Qual a idade do seu melhor amigo?")
console.log(idadeAmigo)

let resultadoC = idade > idadeAmigo
console.log("Sua idade é maior do que a do seu amigo? ", resultadoC)

let resultadoD = idade - idadeAmigo
console.log(resultadoD)

// Faça um programa que:
// a. Peça ao usuário que insira um número par.
// b. Imprima na tela o resto da divisão desse número por 2.
// c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// resposta - todo resto de divisão de um numero par será 0
// d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// resposta - o valor que retornara será 1, indicando que o numero inserido é impar

let nmr = prompt("insira um numero par: ")
console.log(nmr)

let resultadoA = nmr%2
console.log(resultadoA)

// Faça um programa, seguindo os passos:
// a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
// b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c. Imprima o array na tela
// d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
// e. Remova da lista o item de índice que o usuário escolheu.
// f. Imprima o array na tela

let listaDeTarefas = []

let trf1 = prompt("Escreva 1 tarefa que você precisa realizar todo dia: ")
listaDeTarefas.push(trf1)

let trf2 = prompt("Escreva outra tarefa que você precisa realizar todo dia: ")
listaDeTarefas.push(trf2)

let trf3 = prompt("Escreva mais uma tarefa que você precisa realizar todo dia: ")
listaDeTarefas.push(trf3)

console.log(listaDeTarefas)

let tarefaRealizada = prompt("Digite o indice de uma tarefa que você ja realizou sendo: 0(primeira tarefa), 1(segunda tarefa) ou 2(terceira tarefa): ")

listaDeTarefas.splice(tarefaRealizada, 1)

console.log(listaDeTarefas)

// Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, 
// imprima na tela a seguinte mensagem:

// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

let nomeCompleto = prompt("Digite seu nome completo: ")
console.log(nomeCompleto)
let cadastroEmail = prompt("Cadastre seu e-mail para acessar a página: ")
console.log(cadastroEmail)

alert(`O e-mail ${cadastroEmail} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeCompleto}!`)