function getRon() {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => response.json())
        .then(data => document.getElementById("ron").innerHTML=(data ?? "Something is wrong..."));

}
function getTrump() {
    fetch('https://www.tronalddump.io/random/quote')
        .then(response => response.json())
        .then(data => document.getElementById("trump").innerHTML=(data.value ?? "Something is wrong..."));

}
function getYe() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => document.getElementById("ye").innerHTML=(data.quote ?? "Something is wrong..."));

}

getYe()
getRon()
getTrump()

/*function share(person, quote) {
    text = ("Read this quote from "+person+"! "+quote+"\nFind more quotes at:")
    try {
        navigator.share("Quote",text, "https://zzz.jacobdrath.co/quotes/")
    } catch(er) {
        alert("Share is not supported. JS ERROR: "+er)
    }

}*/

    const shareData = {
        title: 'Quote',
        text: 'Read this Quote from Kanye West: '+document.getElementById("ye").innerHTML,
        url: 'https://zzz.jacobdrath.co/quotes/'
      }
    
      const btn = document.querySelector('#YeShare');
    
      // Share must be triggered by "user activation"
      btn.addEventListener('click', async () => {
        try {
          await navigator.share(shareData)
        } catch(err) {
          alert("Error: "+ err)
        }
      });