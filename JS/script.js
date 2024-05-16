var adulte = document.getElementById("adulte");
var enfant = document.getElementById("enfant");
var chambre = document.getElementById("chambre");

var champ_arrivee = document.getElementById("arrivee");
var champ_depart = document.getElementById("depart");
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
if (day < 10) {
    day = "0" + String(day);
}
if (month < 10) {
    month = "0" + String(month+1)
}
var today = String(year) + "-" + String(month) + "-" + String(day);
champ_arrivee.value = today 
champ_arrivee.setAttribute("min", today);

function add(input) {
    champ = document.getElementById(input);
    champ.value ++;
}

function substract(input) {
    champ = document.getElementById(input);
    if (champ.value > 0) {
        champ.value --;
    }
}

function checkDate() {
    champ_depart.setAttribute("min", champ_arrivee.value)
}