var inputSchrikkeljaar = document.getElementById("inputSchrikkeljaar");

var uitvoer = document.getElementById("uitvoerSchrikkeljaar");

var btnSchrikkeljaar = document.getElementById("btnSchrikkeljaar")



btnSchrikkeljaar.addEventListener("click", function() {
	let jaar = parseInt(inputSchrikkeljaar.value)
	let schikkeljaarT = jaar + " is een schikkeljaar"
	let geenschikkeljaarT = jaar + " is geen schikkeljaar"
	
	if(jaar % 4 !== 0)  {
		uitvoer.innerHTML = "";
		uitvoer.innerHTML = geenschikkeljaarT;
	}
	else if(jaar % 100 !== 0) {
		uitvoer.innerHTML = "";
		uitvoer.innerHTML = schikkeljaarT;
		}
	
	
	else if(jaar % 400 === 0) {
			uitvoer.innerHTML = "";
			uitvoer.innerHTML = schikkeljaarT;
	}
	else {
		uitvoer.innerHTML = "";
		uitvoer.innerHTML = geenschikkeljaarT;
	}
	
})
