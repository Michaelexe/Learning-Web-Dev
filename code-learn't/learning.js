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
};

displayUserInfo(userName);



let num = 0;
// below code starts a while loop, () takes the condition, {} takes the code it will be looping until condition becomes false
while (num < 5) {
	num++;
	console.log(num);
};


/*below code starts a for loop
The parathesis takes 3 arguements
1. The loop variable
2. The comdition
3. The increment expression
*/
for (let num1 = 0; num1 <=5; num1++) {
	console.log(num1);
};



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
};
/*how this works is Math.random generates a random and long float between 0 and 1 exclusive 
of 1 and is multiplied with max to give a number from that range and then Math.floor removes all 
the remaining decimals */

console.log(randNumGen(100));


//there is a more python like for loop for arrays called for...of. its syntax is as follows:
const randomArray = ['first', 'second', 'third'];

for (let i of randomArray) {
	console.log(i);
};
//this is very similar to python, instead of in we are using of


/*using 'in' instead of 'of' gives the keys or index instead. This can be useful for iterating
through objects as you can't iterate through objects using for...of*/

for (let i in randomArray) {
	console.log(i);
};

const randomObject = {
	'John':95,
	'Sam':85,
	'Tim':98
};

for (let i in randomObject) {
	console.log(i + ' scored ' + randomObject[i]);
};



//string template literals 
console.log(`this string is made using back ticks. 1+2+5 = ${1+2+5}`);



//you can assign functions to a variable and use it as an arguement in another function like this:
const rolldice = function () {
	let dice = Math.floor((Math.random()*6) + 1);
	console.log(dice);
};

function rolltwice(func) {
	func();
	func();
};

rolltwice(rolldice);



//you can avoid errors using try/catch
try { //this is used to run a code that might potentially have an error
	invalidVariable.toUpperCase()
} catch { //and if it did have an error, whatever is in "catch" is executed
	console.log('above code had an error hence this was executed instead.')
}



//ARRAY METHODS!!!

//FOR EACH
const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function(num){ //basically, for each element in this array, it executes the function.
	console.log(num*num);
})

//MAPS!!
const doubles = numbers.map(function(num){ //makes a new array with whatever in returned by the function
	return num*2;
})
console.log(doubles)

//ARROW FUNCTIONS!
// basically another way to declare a function but without using the keyword function

const arrowFunction = () => {
	console.log('====>');
}
arrowFunction()
//if you use () instead of {} it automatically tells javascript that you want to return whatever is in the ()

const returnName = (string) => (
	string.toUpperCase()
)
console.log(returnName('Michael'));

//you can make it even smaller and make it all in 1 line by removing the () and writing it in 1 line

const add = (a,b) => a+b;
console.log(add(5,4));

//SETTIMEOUT AND SETINTERVAL!

//setTimeout takes in a function you want to execute after a time period as its first arguement, and 
//time period itself as the second arguement(in milliseconds)

setTimeout(()=>{
	console.log('...you still there?');
}, 3000)

//setInterval repeats a function that you give as the first arguement after an interval you set in 
//milliseconds as the second arguement. It doesnt stop until you run clearInterval()

// setInterval(()=>{
// 	console.log(Math.random())
// },2000)

//this will be annoying so i'll comment it out


//FILTER METHOD!
//filter basically makes a new array with the elements that pass a test defined in the function in filter

const odd = numbers.filter((nums)=> nums%2 == 1);
console.log(odd);

//SOME AND EVERY!!!
//some checks if ANY of the elements in an array passes a test defined in the function and returns true if it does

const rating = [85,60,65,75,90,62];
console.log(rating.some(r => r > 80)); //returns true

//every checks if ALL of the elements in an array passed a test defined in the function and returns true if it does
console.log(rating.every(r =>  r>80)); // returns false
console.log(rating.every(r =>  r<95)); // returns true



//REDUCE METHOD!
console.log(rating.reduce((bestRating, currRating) => {
	if (bestRating < currRating) {
		return currRating
	}
	return bestRating
})) //returns 90 as it is highest
// how reduce works is that it holds a value(initially the first element and is named in the first arguement)
// of whatever is returned in the function and can be changed 
// within the same function by changing whatever is returned

console.log(numbers.reduce((total,currElement)=> total+currElement));

//spread lets you put in the elements of an array as seperate arguements
Math.max(...numbers); //... is the syntax

//rest looks like spread but it goes into a functions param during declaration and creates an array
// containing all the arguements that you enter in the future while using the function

function sum(...num) {
	console.log(num.reduce((total,el) => total + el) );
}




//MORE DOM STUFF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//you can create an element an element using createElement('tagName') and appending it as a child
//of an element using document.{element you want to append to}.appendChild('element you are appending')

const moreText = document.createElement('h1')
moreText.innerHTML = 'How are you?'
moreText.style.textAlign = 'center'
document.body.appendChild(moreText)

//you can also use append(anything) to add anything valid at the end, such as text to a paragraph or an element to a div
const newText = document.createElement('h1')
newText.append('adding this text to the element using append()')
newText.style.textAlign = 'center'
body.append(newText)

//prepend() is pretty much self-explanatory
newText.prepend('adding this using prepend().......')

//if you want to insert an element adjucent to another element, you can use 
//targetElement.insertAdjacentElement(beforebegin/afterend, the element itself)

const evenMoreText = document.createElement('h1')
evenMoreText.append('adding this adjacent to the moreText using insertAdjacentElement()')
evenMoreText.style.textAlign = 'center'
moreText.insertAdjacentElement('afterend', evenMoreText)

//after() does the same thing as insertAdjacentElement(afterend, element)


//remove is self-explanitory too
setTimeout(()=> {
	evenMoreText.remove()
	console.log('removed an h1 element')
},5000)

//EVENTS!!!!!!
const button1 = document.createElement('button')
button1.classList.toggle('button-center')
button1.innerHTML = 'button1'
document.body.append(button1)
button1.addEventListener('click', function(){
	console.log('you clicked button1')
})

const email = document.querySelector('#email')
const emailText = email.children[0].innerHTML
email.addEventListener('click', function(){
	const tempElement = document.createElement('textarea')
	tempElement.value = emailText;
	document.body.append(tempElement)
	tempElement.select()
	document.execCommand('copy')
	tempElement.remove()
	console.log('copied')
})