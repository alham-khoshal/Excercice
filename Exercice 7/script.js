
//déclaration des filtres
let filtre1 = new RegExp(/^\S+[\s\w]+\S+$/); //doit comporter au moins 1 caractère.
let filtre2 = new RegExp(/^[0-9]{5}$/); //doit comporter 5 caractères numériques.
let filtre3 = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/) //doit comporter au moins le caractère.
//gestion de l'evenement sumbit
let subBtn = document.getElementById("form1");
subBtn.addEventListener("submit", function(e)
{
    companyInput = document.getElementById("nom").value;
    contactInput = document.getElementById("prenom").value;
    zipCodeInput = document.getElementById("codpostal").value;
    cityInput = document.getElementById("ville").value;
    emailInput = document.getElementById("email").value;
    if (!filtre1.test(companyInput)){
        alert("Entrez le nom de la société s.v.p. !");
        e.preventDefault();
    } else if (!filtre1.test(contactInput)){
        alert("Entrez le nom de la personne à contacter s.v.p. !");
        e.preventDefault();
    } else if (!filtre2.test(zipCodeInput)){
        alert("Entrez le code postal sur 5 chiffres s.v.p. !");
        e.preventDefault();
    } else if (!filtre1.test(cityInput)){
        alert("Entrez le nom de la ville s.v.p. !");
        e.preventDefault();
    } else if (!filtre3.test(emailInput)){
        alert("Entrez une addresse email valide s.v.p. !");
        e.preventDefault();
    }
});
let subjectInput = document.getElementById("subject");
subjectInput.addEventListener("change", function(event){
        if (event.target.value=="Choisissez"){
            document.getElementById("text").innerHTML = "";
        } else {
            document.getElementById("text").innerHTML = event.target.value; 
        }      
})