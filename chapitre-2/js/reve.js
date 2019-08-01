// TODO : écrire la fonction compterElements

console.log(document.getElementsByTagName("p").length); // Doit afficher 4
console.log(document.getElementsByClassName(".adjectif").length); // Doit afficher 3
console.log(document.querySelectorAll("p .adjectif").length); // Doit afficher 3
console.log(document.querySelectorAll("p > .adjectif").length); // Doit afficher 2