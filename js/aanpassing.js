//Element opvragen uit de HTML-Pagina

var testDiv = document.getElementById("testDiv");

//aanpassen van wat er in een element staat

testDiv.innerHTML = "Dit is een stuk tekst";

var knop = document.getElementById("knop");
var tekst1 = "School is leuk";
var tekst2 = "School is saai";
var tekst3 = "School is tof"
var tekst4 = "School is een banaan"
var tekst5 = "School is tijdverspilling"
var state = 0
//event listener toevoegen aan een element


knop.addEventListener("click", function() {
let random = getRandomInt(0,4);
	if(random === 0) {
		testDiv.innerHTML = tekst2;
		random;
	}
	else if(random === 1) {
		testDiv.innerHTML = tekst1;
		random;
	}	
	else if(random === 2) {
		testDiv.innerHTML = tekst3;
		random;
	}	
	else if(random === 3) {
		testDiv.innerHTML = tekst4;
		random;
	}
	else if(random === 4) {
		testDiv.innerHTML = tekst5;
		random;
	}

});

function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
