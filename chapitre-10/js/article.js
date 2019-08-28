var form = document.querySelector("form");
form.addEventListener("submit",function(e){
     e.preventDefault();
     var article = new FormData(form);
      ajaxPost("https://oc-jswebsrv.herokuapp.com/article", article, function (
        reponse
        ) {
        document.getElementById('resultat').textContent ='données envoyées avec succès';
      });
});
