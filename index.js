function enviarNome() {
    const nome = document.getElementById('nome').value;
    const email = document.querySelector('input[type="text"][placeholder="Email"]').value;

    if (!nome) {
        alert("Por favor, insira seu nome.");
        return;
    }

    if (!email.includes('@')) {
        alert("Por favor, insira um email válido que contenha '@'.");
        return;
    }

    window.location.href = `boa.html?nome=${encodeURIComponent(nome)}`;
}
