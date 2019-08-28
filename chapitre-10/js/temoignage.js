console.log('js');

var form =document.querySelector('form');
form.addEventListener('submit',function(e){

e.preventDefault();

data = new FormData(form);

ajaxPost('https://oc-jswebsrv.herokuapp.com/api/temoignage',data,function(reponse){})
	
document.getElementById('resultat').textContent ='données envoyées avec succès';

},
//format JSON
true
)
	