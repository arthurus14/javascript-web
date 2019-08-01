function infosLiens(){
	console.log("ma fonction");
	//nombre total de lien dans la page
	var nbLiens = document.getElementsByTagName("a").length;
	console.log(nbLiens);

	
	// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));

	//L'attribut du dernier lien
console.log(document.getElementsByTagName("a")[nbLiens-1].getAttribute("href"));

}
infosLiens();