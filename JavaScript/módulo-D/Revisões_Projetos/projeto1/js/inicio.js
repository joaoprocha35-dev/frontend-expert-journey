const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  btn.innerText = 'Abrindo...';

  setTimeout(() => {
    alert('Aqui você pode abrir seu projeto 🚀');
    btn.innerText = 'Explorar Projeto';
  }, 800);

  window.location.href = "projeto1.html"

});