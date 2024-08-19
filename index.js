function Cadastrando() {
    const nome = document.getElementById('nome').value;
    const email = document.querySelector('input[type="text"][placeholder="Email"]').value;
    const idade = document.querySelector('input[type="number"][placeholder="Idade"]').value;


    if (!nome) {
        alert("Por favor, insira seu nome.");
        return;
    }

    if (!email.includes('@')) {
        alert("Por favor, insira um email válido que contenha '@'.");
        return;
    }

    window.location.href = `boa.html?nome=${encodeURIComponent(nome)}&idade=${encodeURIComponent(idade)}&email=${encodeURIComponent(email)}`;
}
