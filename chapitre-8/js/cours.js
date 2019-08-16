// Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");


//Avec l'évènement load, la page ne se bloque pas en attendant la réponse du serveur
req.addEventListener('load',function(){

	if(req.status >= 200 && req.status < 400){
console.log('le serveur a traité la demande');
// Affiche la réponse reçue pour la requête
console.log(req.responseText);
	}else{
// Affichage des informations sur l'échec du traitement de la requête
console.error(req.status + " " + req.statusText);
	}

});
req.addEventListener("error", function () {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
// Envoi de la requête
req.send(null);


////////////////////////

function afficher(reponse) {
    console.log(JSON.stringify(reponse));

    var reponseSplit = reponse.split(';');

    var longueur = reponse.split(';').length; 
    console.log(" longueur "+reponseSplit);



    console.log(reponseSplit);
    console.log('longueur '+reponseSplit);

    for(var i=0;i<longueur;i++){
    	 document.getElementById('langages').innerHTML += "<li>"+reponseSplit[i]+"</li>";
    	 console.log(i);
    }

   
}
//url + callback
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);


//Requête au format JSON
ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});

///////////////////////
var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions));