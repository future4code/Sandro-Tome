/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log(`Bem vindo ao jogo de Blackjack!`)

 if(confirm("Quer iniciar uma nova odada?")) {
   // o que fazer se o usuário clicar "ok"
   const cartaUsuario1 = comprarCarta() 
   const cartaUsuario2 = comprarCarta() 
   const cartaPc1 = comprarCarta() 
   const cartaPc2 = comprarCarta()
   const somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   const somaPc = cartaPc1.valor + cartaPc2.valor 
   
   console.log(`Usuario - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação = ${somaUsuario}`)
   console.log(`Computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - pontuação = ${somaPc}`)
   if(somaUsuario > somaPc){
      console.log("Você ganhou!")
   }
   if(somaUsuario < somaPc){
      console.log("Você perdeu")
   }
   if(somaUsuario === somaPc){
      console.log("Empate!")
   }
}   else {
   // o que fazer se o usuário clicar "cancelar"
   console.log("O jogo acabou")
}






























/* const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

function o()
{if(confirm("Quer iniciar uma nova rodada?")){
   const o=t(),a=t(),r=t(),e=t(),u=o.o+a.o,c=r.o+e.o;
   console.log("Usuário - cartas:",o.a,a.a,"- pontuação",u),
   console.log("Computador - cartas:",r.a,e.a,"- pontuação",c),
   carta===u?console.log("Empate!"):c>u?
   console.log("O computador ganhou!"):
   console.log("O usuário ganhou!")}
   else console.log("O jogo acabou!")} */



   // function a(){
   //    if(confirm("Quer iniciar uma nova rodada?")){
   //       const o=[t(),t()],a=[t(),t()];let r=0,e=confirm("Suas cartas são "+o[0].a+" "+o[1].a+". A carta revelada do computador é "+a[0].a+". Deseja comprar mais uma carta?");
   //       for(;e;){const u=t();o.push(u),r=0;for(let a of o)r+=a.o;if(r<21){let t="";for(let a of o)t+=a.a+" ";e=confirm("Suas cartas são "+t+". A carta revelada do computador é "+a[0].a+". Deseja comprar mais uma carta?")}
   //       else e=!1}r=0;
   //       for(let a of o)r+=a.o;let u=0;
   //       for(let o of a)u+=o.o;let c=r<=21&&u<=r;
   //       for(;c;){const o=t();a.push(o),u=0;
   //          for(let o of a)u+=o.o;c=r<=21&&u<=r}resultado=r>21?"O computador ganhou!":u>21?"O usuário ganhou!":u>r?"O computador ganhou!":u<r?"O usuário ganhou!":"Empate!";let s="",n="";
   //          for(let a of o)s+=a.a+" ";for(let o of a)n+=o.a+" ";alert("Suas cartas são "+s+". Sua pontuação é "+r+". As cartas do computador são "+n+". A pontuação do computador é "+u+". "+resultado)}
   //          else console.log("O jogo acabou!")}function t(){const o=["A","2","3","4","5","6","7","8","9","10","J","Q","K"][Math.floor(13*Math.random())];let a;
   //          return{a:o+["♦️","♥️","♣️","♠️"][Math.floor(4*Math.random())],o:a="A"===o?11:"J"===o||"Q"===o||"K"===o?10:Number(o)}}