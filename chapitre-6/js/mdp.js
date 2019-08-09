var form = document.querySelector("form");
form.addEventListener("submit",function(e){
	var mdp1 = form.elements.mdp1.value;
	var mdp2 = form.elements.mdp2.value;

	//vérifie la présence d'un chiffre
	var regex = /\d+/;

	//si different de true
	if(!regex.test(mdp1)){
		console.log('le mot de pass doit contenir au moins un chiffre')
	}else{
		console.log('le mot de passe contient bien un chiffre');
	}

	if(mdp1 == mdp2){
		document.getElementById('infoMdp').textContent = 'les mots de passes sont identiques';
		console.log('les mots de passes sont identiques');
		e.preventDefault(); // Annulation de la navigation vers la cible du lien
	}else{
		document.getElementById('infoMdp').textContent = 'les mots de passe ne sont pas identiques';
		console.log('les mots de passe ne sont pas identiques');
		e.preventDefault(); // Annulation de la navigation vers la cible du lien
	}
})


document.getElementById('mdp1').addEventListener('input',function(e){
if(e.target.value.length < 6){
	document.getElementById('infoMdp').textContent = 'il faut minimum 6 caractères';
	console.log('il faut minimum 6 caractères');
}
console.log(e.target.value);

})



