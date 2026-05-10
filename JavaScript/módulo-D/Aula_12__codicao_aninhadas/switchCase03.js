const prompt = require("prompt-sync")()

console.log("Calculadora simples:")

let n1 = Number(prompt("Digite um número: "))
let n2 = Number(prompt("Digite um número: "))

console.log("+")
console.log("-")
console.log("*")
console.log("/")

let op = prompt("Digite os sinais +, -, *, / para fazer a operaça: ")

switch(op){
    case "+":
        console.log(n1+n2);
        break;
    case "-":
        console.log(n1-n2);
        break;
    case "*":
        console.log(n1*n2);
        break;
    case "/":
        if (n2 === 0){
            console.log("Número nao pode ser dividir por zero!");
        }else{
            console.log(n1/n2)
        }
        
        break;
    default:
        console.log("[Erro] Opeçao inválida!")
    
}