// Seleciona os títulos
        const titulos = document.querySelectorAll('.animacao-h1, .animacao-h2, .animacao-h3');

        // Configura o observador de tela
        const observadorDeScroll = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada) => {
                // Quando o elemento entra na tela (pelo menos 50% dele visível)
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('aparecer');
                    //para de observar o elemento depois que ele já animou uma vez
                    observadorDeScroll.unobserve(entrada.target); 
                }
            });
        }, {
            threshold: 0.5 //Dispara quando estiver 50% do titulo visivel na tela
        });

        // Coloca o observador para vigiar cada título
        titulos.forEach((titulo) => {
            observadorDeScroll.observe(titulo);
        });