// Importando uma biblioteca externa chamada prompt-sync, essa biblioteca permite usar o prompt no node.js.
// Se quiser usar prompt para testar algo, devemos sempre importar essa biblioteca.

const prompt = require( "prompt-sync")()

let idade = Number(prompt("Digite sua idade: "))

if (idade <16) {
    console.log("Proibido Votar.")
} else if(idade >=16 && idade <18){
    console.log("Voto opcional.")
} else if(idade >= 18 && idade < 65 ){
    console.log("Voto obrigatório.")
} else if(idade >= 65){
    console.log("Voto opcional.")
}
