/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
//inserer dans le l'id contenu

//boucle pour parcourir le tableau
for(i = 0; i < listeLiens.length; i++){
    document.getElementById('contenu').innerHTML += "<p><a href='"+listeLiens[i].url+"'>"+listeLiens[i].titre+"</a> "
     + listeLiens[i].url+ "<br/>"+listeLiens[i].auteur+"<br/></p>";

}


//modification du CSS
var paragraphe = document.querySelectorAll('a');
var fond = document.querySelectorAll('p');


[].forEach.call(paragraphe, function(div) {
  // do whatever
  div.style.color = "#428bca";

});

[].forEach.call(fond, function(div) {
  // do whatever
 div.style.backgroundColor = "white";
});











