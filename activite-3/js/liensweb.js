/*
Activité 3
*/
// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien

/*Appel à l'API*/
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens",function(reponse){
    var rep = JSON.parse(reponse);
    //console.log("ok "+JSON.stringify(rep));

      rep.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});
/**/
});

//Bouton d'affichage du formulaire
var affichageFormBouton = document.getElementById("ajoutForm");

//Element Formulaire
var formElt;

//Elements du message de confirmation
var messageAjout = document.getElementById("messageAjout");
var messageTitre = document.getElementById("titre");

//Affichage du formulaire d'ajout
affichageFormBouton.addEventListener('click', function(){
    affichageFormBouton.style.display = "none";
    formElt = creerForm();
    document.body.insertBefore(formElt, contenu);
    // Animations et validation du formulaire
    formElt.addEventListener('submit', function(event){
        formElt.style.display = "none";
        affichageFormBouton.style.display = "inline-block";
        
        /*envoi serveur*/
     var article = new FormData(formElt);
      ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", article, function (reponse) {});
        /**/

        ajoutNouveauLien();
        formElt.reset();
        event.preventDefault();
    });

});



function creerForm(){
    formElt = document.createElement("form");
    formElt.id = "ajoutLien";
    formElt.appendChild(inputMaker({"type":"text",
                                "name":"auteur",
                                "placeholder": "Entrez votre nom",
                                "required":"required"}));
    formElt.appendChild(inputMaker({"type":"text",
                                "name":"titre",
                                "placeholder": "Entrez le titre du lien",
                                "size": "30",
                                "required":"required"}));
    formElt.appendChild(inputMaker({"type":"text",
                                "name":"url",
                                "placeholder": "Entrez l'URL du lien",
                                "size" : "30",
                                "required":"required"}));
    formElt.appendChild(inputMaker({"type":"submit",
                                "name":"bouton",
                                "value": "Ajouter"}));
    return formElt;
}

function inputMaker(attributes){
    var element = document.createElement("input");
    for (var key in attributes){
        element.setAttribute(key, attributes[key])
    }
    return element;
}



function ajoutNouveauLien(){
    var url = formElt.elements.url.value;
    var regex = /^https?:\/\/.+/i;
    if (!regex.test(url)){
        url = "http://" + url;
    }
    var lien ={
        auteur : formElt.elements.auteur.value,
        titre : formElt.elements.titre.value,
        url : url,
    }
    contenu.insertBefore(creerElementLien(lien),contenu.childNodes[1]);
    //gestion des affichages
    messageTitre.textContent = lien.titre;
    messageAjout.style.display = "block";
    setTimeout(function(){messageAjout.style.display = "none";}, 2000);
}
