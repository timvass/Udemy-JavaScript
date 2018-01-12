/* 
Section2/16-Functions

DRY principles 
*/


function calculateAge(yearOfBirth) {
	var age = 2018 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1993);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageMary);

function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement >= 0) {
		console.log(retirement);
	} else {
		console.log(name + ' is already retired.');
	}
}

yearsUntilRetirement('John', 1982);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1952);
