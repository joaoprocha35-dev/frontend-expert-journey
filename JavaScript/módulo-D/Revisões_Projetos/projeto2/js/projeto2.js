let botao = document.querySelector("#btn")
botao.addEventListener("click", verificar)

function verificar() {
    let box1 = document.querySelector("#ano-atual")
    let anoAtual = Number(box1.value)
    let box2 = document.querySelector("#ano-nascimento")
    let anoNascimento = Number(box2.value)
    let resposta = document.querySelector("#result")
    let imagem = document.querySelector("#img")
    // let seletor = document.querySelectorAll('#seletor input[type="radio"]:checked')
    //Pegar o marcado direto
    let radio = document.querySelector('input[name="sexo"]:checked').value

    //Verifição de segurança: Usuário preencheu o ano-nascimento?
    if (box1.value.length == 0) {
        alert("[ERRO]: Prencha o ano atual!")

    } else if (box2.value.length == 0) {
        alert("[ERRO]: Prencha o ano de nascimento!")
    } else {
        let idade = anoAtual - anoNascimento

        if (radio === 'Homem') {

            if (idade >= 17 && idade <= 19) {
                resposta.innerHTML = `Identificado ${radio} de ${idade} anos.`
                imagem.src = "img/eu.jpeg"
                //fazer imagem aparecer
                imagem.style.display = "block"
            } else if (idade >= 20 && idade <= 29) {
                resposta.innerHTML = `Identificado ${radio} de ${idade} anos.`
                imagem.src = "img/foto1.jpg"
                imagem.style.display = "block"
            } else if (idade >= 30 && idade <= 39) {
                resposta.innerHTML = `Identificado ${radio} de ${idade} anos.`
                imagem.src = "img/foto8_30.jpg"
                imagem.style.display = "block"
            } else if (idade >= 40 && idade <= 60) {
                resposta.innerHTML = `Identificado ${radio} de ${idade} anos.`
                imagem.src = "img/foto6.jpg"
                imagem.style.display = "block"
            } else if (idade >= 61 && idade <= 90) {
                resposta.innerHTML = `Identificado ${radio} de ${idade} anos.`
                imagem.src = "img/foto11_60m.jpg"
                imagem.style.display = "block"
            } else {
                alert(`${idade} anos, mas nehuma foto encontrada`)
            }

        } else if (radio === 'Mulher') {
            if (idade >= 17 && idade <= 19) {
                resposta.innerHTML = `Identificado ${radio} de ${idade} anos.`
                imagem.src = "img/foto01.jpg"
                imagem.style.display = "block"
            } else if (idade >= 20 && idade <= 29) {
                resposta.innerHTML = `Identificado ${radio} de ${idade} anos.`
                imagem.src = "img/foto2.jpg"
                imagem.style.display = "block"
            } else if (idade >= 30 && idade <= 39) {
                resposta.innerHTML = `Identificado ${radio} de ${idade} anos.`
                imagem.src = "img/foto9_30.jpg"
                imagem.style.display = "block"
            } else if (idade >= 40 && idade <= 60) {
                resposta.innerHTML = `Identificado ${radio} de ${idade} anos.`
                imagem.src = "img/foto12.jpg"
                imagem.style.display = "block"
            } else if(idade >= 61 && idade <= 90) {
                resposta.innerHTML = `Identificado ${radio} de ${idade} anos.`
                imagem.src = "img/foto3.jpg"
                imagem.style.display = "block"
            } else{
                alert(`${idade} anos, mas nehuma foto encontrada`)
            }

        }

    }
}