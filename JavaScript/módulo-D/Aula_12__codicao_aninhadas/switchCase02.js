const prompt = require("prompt-sync")()

let saldo = Number(prompt("Informe o valor do seu saldo: "))
console.log("1-Ver saldo")
console.log("2-Depositar")
console.log("3-Sacar")
console.log("4-Sair")
let opcoes = Number(prompt("Escolha uma opçao: "))





switch (opcoes){
    case 1: 
        console.log(`Seu saldo: ${saldo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.`);
        break;

    case 2: 
        let valorDeposito = Number(prompt("Quantos quer depositar: "));
        saldo += valorDeposito
        console.log(`Você depositou: ${valorDeposito} agora seu saldo passa a ser ${saldo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.`);
        break;

    case 3: 
        let saque = Number(prompt("Digite o valor do saque: "));
        saldo -= saque
        console.log(`Agora com a reduçao do seu saque de: ${saque.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} seu saldo vai para: ${saldo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.`);
        break;
    
    case 4: 
        console.log("Saindo do sistema...");
        break;
    

    default: 
        console.log("[Erro] Opçao inválida.");
    break
    
}