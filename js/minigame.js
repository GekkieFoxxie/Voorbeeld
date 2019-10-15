//objecten met eigenschappen
var persoon1 = {
	naam: "Goku",
	levens: 10,
	snelheid: 5,
	aanval: 3,
	image: "../Images/persoon1.png"
}

var persoon2 = {
	naam: "Mario",
	levens: 7,
	snelheid: 7,
	aanval: 5,
	image: "../Images/persoon2.png"
}
//objecten in een lijst zetten (geen aanhalingstekens)
var personen = [persoon1, persoon2]

var imgPersoon1 = document.getElementById("imgPersoon1");
var imgPersoon2 = document.getElementById("imgPersoon2");

var selector1 = document.getElementById("selector1");
var selector2 = document.getElementById("selector2");

imgPersoon1.src = persoon1.image;
imgPersoon2.src = persoon2.image;
imgPersoon1.value = persoon1.naam;
imgPersoon2.value = persoon2.naam;

window.onload = function() {
	for(var i = 0; i < personen.length; i++) {
		//optie-element toevoegen aan select-element
		let optiePersoon = document.createElement("option");
		optiePersoon.innerHTML = personen[i].naam;
		optiePersoon.value = personen[i].naam;
		//optie-element op "geselected" instellen
		if(imgPersoon1.value === personen[i].naam) {
			optiePersoon.setAttribute('selected', true);
		}
		selector1.appendChild(optiePersoon);

	}
	for(var i = 0; i < personen.length; i++) {
		let optiePersoon = document.createElement("option");
		optiePersoon.innerHTML = personen[i].naam;
		optiePersoon.value = personen[i].naam;
		
		if(imgPersoon2.value === personen[i].naam) {
			optiePersoon.setAttribute('selected', true);
		}
		
		selector2.appendChild(optiePersoon);

	}
}