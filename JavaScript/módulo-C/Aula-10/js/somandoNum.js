var botaoSomar = document.getElementById("button")
botaoSomar.addEventListener("click", somar)

function somar() {
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.getElementById("txtn2")
    var resultado = document.getElementById('resultado')
    var num1 = Number(tn1.value)
    var num2 = Number(tn2.value)

    var soma = num1 + num2

    resultado.innerHTML = soma



}