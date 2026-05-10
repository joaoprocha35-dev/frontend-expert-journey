
const prompt = require("prompt-sync")()

let agora = new Date()
let horas = agora.getHours()

if (horas < 12){
    console.log(`Bom dia! Agora são ${horas} horas.`)
} else if (horas < 18){
    console.log(`Boa tarde! Agora são ${horas} horas.`)
} else {
    console.log(`Boa noite! Agora são ${horas} horas.`)
}