console.log('js');

var h2 = document.getElementsByTagName('h2');

console.log(h2[0]);
console.log(' longueur du tableau : '+h2.length);

//sélection par class

var merveilles = document.getElementsByClassName('merveilles');
for(i=0;i<merveilles.length;i++){
	console.log(merveilles[i]);
}

console.log(document.getElementById('nouvelles'));

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

// Le premier paragraphe
console.log(document.querySelector("p"));

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);
//Le contenu sans les balises HTML
console.log(document.getElementById("contenu").textContent);

// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));