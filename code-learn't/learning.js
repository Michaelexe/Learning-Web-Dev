console.log('hello world'); //basically print function



alert('yo'); //brings up an alert in the browser with the text in ()



var randomVariable = 5000; //creates a variable
let randomVariable2 = 10000; //also creates a variable, let is considered as better practice



var userName = prompt('What is your name?'); //takes input from user and assigns it to the variable
//for some reason using let doesnt work the way you want it to with prompt, so use var instead



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


