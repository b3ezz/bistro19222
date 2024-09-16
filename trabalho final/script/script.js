// Navegação suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validação do formulário de contato
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simular o envio do formulário
    const nome = document.getElementById('msg-nome').value;
    const email = document.getElementById('msg-email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso! Obrigado, ' + nome + '.');
        this.reset(); // Limpa o formulário após o envio
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Efeito de destaque nas imagens
document.querySelectorAll('.product img').forEach(img => {
    img.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s';
    });

    img.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
});
