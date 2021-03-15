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