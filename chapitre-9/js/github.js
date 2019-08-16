//https://api.github.com/users/arthurus14

var profil = document.getElementById('github');

// Accès aux informations publiques sur le Premier Ministre
ajaxGet("https://api.github.com/users/arthurus14", function (reponse) {
    var profilGithub = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
   
    var loginElt = document.createElement("h1");
    loginElt.textContent = profilGithub.login;

    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = profilGithub.name;

   
    var logoElt = document.createElement("img");
    logoElt.src = profilGithub.avatar_url;

    profil.appendChild(loginElt);
    profil.appendChild(descriptionElt);
    profil.appendChild(logoElt);
});