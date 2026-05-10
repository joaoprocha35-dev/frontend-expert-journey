const prompt = require("prompt-sync")()
//Armazenado prompt na variável entrada
let entrada = prompt("Digite a hora (ex:12 ou 12:00): ")
//split pega só a parte antes dos dois pontos
let horas = Number(entrada.split(":")[0])


if (isNaN(horas)){
    console.log("Digite um horário válido!")
}else if (horas >= 0 && horas < 12){
    console.log(`Bom dia pequeno gafanhoto! Agora sao ${entrada}.`)
}else if(horas >=12 && horas <18){
    console.log(`Boa tarde pequeno gafanhoto! Agora sao ${entrada}.`)
}else if(horas >=18){
    console.log(`Boa noite pequeno gafanhoto! Agora sao ${entrada}.`)
}