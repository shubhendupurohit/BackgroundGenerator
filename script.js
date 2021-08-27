var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(body);
// body.style.background =  "red";
// console.log(css);
// console.log(color1);
// console.log(color2);

function setGrdient() {
	body.style.background ="linear-gradient(to right,"
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGrdient);
	// console.log(color1.value);
	

color2.addEventListener("input", setGrdient);
	// console.log(color2.value);
		
