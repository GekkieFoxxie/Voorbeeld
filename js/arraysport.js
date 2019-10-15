	var sportsArray = ["Volleybal", "Basketbal", "Baseball", "Tennis", "Paddle", "Voetbal", "Atletiek", "Dansen", "Ballet", "Rugby", "E-sport", "schaken", "Paardrijden", "Zwemmen", "Badmington", "Mountainbike", "Boksen", "Skaten"]
	
	
	var balsportArray = ["Volleybal", "Basketbal", "Baseball", "Tennis", "Paddle", "Voetbal", "Rugby"]
	
	var geenBalsportArray = ["Atletiek", "Dansen", "Ballet", "E-sport", "schaken", "Paardrijden", "Zwemmen", "Badmington", "Mountainbike", "Boksen", "Skaten"]
	
	var sportKeuze = document.getElementById("sportKeuze");
	var btnBalsport = document.getElementById("btnBalsport");
	var btnGeenBalsport = document.getElementById("btnGeenBalsport");

	//functie uitvoeren wanneer de pagina volledig is geladen
	window.onload = willekeurigeSportKiezen();
	
	function willekeurigeSportKiezen() {
		//een willekeurig getal kiezen tussen 0 en de lengte van de sportsArray(17)
		let random = Math.floor(Math.random() * sportsArray.length);
		//willekeurig element uit sportsArray in sportKeuze plaatsen
		sportKeuze.innerHTML = sportsArray[random]
	}

	btnBalsport.addEventListener("click", function() {
		//sport uit het element sportKeuze eruithalen
		let sport = sportKeuze.innerHTML;
		//variabele om bij te houden of we juist hebben gekozen
		let juistGekozen = false;
		//doorlopen van heel de balsportArray
		for(var i = 0; i < balsportArray.length; i++){
			//elk element uit balsportArray controleren ten opzichte van de sport die in sportKeuze staat
			if(sport === balsportArray[i]) {
				juistGekozen = true;
			   }
		}
		if(juistGekozen) {
				//pop-up om te laten weten dat het werkt
			   alert("Goed zo!")	
			
		}
		else {
			alert("Probeer opnieuw!")
		}
		willekeurigeSportKiezen();
	});

	btnGeenBalsport.addEventListener("click", function() {
		//sport uit het element sportKeuze eruithalen
		let sport = sportKeuze.innerHTML;
		//variabele om bij te houden of we juist hebben gekozen
		let juistGekozen = false;
		//doorlopen van heel de balsportArray
		for(var i = 0; i < geenBalsportArray.length; i++){
			//elk element uit balsportArray controleren ten opzichte van de sport die in sportKeuze staat
			if(sport === geenBalsportArray[i]) {
				juistGekozen = true
			   }
		}
		if(juistGekozen) {
				//pop-up om te laten weten dat het werkt
			   alert("Goed zo!")	
			
		}
		else {
			alert("Probeer opnieuw!")
		}
		willekeurigeSportKiezen();
	});

