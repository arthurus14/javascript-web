//Requête au format JSON
ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    
    films.forEach(function (tableau) {
        console.log(tableau.titre);

        document.getElementById('tableaux').innerHTML += tableau.titre+" "+tableau.artiste+" "+tableau.annee+"<br/>";
    })
});