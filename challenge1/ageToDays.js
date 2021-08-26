function ageInDays() {
	var age = parseInt(prompt('What is your age?'));
	document.getElementById('yourAge').innerHTML = "your age in days is " + (age * 365).toString();
}

function reset() {
	document.getElementById('yourAge').innerHTML = '';
}