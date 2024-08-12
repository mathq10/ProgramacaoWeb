function enviarNome() {
    const nome = document.getElementById('nome').value;
    if (nome) {
        window.location.href = `boa.html?nome=${encodeURIComponent(nome)}`;
    } else {
        alert("Por favor, insira seu nome.");
    }
}