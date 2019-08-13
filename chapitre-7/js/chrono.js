var compteur = document.getElementById('compteur');
var temps = 0;
var interval = null;
function decompte(){

	var affichage = Number(compteur.textContent);
	compteur.textContent = affichage +1;
	console.log(compteur);

}

document.getElementById("bouton").addEventListener("click", function(){
 
  var bouton = document.getElementById("bouton");
  
if(bouton.id = "stop"){
	console.log('stop');
	clearInterval(interval);
}

  bouton.value = "stop";
  bouton.id = "stop";

  interval = setInterval(decompte,1000);
  event.preventDefault();

});