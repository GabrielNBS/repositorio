document.addEventListener('DOMContentLoaded', function() {
    // Endpoint da API do GitHub para obter informações do usuário
    const endpoint = 'https://api.github.com/users/GabrielNBS';

    // Selecionando elementos do HTML com base em seus IDs
    const imgAvatar = document.getElementById('avatar'); // Imagem do avatar do usuário
    const profileName = document.getElementById('name'); // Nome do perfil do usuário
    const profileUserName = document.getElementById('user-name'); // Nome de usuário do perfil
    const repositorios = document.getElementById('repository'); // Número de repositórios públicos do usuário
    const seguidores = document.getElementById('followers'); // Número de seguidores do usuário
    const seguindo = document.getElementById('following'); // Número de pessoas que o usuário está seguindo
    const link = document.getElementById('link'); // Link para o perfil do usuário

    // Realizando uma solicitação HTTP GET para o endpoint da API do GitHub
    fetch(endpoint)
    .then(function (res) {
        return res.json(); // Convertendo a resposta em formato JSON
    })
    .then(function(json) {
        // Atualizando os elementos HTML com os dados obtidos da resposta JSON

        // Definindo o URL da imagem do avatar do usuário
        imgAvatar.src = json.avatar_url;

        // Definindo o nome do perfil do usuário
        profileName.innerText = json.name;

        // Definindo o nome de usuário do perfil
        profileUserName.innerText = json.login;

        // Definindo o número de repositórios públicos do usuário
        repositorios.innerText = json.public_repos; 

        // Definindo o número de seguidores do usuário
        seguidores.innerText = json.followers;

        // Definindo o número de pessoas que o usuário está seguindo
        seguindo.innerText = json.following;

        // Definindo o link para o perfil do usuário
        link.href = json.html_url;
    });
});
