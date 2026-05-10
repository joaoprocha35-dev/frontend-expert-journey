var a = document.querySelector("#area")
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
function clicar() {

    a.innerText = 'clicou!'
    a.classList.add("font")
    a.style.backgroundColor = '#028623'
}

function entrar() {
    a.innerText = 'entrou!. Agora tira o mouse'
    a.classList.add('font')
    a.style.backgroundColor = '#3000dd'
}
function sair() {
    a.innerText = "Saiu"
    a.classList.add("font")
    a.style.backgroundColor = '#ff0000'

}