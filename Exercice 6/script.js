var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom = window.prompt("Entrerz un prenom")
if (tab.includes(prenom)){
    tab.splice(tab.indexOf(prenom),1);
    tab.push=""
    /*tab.push(tab.indexOf(prenom1,1 in tab.indexOf(prenom),1))*/
    document.write(tab)
}

//https://www.guru99.com/images/1/030819_0709_SQLServerDa2.png SQL