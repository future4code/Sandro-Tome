/* Exercício 1: */

//a) Para acessar os parâmetros passados na linha de comando utilizamos a propriedade process.argv 

//b)

/* const name = process.argv[2]
const age = Number(process.argv[3])

console.log(`Olá ${name}! Você tem ${age} anos.`) */

//c)

/* console.log(`Olá ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`) */

/* Exercício 2: */

const operacao = process.argv[2]
const firstNumber = process.argv[3]
const secondNumber = process.argv[4]

switch (operacao) {
  case "soma":
    console.log(`A operação ${Number(process.argv[3])} + ${Number(process.argv[4])} = ${Number(process.argv[3]) + Number(process.argv[4])}`);
    break;
  case "sub":
    console.log(`A operação ${Number(process.argv[3])} - ${Number(process.argv[4])} = ${Number(process.argv[3]) - Number(process.argv[4])}`);
    break;
  case "mult":
    console.log(`A operação ${Number(process.argv[3])} * ${Number(process.argv[4])} = ${Number(process.argv[3]) * Number(process.argv[4])}`);
    break;
  case "div":
    console.log(`A operação ${Number(process.argv[3])} / ${Number(process.argv[4])} = ${Number(process.argv[3]) / Number(process.argv[4])}`);
    break;
  default:
    console.log("Operação inválida");
}