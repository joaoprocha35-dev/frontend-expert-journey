var p1 = document.getElementsByTagName('p')[1]
var corpo = document.body
//Ou:
//window.alert(p1.innerText) = mas nao irá aparecer o strong como o html, (obs: pega só o texto). Pois o innerHTML mostra o que tem dentro da tag ineitra, inclusive outras tags

//estilisando por caminho no html.
corpo.style.background = "#0a0030"
//var div2 = document.getElementById("mensagem")[0]
//OU POR NAME:
//var div2 = document.getElementsByName("mensagem")[0]
//OU POR CLASS
// var div2 = document.getElementsByClassName("mensagem")[0]
// div2.innerText = prompt("Digite o nome da sua dive")
// div2.style.background = "#fff"
// div2.style.color = "red"

//OU A MAIS RECOMENDADA:
var div2 = document.querySelector('#mensagem')
div2.innerText = prompt("Digite o nome da sua dive")
div2.style.color = "blue"
div2.style.background = "#fff"
