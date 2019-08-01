// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';


//vide un élément de son contenu
//document.getElementById('langages').innerHTML = "";

//modifie le contenu textuel
document.querySelector('h1').textContent +=" du cooode ";


// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");

var montitre = document.querySelector("h1").id = "titre";
console.log(montitre);


var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElt);


var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément


var rubyElt = document.createElement('li');
rubyElt.id = "ruby";
rubyElt.textContent = "Ruby";
document.getElementById('langages').appendChild(rubyElt);

var perlElt = document.createElement('li');
perlElt.id = "perl";
perlElt.textContent = "Perl";
//On insert un élément avant l'id php
document.getElementById('langages').insertBefore(perlElt, document.getElementById('php'));

var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));


//Exercice
document.getElementById('p').innerHTML += 'En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation" >liste</a> complète';
