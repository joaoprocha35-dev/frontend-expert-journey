let botao = document.querySelector("#btn")
botao.addEventListener("click", carregar)

function carregar() {
    let msg = document.querySelector("#mensagem")
    let imagens = document.querySelector("#imagem")
    let box = document.querySelector("#hora")
    let container = document.querySelector("#container01")
    let hora = Number(box.value)

    // Limpa as classes anteriores antes de aplicar a nova
    container.classList.remove("dia", "tarde", "noite")

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas.<br>Bom dia!`
        imagens.src = "img/dia.webp"
        container.classList.add("dia") 
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} horas.<br>Boa Tarde!`
        imagens.src = "img/tarde.jpg"
        container.classList.add("tarde")
    } else if (hora > 18 && hora <= 23) {
        msg.innerHTML = `Agora são ${hora} horas.<br>Boa Noite!`
        imagens.src = "img/noite.jpg"
        container.classList.add("noite")
    } else {
        msg.innerHTML = "Hora inválida. <br> Digite novamente!"
    }
}