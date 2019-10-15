var inputCurrency = document.getElementById("inputCurrency");
var btnCurrency = document.getElementById("btnCurrency");
var currencySelector = document.getElementById("currencySelector");
var uitvoerCurrency = document.getElementById("uitvoerCurrency");

//event listener toevoegen aan een knop, klikken op de knop
btnCurrency.addEventListener("click", function() {
	//hoeveelheid uit input halen
	let geld = parseFloat(inputCurrency.value);
	//einheid uit select halen
	let currency = currencySelector.value;
	//resultaat berekenen met functie met parameters
	let resultaat = calculateCurrency(geld, currency);
	//element p aanmaken
	let zin = document.createElement("p");
	//tekst aanmaken
	let tekst = "&euro;" + geld + " is " + resultaat;

	//p-element invuvllen met tekst
	zin.innerHTML = tekst;
	//p-element als child toevoegen aan uitvoer
	uitvoerCurrency.appendChild(zin);
})
//functie om euro te berekenen naar een andere einheid, aantal en einheid wordt meegegeven met de functie
function calculateCurrency(aantal, eenheid) {
	//variable om resultaat in op te slaan
	let resultaat;
	//switch om te controleren
	switch(eenheid) {
		//cases bij bepaalde gekozen eenheden
		case "yen":
			//berekening van euro naar eenheid
			resultaat = "&#165;" + aantal * 117.222;
			//stoppen van switch
			break;
		case "dollar":
			resultaat = "&#36;" + aantal * 1.0985;
			break;		
		case "pond":
			resultaat = aantal * 0.8902;
			break;
		case "kroon":
			resultaat = aantal * 7.4663
			break;
	}
	
return resultaat;
}