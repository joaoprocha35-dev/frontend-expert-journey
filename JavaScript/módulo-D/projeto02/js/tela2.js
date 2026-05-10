let botao = document.querySelector("#btn")
botao.addEventListener("click", verificadorIdade)

function verificadorIdade() {

    let nascimento = Number(document.querySelector("#ano-nascimento").value)
    let anoAtual = 2026
    let idade = anoAtual - nascimento

    let msg = document.querySelector("#msg")
    let img = document.querySelector("#img")
    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked')

    if (!nascimento || !sexoSelecionado) {
        alert("Preencha todos os dados!")
        return
    }

    let sexo = sexoSelecionado.value

    msg.innerHTML = `Identificado ${sexo} de ${idade} anos.`

    if (sexo === "Homem") {

        if (idade >= 16 && idade <= 18) {
            img.src = "img/fotoeu.jpeg"
        } else if (idade >= 19 && idade <= 30) {
            img.src = "img/foto1.jpg"
        } else if (idade >= 31 && idade <= 45) {
            img.src = "img/foto8_30.jpg"
        } else if (idade >= 46 && idade <= 50) {
            img.src = "img/foto5.jpg"
        } else if (idade >= 51 && idade <= 60) {
            img.src = "img/foto6.jpg"
        } else if (idade >= 61 && idade <= 70) {
            img.src = "img/foto11_60m.jpg"
        } else {
            alert("Imagem não localizada 😔.")
        }

    } else if (sexo === "Mulher") {

        if (idade >= 16 && idade <= 18) {
            img.src = "img/foto01.jpg"
        } else if (idade >= 19 && idade <= 30) {
            img.src = "img/foto2.jpg"
        } else if (idade >= 31 && idade <= 45) {
            img.src = "img/foto9_30.jpg"
        } else if (idade >= 46 && idade <= 50) {
            img.src = "img/foto12.jpg"
        } else if (idade >= 51 && idade <= 60) {
            img.src = "img/foto7.jpg"
        } else if (idade >= 61 && idade <= 70) {
            img.src = "img/foto10_60f.jpg"
        } else {
            alert("Imagem não localizada 😔.")
        }

    }

    img.style.display = "block"
}