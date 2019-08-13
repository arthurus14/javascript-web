var image = document.getElementById("ballon");
var cadre = document.getElementById("cadre");
var vitesse = 7; // Valeur du déplacement en pixels

// Déplace le bloc sur sa gauche
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xCadre = parseFloat(getComputedStyle(cadre).width);
    var xBloc = parseFloat(getComputedStyle(image).left);

    if(xBloc <= xCadre){
    	 // Déplacement du bloc
    image.style.left = (xBloc + vitesse) + "px";
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    requestAnimationFrame(deplacerBloc);
    }else{
    		 // Déplacement du bloc
    var xImage = parseFloat(getComputedStyle(image).right) 
    image.style.left = (xImage + vitesse) + "px";
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    requestAnimationFrame(deplacerBloc);
    }
   
}
requestAnimationFrame(deplacerBloc); // Début de l'animation

