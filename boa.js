function obterParametroUrl(nomeParametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nomeParametro);
}


const nomeUsuario = obterParametroUrl('nome');
const email = obterParametroUrl('email');
const idade = obterParametroUrl('idade');

const mensagem = document.getElementById('mensagem');
if (nomeUsuario) {
    mensagem.textContent = `Olá, ${nomeUsuario}!`;
} else {
    mensagem.textContent = 'Olá, visitante!';
}

console.log("Nome: ", nomeUsuario)
console.log("Idade: ", idade)
console.log("Email: ", email)

