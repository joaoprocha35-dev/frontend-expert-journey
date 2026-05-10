const readline = require('readline-sync');



/*
--------while----------
let fatias = readline.question("Quantas fatias de pizza tem? ");
let pes = readline.question("Qual seu nome? ")
let contador = 1
while(contador <= fatias){
    console.log(`${pes} comeu ${contador} fatia`)
    contador++ // contador = contador + 1
}
*/

// Mesma funcionalidade
// uma pizza tem 4 pedaços
// e a pessoa chama joao
// entao joao comeu 8 pedaços
// ficaria assim:
// joao comeu 1 fatia
// joao comeu 2 fatia
// joao comeu 3 fatia
// joao comeu 4 fatia

//---------Do while-------
console.log("Quem vai comer a pizza? ")
let nome = readline.question("Digite seu nome: ")
let fatias = Number(readline.question(`${nome} Quantos pedacos tem a pizza?`));
let ped = Number(readline.question(`${nome} quantos pedacos voce comeu? `))
let c = 1

do{ //Faz
    
    if(fatias <= 0){ //Verificação
        console.log("Digite um número válido!")
        break
    }else if( ped > 5){
        console.log(`${nome} voce comeu ${ped}, voce comeu demais`)
        break
    }else{
        console.log(`${nome} comeu ${ped} pedacos`)
        c++
    }
}while(c <=fatias);
console.log("Programa finalizado.");