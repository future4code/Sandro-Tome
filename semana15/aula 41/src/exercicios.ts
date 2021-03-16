/* Exercicio 1 */

//a)
let minhaString: string = 9 //um tipo number não pode ser atribuido a uma string

//b) para aceitar strings podemos utilizar o union type com o sinal "|":
let meuNumero: number | string;
meuNumero = 7
meuNumero = "sete"

//c) é possivel definir os dados aceitos pelo meu objeto descrevendo os dados que quero que o objeto aceite.

let objeto: {nome: string, idade: number, corFavorita: string};

type Pessoa = {nome: string, idade: number, corFavorita: string};

const maria: Pessoa = {nome: "Maria da Silva", idade: 92, corFavorita: "azul"}
const joao: Pessoa = {nome: "João da Silva", idade: 13, corFavorita: "azul"}
const bastiao: Pessoa = {nome: "Bastião da Silva", idade: 5, corFavorita: "azul"}

//d) 
enum CorArcoIris {
    AMARELO = "amarelo",
    ANIL = "anil",
    AZUL = "azul",
    LARANJA = "laranja",
    VERDE = "verde",
    VERMELHO = "vermelho",
    VIOLETA = "violeta"
}
type Pessoa2 = {nome: string, idade: number, corFavorita: CorArcoIris};
const maria2: Pessoa2 = {nome: "Maria da Silva", idade: 42, corFavorita: CorArcoIris.AZUL}
const joao2: Pessoa2 = {nome: "João da Silva", idade: 41, corFavorita: CorArcoIris.AZUL}
const bastiao2: Pessoa2 = {nome: "Bastião da Silva", idade: 50, corFavorita: CorArcoIris.AZUL}