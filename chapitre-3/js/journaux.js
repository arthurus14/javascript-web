// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"



for(i=0; i< journaux.length; i++){
	document.getElementById('contenu').innerHTML += '<a href ="'+journaux[i]+'" >'+journaux[i]+'</a><br/>';
}
