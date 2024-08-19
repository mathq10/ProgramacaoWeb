function Cadastrando() {
    const nome = document.getElementById('nome').value;
    const email = document.querySelector('input[type="text"][placeholder="Email"]').value;
<<<<<<< HEAD
    const idade = document.querySelector('input[type="number"][placeholder="Idade"]').value;

=======
>>>>>>> b5ecd002eb394f3c28afc11e53aeedd1960ca3d2

    if (!nome) {
        alert("Por favor, insira seu nome.");
        return;
    }

    if (!email.includes('@')) {
        alert("Por favor, insira um email válido que contenha '@'.");
        return;
    }

<<<<<<< HEAD
    window.location.href = `boa.html?nome=${encodeURIComponent(nome)}&idade=${encodeURIComponent(idade)}&email=${encodeURIComponent(email)}`;
=======
    window.location.href = `boa.html?nome=${encodeURIComponent(nome)}`;
>>>>>>> b5ecd002eb394f3c28afc11e53aeedd1960ca3d2
}
