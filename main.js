function getRon() {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => response.json())
        .then(data => document.getElementById("ron").innerHTML=(data ?? "Something is wrong..."));

}
/*function getTrump() {
    fetch('https://www.tronalddump.io/random/quote')
        .then(response => response.json())
        .then(data => document.getElementById("trump").innerHTML=(data.value ?? "Something is wrong..."));

}*/
function getYe() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => document.getElementById("ye").innerHTML=(data.quote ?? "Something is wrong..."));

}

getYe()
getRon()
//getTrump()