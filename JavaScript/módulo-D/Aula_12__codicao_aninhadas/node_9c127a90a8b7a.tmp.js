const prompt = require("prompt-sync")()

console.log("1-Ver saldo")
console.log("2-Depositar")
console.log("3-Sacar")
console.log("4-Sair")

let opcoes = Number(prompt("Escolha uma opçao: "))

let saldo = Number(prompt("Quantos de dinheiro você tem? "))
let valorSaque = Number(prompt("Qual o valor do saque? "))
let valorDeposito = Number(prompt("Quantos quer depositar? "))  

let depositar = saldo + deposito
let sacar = saldo - valorSaque

switch (opcoes) {
    case 1:{
        console.log(`Seu saldo é ${saldo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)
        break
    }
    // case 2:{
    //     console.log(`${valorDeposito.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} realizado com sucesso!`)
    //     break
    // }
    // case 3:{
    //     console.log(` saque no valor de ${valorDeposito.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} realizado`)
    //     break
    // }
    // case 4:{
    //     console.log(`Seu saldo é ${saldo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)
    //     break
    // }
}
