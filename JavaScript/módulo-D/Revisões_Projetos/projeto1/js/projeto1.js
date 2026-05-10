let botao = document.querySelector("#btn")
botao.addEventListener("click", verificarHora)

function verificarHora() {
    let box1 = document.querySelector("#hora1")
    let n1 = Number(box1.value)
    let hora = n1
    let result = document.querySelector("#hora2")
    let img = document.querySelector("#imagem")

    if (box1.value.length === 0) {
        alert("Por favor, digite um número!")
        return; // Para a execução aqui
    }

    if (n1 >= 0 && n1 < 12){
        result.innerHTML = `Agora são ${hora} horas. Bom Dia!`
        img.src = "img/dia.webp"
        //Faz a imagem aparecer
        img.style.display = "block"
    }else if(n1 >=12 && n1 <=18.59) {
        result.innerHTML = `Agora são ${hora} horas. Boa Tarde`
        img.src = "img/tarde.jpg"
        img.style.display = "block"
    }else if(n1 >=19 && n1 <=23.59){
        result.innerHTML = `Agora são ${hora} horas. Boa Noite!`
        img.src = "img/noite.jpg"
        img.style.display = "block"
    }else{
        alert("Hora inválida! Digite entre 0 e 23.")
        img.style.display = "none" //Faz esconder a imagem se for hora errada.
    }

}