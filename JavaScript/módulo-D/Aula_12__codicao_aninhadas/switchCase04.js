const prompt = require("prompt-sync")()

console.log("Sistema bancario")

let saldo = Number(prompt("Digite seu saldo: "))

console.log("ver saldo")
console.log("depositar")
console.log("sacar")
console.log("sair")

 let op;
do{
 op = prompt("Digite qual opçao deseja fazer: ");
    switch(op){
        case "ver saldo":
            console.log(saldo);
            break
        case "depositar":
            let deposito = Number(prompt("Digite o valor do deposito: "));
            saldo += deposito
            console.log(`Agora seu saldo foi para ${saldo}`);
            break;
        case "sacar":
            let saque = Number(prompt("Qual o valor do saque? "));
            if (saque > saldo){
                console.log("Saldo Baixo!")
            }else{
                saldo -= saque
                console.log(`seu saldo foi para ${saldo}.`);
                console.log("Saque realizado com sucesso!");
            }
            break;
        case "sair":
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("[Erro] Opçao inválida.")
    }
}while (op !== "sair");
