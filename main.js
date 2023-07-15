document.addEventListener('DOMContentLoaded', function () {
    const endpoint = 'https://api.github.com/users/GabrielNBS';
    const imgAvatar = document.getElementById('avatar'); // Elemento HTML para exibir a imagem do avatar do usuário
    const profileName = document.getElementById('name'); // Elemento HTML para exibir o nome do perfil do usuário
    const profileUserName = document.getElementById('user-name'); // Elemento HTML para exibir o nome de usuário do perfil
    const repositorios = document.getElementById('repository'); // Elemento HTML para exibir o número de repositórios públicos do usuário
    const seguidores = document.getElementById('followers'); // Elemento HTML para exibir o número de seguidores do usuário
    const seguindo = document.getElementById('following'); // Elemento HTML para exibir o número de pessoas que o usuário está seguindo
    const link = document.getElementById('link'); // Elemento HTML para exibir o link para o perfil do usuário

    let apiSuccess = true; // Variável para verificar se a API foi carregada com sucesso

    fetch(endpoint)
        .then(function (res) {
            if (res.ok) { // Verifica se a resposta da API tem status 200 (OK)
                return res.json(); // Converte a resposta em formato JSON
            } else {
                apiSuccess = false; // Define a variável como false caso ocorra um erro na resposta da API
                throw new Error('Erro na resposta da API');
            }
        })
        .then(function (json) {
            if (apiSuccess) { // Verifica se a API foi carregada com sucesso antes de atualizar os elementos HTML
                imgAvatar.src = json.avatar_url; // Define a imagem do avatar do usuário
                profileName.innerText = json.name; // Define o nome do perfil do usuário
                profileUserName.innerText = json.login; // Define o nome de usuário do perfil
                repositorios.innerText = json.public_repos; // Define o número de repositórios públicos do usuário
                seguidores.innerText = json.followers; // Define o número de seguidores do usuário
                seguindo.innerText = json.following; // Define o número de pessoas que o usuário está seguindo
                link.href = json.html_url; // Define o link para o perfil do usuário
            }
        })
        .catch(function (erro) {
            console.log('Ocorreu um erro na solicitação da API:', erro);
            if (!apiSuccess) { // Verifica se ocorreu um erro na resposta da API antes de exibir a mensagem de erro
                alert('Ocorreu um erro na solicitação da API');
            }
        });
});
