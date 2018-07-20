// 4.coding challenge
//
// var mark = {
// 	fullName : "Mark",
// 	mass: 67,
// 	height: 1.80,
// 	calculateBmi : function() {
// 		this.bmi = this.mass / (this.height * this.height)
// 	}
// };
//
// var john = {
// 	fullName : "John",
// 	mass: 68,
// 	height: 1.80,
// 	calculateBmi : function() {
// 		this.bmi = this.mass / (this.height * this.height)
// 	}
// };
//
// mark.calculateBmi();
// john.calculateBmi();
//
// if(mark.bmi > john.bmi){
// 	console.log("Mark\'s BMI is higher: " + mark.bmi);
// }
// if(mark.bmi < john.bmi){
// 	console.log("John\'s BMI is higher: " + john.bmi);
// }
// if(mark.bmi === john.bmi){
// 	console.log("Equal BMI: " + john.bmi);
// }


//5. coding challenge

var john = {
	bills: [124, 48, 268, 189, 42],
	calculateTip: function() {
		var tips =[];
		var paidAmounts =[];
		for(var i = 0; i<this.bills.length; i++){
			if(this.bills[i] < 50){
				tips[i] = this.bills[i] * 0.2;
				paidAmounts[i] = this.bills[i] + tips[i];
			}
			if(this.bills[i] > 200){
				tips[i] = this.bills[i] * 0.1;
				paidAmounts[i] = this.bills[i] + tips[i];
			}
			if(this.bills[i] >= 50 && this.bills[i] <= 200 ){
				tips[i] = this.bills[i] * 0.15;
				paidAmounts[i] = this.bills[i] + tips[i];
			}
		}
		this.tips = tips;
		this.paidAmounts = paidAmounts;
	}
}

var mark = {
	bills: [77, 475, 110, 45],
	calculateTip: function() {
		var tips =[];
		var paidAmounts =[];
		for(var i = 0; i<this.bills.length; i++){
			if(this.bills[i] < 100){
				tips[i] = this.bills[i] * 0.2;
				paidAmounts[i] = this.bills[i] + tips[i];
			}
			if(this.bills[i] > 300){
				tips[i] = this.bills[i] * 0.25;
				paidAmounts[i] = this.bills[i] + tips[i];
			}
			if(this.bills[i] >= 100 && this.bills[i] <= 300 ){
				tips[i] = this.bills[i] * 0.1;
				paidAmounts[i] = this.bills[i] + tips[i];
			}
		}
		this.tips = tips;
		this.paidAmounts = paidAmounts;
	}
}

john.calculateTip();
mark.calculateTip();
console.log(john, mark);

function calculateAverageOfTips(tips) {
	var sum = 0;
	for(var i= 0; i < tips.length; i++){
		sum = sum + tips[i];
	}
	return (sum / tips.length);
}

john.average = calculateAverageOfTips(john.tips);
mark.average = calculateAverageOfTips(mark.tips);

if(john.average > mark.average){
	console.log("Johns family paid higher tips.")
}
else if(john.average < mark.average){
	console.log("Marks family paid higher tips.")
}
else if(john.average === mark.average){
	console.log("Both paid equal tips.")
}

