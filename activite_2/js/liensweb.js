var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

//boucle pour parcourir le tableau
for(i = 0; i < listeLiens.length; i++){
    document.getElementById('contenu').innerHTML += "<p><a href='"+listeLiens[i].url+"'>"+listeLiens[i].titre+"</a> "
     + listeLiens[i].url+ "<br/> ajouté par "+listeLiens[i].auteur+"<br/></p>";

}

function formu(){
    
    document.getElementById('bouton').addEventListener('click',function(){
        //alert("hello");
    var btn = document.getElementById('bouton').remove();


    var f = document.createElement("form");
        f.setAttribute('id',"myForm");
    

    var i = document.createElement("input"); //input element, text
        i.setAttribute('type',"text");
        i.setAttribute('name',"username");
        i.setAttribute('placeholder',"Entrez le nom");
        i.style.margin = "10px";
        i.setAttribute('required','');

    var j = document.createElement("input"); //input element, text
        j.setAttribute('type',"text");
        j.setAttribute('name',"lien");
        j.setAttribute('placeholder',"lien");
        j.style.margin = "10px";
        j.setAttribute('required','');

    var k = document.createElement("input"); //input element, text
        k.setAttribute('type',"text");
        k.setAttribute('name',"url");
        k.setAttribute('placeholder',"url");
        k.style.margin = "10px";
        k.setAttribute('required','');


    var s = document.createElement("input"); //input element, Submit button
        s.setAttribute('type',"submit");
        s.setAttribute('onClick','send()');
        s.setAttribute('value',"Ajouter");
        s.setAttribute('id',"submit");

    var insert = document.getElementById('form');

        f.appendChild(i);
        f.appendChild(j);
        f.appendChild(k);
        f.appendChild(s);

    document.body.insertBefore(f,insert);

    })

}

function send(){
    var url = document.getElementsByName('url')[0].value;
    var lien = document.getElementsByName('lien')[0].value;
    var name = document.getElementsByName('username')[0].value;

   
  

    //ajout des données


var i = document.createElement("p"); //input element, text
    i.style.backgroundColor = "white";

        if(url.indexOf('http://' || 'https://') == 0){
            console.log('http ou https est déclaré');
            i.innerHTML = "<a href="+url+">"+lien+"</a> "+" "+url+" "+"</br>"+name+" ";
        }else{
            console.log('http ou https n est pas déclaré');
            i.innerHTML = "<a href="+"http://"+url+">"+lien+"</a> "+" "+"http://"+url+" "+"</br> ajouté par "+name+" ";
        
    }

var insert = document.getElementById('contenu');

console.log(i.textContent);
event.preventDefault();
var data = i.textContent;
console.log(data);
console.log(data.length);

    if(data.length > 4){
        document.body.insertBefore(i,contenu);
        var myForm = document.getElementById('myForm').remove();

        var b = document.createElement("BUTTON"); //input element, Submit button
            b.setAttribute('id',"bouton");
            b.setAttribute('type',"submit");
            b.setAttribute('onClick',"formu()");
            b.textContent = "Ajouter un lien";

         var f = document.getElementById('form');
          document.body.insertBefore(b,f);

        envoi(url);
    }else{
        alert('veuillez remplir tous les champs');
    }
    //fin ajout des données

}

function envoi(url){
    setTimeout(function(){
        //alert('envoi');
      var span = document.createElement('div');
        span.id = "donnees";
        span.style.margin = "0";
        span.style.backgroundColor = "#428bca";
        span.style.display = "block";
        span.style.width = "100%";

      var conte = document.getElementById('form');
      document.body.insertBefore(span,conte);

        document.getElementById('donnees').textContent = "Le lien ' "+ url+" ' a bien été ajouté";

        supp();
    },2000);
}

function supp(){
    setTimeout(function(){
        document.getElementById('donnees').remove();
    },2000);
}


//modification du CSS
var paragraphe = document.querySelectorAll('a');
var fond = document.querySelectorAll('p');

[].forEach.call(paragraphe, function(div) {
  div.style.color = "#428bca";

});

[].forEach.call(fond, function(div) {
 div.style.backgroundColor = "white";
});











