const botaoSobre = document.querySelector('.botao-sobre');

botaoSobre.addEventListener('click', function(event) {
    event.preventDefault();

    const sobre = document.querySelector('#sobre');

    sobre.scrollIntoView({
        top: 500,
        behavior: 'smooth',
    });
});

const botaoVoltar = document.querySelector('.botao-voltar');

botaoVoltar.addEventListener('click', function(event) {
    event.preventDefault();

    const hero = document.querySelector('.logo');

    hero.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});