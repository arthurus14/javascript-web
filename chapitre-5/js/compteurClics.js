var nb = 0;


function clic(){
	nb += 1;
	//ne pas mettre =+ car sinon les chiffres se cumule
	document.getElementById('compteurClics').textContent = nb;
}
document.getElementById('clic').addEventListener("click",clic);


document.getElementById('desactiver').addEventListener("click",function(){

	document.getElementById('clic').removeEventListener("click",clic);
})