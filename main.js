document.addEventListener('DOMContentLoaded', function() {
    const endpoint = 'https://api.github.com/users/GabrielNBS'

    const imgAvatar = document.getElementById('avatar');
    const profileName = document.getElementById('name');
    const profileUserName = document.getElementById('user-name');
    const repositorios = document.getElementById('repository');
    const seguidores = document.getElementById('followers');
    const seguindo = document.getElementById('following');
    const link = document.getElementById('link');

    fetch(endpoint)
    .then(function (res) {
        return res.json();
    })
    .then(function(json) {
        imgAvatar.src = json.avatar_url;
        profileName.innerText = json.name;
        profileUserName.innerText = json.login;
        repositorios.innerText = json.public_repos; 
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;
    })
})