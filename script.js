/* 
1st challenge:
John and a friend invented a simple game where the player 
 with the highest value of his height (in cm) plus five times his age wins.

1. create variables for the heights and ages of two friends and assign them some values.

2. Calculate their scores

3. Decide who wins and print the winner to the console. Include the score in the string 
that you output to the console. Dont forget that there can be a draw(both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. 
If you cant solve, no problem, just watch the solution.

*/

class Person {
	constructor(name, height, age) {
		this.name = name;
		this.height = height;
		this.age = age;
		this.score = height + (5 * age);
	}
}

var john = new Person('John', 170, 36);

var johnsFriend = new Person('David', 195, 29);

var mary = new Person('Mary', 158, 31);

if ( typeof mary !== 'undefined' ) {
	if(john.score > johnsFriend.score && john.score > mary.score ){
		console.log('The winner is ' + john.name + ' and his score is ' + john.score);
	}
	if(john.score > johnsFriend.score && john.score < mary.score ){
		console.log('The winner is ' + mary.name + ' and his score is ' + mary.score);
	}
	if(john.score < johnsFriend.score && johnsFriend.score > mary.score ){
		console.log('The winner is ' + johnsFriend.name + ' and his score is ' + johnsFriend.score);
	}
	if(john.score < mary.score && mary.score > johnsFriend.score ){
		console.log('The winner is ' + mary.name + ' and his score is ' + mary.score);
	}

	if(john.score == mary.score && (mary.score > johnsFriend.score || john.score > johnsFriend.score) ){
		console.log('The winners are ' + mary.name + ' and ' + john.name +', both with scores ' + mary.score + '.');
	}
	if(john.score == johnsFriend.score && (mary.score < johnsFriend.score || john.score > mary.score) ){
		console.log('The winners are ' + johnsFriend.name + ' and ' + john.name +', both with scores ' + johnsFriend.score + '.');
	}


}else{
	if(john.score > johnsFriend.score){
		console.log('The winner is ' + john.name + ' and his score is ' + john.score);
	}else if(john.score < johnsFriend.score){
		console.log('The winner is ' + johnsFriend.name + ' and his score is ' + johnsFriend.score);
	}else{
		console.log('There is a draw. ' + john.name + "'s score is " + john.score +' and ' + johnsFriend.name + '\47s score is ' + johnsFriend.score + ' as well.');
	}

}

// control
console.log(mary.score + ' - Mary');
console.log(johnsFriend.score + ' - David');
console.log(john.score + ' - John');
