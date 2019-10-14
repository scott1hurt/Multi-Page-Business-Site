//Conditional Statements 
/* These statements allow us to perform different actions in our code depending on different conditions. This can be referred to as branching logic. */
//If/Else 
var doTheThing= true;
if (doTheThing===true){
    console.log("Did the thing");//If doTheThing is true, do what's in this block
} else{
    console.log("Did not do the thing");//If doTheThing is false, do what's in this block.
}
if (doTheThing) { //Shorthand for checking to see if boolean value is equal to true

} else {

}
var num = 15;
if (num > 10 && num < 20) {
    console.log ("Number is between 10 and 20")
}

var score = 85; 

if (score > 75) { //Is the score greater than 75?
    console.log ("Good Job");
}else if (score > 50) { //Since it's not greater than 75, is it greater than 50?
    console.log ("Need to do better");
} else { //If we make it here, the score is lower than 50
    console.log ("Uh oh");
}

//Ternaries 
//Ternaries  are siumply shorthand that allows us to create shorter if/else statements. 

var money = 10.45;
varCanAffordMovie = false;
money > 15 ? varCanAffordMovie = true: varCanAffordMovie = false 
//With a ternary, the condition is checked . If the condition is true, the expression to the left of the colon is executed. 


//Switch statements
//Switch statements are another way that we can include conditional logic in our application.

//They consist of a condition and different cases that are executed based on that condition.

var dayOfTheWeek = 3; 
switch(dayOfTheWeek) { //We are switching based on the value of the dayOfTheWeek.
    case 0: 
    //If dayOfTheWeek ===0
    console.log("Sunday");
    break; // Stop executing the switch statement whenever we hit the break keyword. 

}
    case 1: 
    console.log ("Monday");
    break;
    case 2: 
    console.log ("Tuesday");
    break;
    case 3:
    console.log ("Wednesday");
    break;
    case 4: 
    console.log ("Thursday");
    case 5: 
    console.log ("Friday");
    case 6:
    console.log ("Saturday");
    break; 
    default: //The default case is executed when none of the other cases are applicable
    console.log("Invalid day number entered")

    //We don't need a break on the last case in a switch statement , since it will break there anyway.


//Loops
/* Loops are used when we want to execute  section of code multiple times. This is useful when we are iterating thru arrays, or just trying to do something a certain amount of times. 
//1.For
This type of loop requires some setup. We need to provide an index variable, a condition to check the index variable against, and some way to modify the value of the index variable. */

for (
    var i = 0; //Declaring and assigning a value to the index variable
    i < 100; // Our condition for this loop is that the index variable is less than 100
    i ++ // Incrementing the value of the index variable by 1 each time we go thru the loop. 
) {
    console.log (i); //Should print off 0-99


}

for (ls
    var counter = 0;  counter > -1000; counter -= 2 ){
    console.log(counter);
}
var numArray = [4, 5, 1, 2, 7, 13, 11];
for(var index = 0; index < numArray.length; index ++) {
    console.log(numArray[index]); //numArray[0], numArray[1], ...,  numArray[6]
}

//2. For of 

var stringArray = ["An", "Array","Of", "Strings"];

for (string of stringArray){ //The For-Of loop allows us to access each element in an array. Each element is stored in the variable to the left of the of keyword. With a for-of loop, it doesn't matter how long the array is. 
console.log(string.toUpperCase());

}

//3. While 

//While loops run while the condition is true. If the condition  never becomes false, the while loop will continue forever. They are useful in situations where we don't know many times we need to run the loop. */

var value = 2; 
while( value < 2000000) { // I don't necessarily know how many times it will take, so this makes a while loop a good choice.
console.log(value)
value **=2; //Square value
}
var randomNumber = Math.floor(Math.random() * 10); //Generate a random number between 0 and 10

while (randomNumber !==1) {//We don't know how long it will take because the numbers are random.
console.log(randomNumber);
randomNumber = Math.floor(Math.random() * 10 ); //Generate another random number

}

//4. Do - while loops
var keepLooping = false;
do{
    console.log("This runs even if the condition isn't met");
} while (keepLooping)

// With a do-while loop, the condition is not checked until the end of the loop. With a for loop and a regular while loop, the condition is checked when the loop starts. 
// Use a do-while loop whenever you want to run the code in the loop at least once. 

//Infinite Loops - If your loop condition is never broken out of, you run into an infinite loop, which is a loop that runs forever(or until something crashes.)

//while (true) { //This is an infinite loop because true will never be not true
  //  console.log("INFINITE LOOP");

//}

//for (var i = 0; i < 0; i ++) {
    console.log ("ALSO INFINITE LOOP");
//}
// When working with loops be careful to make sure conditions for loops can be broken out of

// Functions are reusable blocks of code that we can call upon throughout our application. They are usually used to perform some specific task, like adding numbers together, manipulating a string a certain way, etc. 

/*
prompt();
alert();
var array = [1, 2, 3];
array.push()
array.splice()
*/

//Functions are very important to JavaScript as it is an example of functional programming language.
//Declaring functions
//In order to use a function, you have to declare it. 
//Functions consist of 4 major parts: the function keyword, the name for the function, parameters for the function, and the code block for the function. 
function sayname(){ //Creating a function called sayName
    //Contents of our function go here
    console.log("Alex Brashear");
}
// Calling the function
sayName();
sayName();
sayName();

function convertTemperature(temp){
    var convertedTemp = (5/9) * (temp-32);
    console.log(convertedTemp);
}
//Calling/invoking a function
convertTemperature(75);
convertTemperature(100);
convertTemperature(-3);

//Declaring Functions

//Input Parameters
//These allow us to pass values into our functions so that we can use them. Above, we passed in a temperature value into the convertTemperature function through the use of the temp parameter. 

function combineStrings(stringA, stringB) {//This function has 2 parameters: stringA and stringB. Those names are used to refer to the parameters in the function. 
    var combinedString = stringA + stringB;
    console.log(combinedString);
}
combineStrings("First String", "Last String");
combineStrings("Computer", "Science");

function power (number, power){
    var result = number ** power;
    console.log(result);
}
power (3, 5);
power (2, 5);
//Returning values from Functions
function addNumbers(num1, num2, num3){
    return num1 + num2 + num3; 
}
console.log (addNumbers(1, 2, 3)); //Since addNumbers returns a value, this console.log will print out what is returned (in this case, 6)

var result = addNumbers(10, 20, 30); // The value this function returns will be stored in the variable result. 

// Returning values from functions happens automatically with all functions. By using the return keyword, we can return from the function early or return a value

function returnFunction(){
    return; //This will cause us to exit this function
    console.log ("Won't be executed"); //This won't be executed because the function has already returned.
}