function obterParametroUrl(nomeParametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nomeParametro);
}


const nomeUsuario = obterParametroUrl('nome');
const mensagem = document.getElementById('mensagem');
if (nomeUsuario) {
    mensagem.textContent = `Olá, ${nomeUsuario}!`;
} else {
    mensagem.textContent = 'Olá, visitante!';
}