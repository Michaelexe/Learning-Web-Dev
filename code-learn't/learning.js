console.log('hello world'); //basically print function



alert('yo'); //brings up an alert in the browser with the text in ()



var randomVariable = 5000; //creates a variable
let randomVariable2 = 10000; //also creates a variable, let is considered as better practice
//var lets you use the variable outside a function even if you declared it inside one.



let userName = prompt('What is your name?'); //takes input from user and assigns it to the variable



//below code creates a function, () defines the arguements requires, {} defines the code within the function
function displayUserInfo(name) {
	//following code edits the element with the id provided in () in the html file its linked to
	document.getElementById('userName').innerHTML = 'Hello ' + name;
}
displayUserInfo(userName);



let num = 0;
// below code starts a while loop, () takes the condition, {} takes the code it will be looping until condition becomes false
while (num < 5) {
	num++;
	console.log(num);
}


/*below code starts a for loop
The parathesis takes 3 arguements
1. The loop variable
2. The comdition
3. The increment expression
*/
for (let num1 = 0; num1 <=5; num1++) {
	console.log(num1);
}



let list = [1,2,3,4];  //creates a list



//in js, an object is basically a dictionary in python
let person = {
	firstName : 'Michael',
	lastName : 'Ispahani',
	age: 18,
};



// you can call out a specific value from the object using the key its assigned to in the following way
console.log(person.firstName);
console.log(person['lastName']);




//an object can have functions in it as well
let dog = {
	name : 'Bruno',
	breed : 'Golden retriever',

	bark: function () {
		return this.name + ' Barks!'; //this is equivalent to self in python
	},

	doubleBark() {
		console.log('bark bark!'); //another way of making a method
	}
};



//logical operators : && = and , || = or




//below code is an if and else statement
if (dog.breed == 'Golden retriever') {
	console.log("dog's breed is a golden retriever");
} else {
	console.log("dog isn't a golden retriever");
}



//switch statement
var colour = prompt('choose between green, red, blue and black for your background colour');
switch (colour) {

	case 'black':
		document.getElementById('body').style.backgroundColor = 'black';
		break;

	case 'red':
		document.getElementById('body').style.backgroundColor = 'red';
		break; 

	case 'blue':
		document.getElementById('body').style.backgroundColor = 'blue';
		break;

	case 'green':
		document.getElementById('body').style.backgroundColor = 'green';
		break;

	default:
		document.getElementById('body').style.backgroundColor = 'black';	
}



//here's how to make a random number generator
function randNumGen(max) {
	return Math.floor(Math.random() * max);
}
/*how this works is Math.random generates a random and long float between 0 and 1 exclusive 
of 1 and is multiplied with max to give a number from that range and then Math.floor removes all 
the remaining decimals */

console.log(randNumGen(100));


//there is a more python like for loop for arrays called for...of. its syntax is as follows:
const randomArray = ['first', 'second', 'third'];

for (let i of randomArray) {
	console.log(i)
}
//this is very similar to python, instead of in we are using of


/*using 'in' instead of 'of' gives the keys or index instead. This can be useful for iterating
through objects as you can't iterate through objects using for...of*/

for (let i in randomArray) {
	console.log(i)
}

const randomObject = {
	'John':95,
	'Sam':85,
	'Tim':98
}

for (let i in randomObject) {
	console.log(i + ' scored ' + randomObject[i]);
}



//string template literals 
console.log(`this string is made using back ticks. 1+2+5 = ${1+2+5}`)



//you can assign functions to a variable and use it as an arguement in another function like this:
const rolldice = function () {
	let dice = Math.floor((Math.random()*6) + 1);
	console.log(dice);
}

function rolltwice(func) {
	func();
	func();
}

rolltwice(rolldice)