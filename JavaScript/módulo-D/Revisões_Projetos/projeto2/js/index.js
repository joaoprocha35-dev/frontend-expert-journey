document.addEventListener("DOMContentLoaded", () => {
    const texto = document.querySelector('.texto-apresentacao');
    
    // Opcional: Você pode adicionar sons ou interações extras aqui
    console.log("Landing Page carregada com sucesso!");

    // Exemplo: Mudar a cor do botão após 2 segundos
    setTimeout(() => {
        const btn = document.querySelector('.btn-entrar');
        btn.style.boxShadow = "0 0 20px rgba(14, 165, 233, 0.6)";
    }, 2000);

});
let botao = document.querySelector("#btn")
btn.addEventListener("click", proxima)

function proxima(){
    window.location.href = "projeto2.html"
}
