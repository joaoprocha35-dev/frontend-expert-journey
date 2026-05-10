const prompt = require("prompt-sync")()

console.log("Sistema para ver o status da sua nota se foi Excelente,Bom,regular ou reprovado")

let nota = Number(prompt("Digite sua nota de (0 a 10): "))
if (nota < 0 || nota > 10) {
    console.log("[Erro] Nota inválida!")
} else {
    switch (true) {
        case nota >= 9:
            console.log("Excelente!");
            break;
        case nota >= 7:
            console.log("Bom!");
            break;
        case nota >= 5:
            console.log("Regular!");
            break;
        default:
            console.log("Reprovado!")

    }
}