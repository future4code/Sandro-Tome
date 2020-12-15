/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// 1º - O código cria uma função chamada "conversorDeMoeda" com a propriedade"(valorEmDolar)", 
//dentro desta função, através de  um prompt é pedido para ser digitado o valor da cotação 
//do dólar, e este valor é armazenado numa constante "cotacao", e é pedido para retornar um 
//valor da propriedade "valorEmDolar" multiplicado pelo valor da constante "cotacao". Abaixo 
//da função uma outra constante é criada separadamente com o nome "meuDinheiro" guarda o valor 
//da função criada acima, substituindo a propriedade "valorEmDolar" por um numero real, "100".
//Para confirmar a operação é pedido para o console imprimir a constante "meuDinheiro", 
//que nesse caso vai imprimir o resultado da multiplicação do valor 100, pelo numero digitado
//no prompt.

// 2º - Uma função é criada com o nome "investeDinheiro", e recebe dois parâmetros 
//"tipoDeInvestimento" e "valor", dentro da função é criada uma variável tipo let com 
//nome "valorAposInvestimento" vazia, ainda dentro da função é utilizado uma condicional do tipo 
//switch case para o parâmetro "tipoDeInvestimento" indicando que para caso(case) o valor recebido
//desse parâmetro for "Poupança", "Renda Fixa", "CDB" ou "Ações", a variável let 
//"valorAposInvestimento" deve armazenar o valor do parâmetro"valor" multiplicado por "1.03", 
//"1.05", "1.06" e "1.1", respectivamente. Caso o valor do parâmetro "tipoDeInvestimento" não for 
//nenhum dos quatro descritos anteriormente, o valor retornado deve ser umma string com a mensagem
//"TIPO DE INVESTIMENTO INFORMADO INCORRETO!".
//      Ainda dentro da função, por fim, pede que seja retornado a variável "valorAposInvestimento".
//Definida a função, logo abaixo são criadas duas variáveis const, a primeira chamada "novoMontante"
//guarda a função "investeDinheiro" com os parâmetros agora substituidos por "Ações, 150", e a segunda
//chamada "segundoMontante" guarda também a funcão, com os parâmetros substituidos por 
//"Tesouro Direto, 200". Ao pedir para o console imprimir a cons "novoMontante", o valor retornado sera
//o  resultado da operação "150 x 1.1", já ao tentar imprimir a const "segundoMontante", a mensagem 
//impressa será "TIPO DE INVESTIMENTO INFORMADO INCORRETO!", pois "Tesouro Direto" não se encaixa em 
//nenhum dos casos definidos dentro da função.

// 3º - Temos 3 variáveis const, a  primeira "numeros" que recebe um array com varios numeros, e "array1" 
//e "array2", ambos são arrys vazios. Pelo comando For...of, é definido uma variável let, chamada numeros
// cada elemento do array "numeros", com isso, é definido com a condicional if/else, que se o resto da 
//divisão por 2 do "numero" do array "numeros" for igual a 0, ele deve ser colocado por meio do comando push
//no "array1", se não (else) deve ser colocado no "array2". Logo abaixo é pedido que seja impresso a quantidade
//total de numeros de "numeros", "array1" e "array2", todos com o comando length. 

// 4º - Nós não estudamos a propriedade Infinity, mas  vou  tentar explicar com o que eu sei.
//Temos também 3  variáveis sendo uma const e duas let, a const "numeros" sendo um array com vários números, 
//e as duas let sendo "numero1" recebendo de valor a propriedade Infinity, e a "numero2" recebendo de valor 
//o numero 0. Abaixo com o comando For...of, é definido com a variável let "numero" para a "numeros", com a 
//condicional if/else que se(if) o valor de "numero" for menor que "numero1" então a "numero1" é igual a 
//numero, e se "numero" for maior  que  "numero2", então "numero2" é igual a numero.
//Então pegando o primeiro exemplo, o primeiro numero do array "numeros" é 25, logo, se 25 for menor que o 
//infinito, ele se torna igual "numero1", e se 25 for menor que 0, se torna igual "numero2" também, ao fim 
//teremos "numero1 = 25" e "numero2 = 25" também, até o código passar por todos os  elementos do array "numeros" 
//e definir quais são os valores de "numero1" e "numero2".

/* EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */





/* EXERCÍCIOS DE FUNÇÕES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */





/* EXERCÍCIOS DE OBJETOS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */





/* EXERCÍCIOS DE FUNÇÕES DE ARRAY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */