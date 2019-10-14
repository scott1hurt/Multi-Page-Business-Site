// import { isMainThread } from "worker_threads";

//The Arguments Object 
function sayHello (firstName, lastName) {
    console.log ("Hello"  +  firstName + " " + lastName);
}
sayHello("Alex", "Brashear"); 
sayHello();
sayHello("Alex", "Brashear", 23);
//JavaScript doesn't put any restrictions on making sure we actually pass the correct data to our functions  when we call them. 
function addNumbers (){
    var sum = 0; 

    console.log(arguments); //The arguments object stores all of the data that is passed into our function as an argument

    for (var i = 0; i < arguments.length; i ++) {
        sum += arguments[i];

    }
    console.log (sum);

}

addNumbers(1, 4, 6, 8, 3, 5, 23, 64);  //Even though the addNumbers function doesn't have any parameters , we can still pass data to that function. 
//Returning Data from Functions
//So far, we've seen that we can pass data into functions and the functions can  interact with that data through the use of arguments/parameters. However, functions can also give back data when they finish executing.
//This is called returning data from the function.

function honkHorn(){
    console.log ("Honk");

}
console.log("Getting ready to honk the horn");
honkHorn();
console.log("Just finished honking the horn");

// (Above) First console.log statement --> Call the honkHorn function --> The honkHorn function executes and returns ---> Second console.log statement. 
// Every time one of our functions is finished running, it returns, which means we exit the function and go back to executing the next line of code. 
function shout(phrase){
     console.log(phrase.toUpperCase());
     return; // The return keyword breaks us out of a function and returns us to continue execution of our program. Normally, this keyword is called behind the scenes at the end of our function. 
}
shout ("hi");

function returnTest(){
    return;
    console.log ("This is a testing return"); //No code after the return keyword is used will be executed in the function. Since the return keyword is above this console.log statement, this will never be executed. 
}
returnTest();

//The real power of the return keyword is that it allows us to get data when a function finishes its running
function getPi(){
    //I want this function to give me back pi whenever I call it. 
    return Math.PI;//By using the return keyword, followed by the value I want to return, I can do this

}
console.log("The value of Pi is: " + getPi()); //Because getPi returns the value of Pi, we can use it in this string. 

function squareNumber(number){
    return number ** 2; // When we execute this function, when it returns it gives us back number to the power of 2
}
var threeSquared = squareNumber(3); // This stores what the function returns in a variable
console.log (threeSquared);

function divideInHalf(number){
    return number / 2;

}
var result = divideInHalf(squareNumber(10)); //This is going to call squareNumber first, then return result and then use that result as the argument to divideInHalf.
console.log("The result is: " + result);

//All functions return, but functions will only return *data* when we specify it.
// By default, functions return undefined.
function undefinedReturn(){

}
console.log(undefinedReturn()); // This prints out undefined, because when a function returns by default, we just get back undefined.

//Create a function called countVowels that takes string as input. This function should return the number of vowels in the string.
//Remember we can treat strings like an array
//if (letter === "a" || letter ==="e"...)
//You should also use a count variable to keep track of how many vowels there are. 
function countVowels (string) {
    var count = 0;
    for (letter of string) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            count ++; //If the letter is a vowel, add 1 to count

        }
    }
    return count; //Return the count variable , which holds the number of vowels in the string
}
console.log (countVowels("this is a string"));
//Scope 
//Scope is used to determine whether we can access a piece of data or not 
var newVar = 10 //This variable is declared outside of any code block. This means that this variable can be accessed anywhere in this program. 
//This is an example of Global Scope
    if (true) {

    }
    console.log(newVar); //Because newVar has global scope, we can access it inside functions or other code blocks directly 


function scopeTest(){
    var test = "test"; //Since this variable is declared inside of the function, it has Local Scope. 
}
// console.log(test); 
//This gives us an error because test only exists inside of the scopeTest function. Since this variable wasn't declared in the global scope, we cannot access it outside of the function.

//Global- things declared with this kind of scope
//Local Scope - things declared with this kind of scope are only available inside of the context where they are declared (inside of the function, etc.)
//Function expressions
//All of the functions that we have declared so far have used the function keyword, followed by the name of the function

//JavaScript gives us another way to declare functions

var x = function(){
    console.log("This is a function expression"); 

}

x();
//Function expressions allow us to store functions in variables or even pass functions as inputs to other functions
var anotherFunctionExpression = function (num1, num2) {
    console.log (num1 + num2);
}

anotherFunctionExpression(2, 4);

//Calling functions inside of other functions

function functionOne(){
    console.log("Hello!");
}

function functionTwo(){
    functionOne();
    console.log("Goodbye");
}
// functionTwo();
//We can chain references together by calling functions inside of other functions. By doing so, we can divide up the functionality of our applications into smaller pieces that call upon each other. 

//Recursive functions
// We can also have functions that can call upon themselves.

//Let's say I want to calculate the factorial of a number. For example, 10! is 10*9*8*7 and so on down to 1. 
function factorial(number) {
    if (number<=1){
        return 1; 
    }else {
        return number * factorial(number -1 );
    }
}
console.log (factorial(10));
//factorial (10)--> 10*362880
//factorial (9)--> 9*40320
//factorial (8)--> 8*5040
//factorial (7)--> 7*720
//factorial (6)--> 6*125
//factorial (5)--> 5*24
//factorial (4)--> 4*6
//factorial (3)--> 3*2
//factorial (2)--> 2*1
//factorial (1) --> returns 1 


//Creat a lifetime supply calculator function that's called calculateSupply that takes in two parameters: your current age and an amt per day that you will use the item (ex. 2 apples per day). Your function should calculate the amt you need for the rest of your life, based on a set maximum age.
//var maxAge = 90; //Use this as the maximum age
// var numDays = (maxAge-currentAge) * 365.25
// var amountNeeded = ??
// function calculateSupply(age, amountPerDay) 
//      maxAge = 90; 
//     var numdays = (maxAge -age) * 365.25
//     return numDays * amountPerDay; 
//     console.log(calculateSupply (28, 3));
// }

//Create a function called reverseString that takes in a string and returns the string reversed. For example, if the string “hello” is passed in, the string “olleh” should be returned.
//function reverseString(inputString) {
    //var outputString  = ""; //This will hold our reversed string
    //for (var i= 0; i < inputString.length -1 ; i >=0; i --){
    //  outputString += inputString [i];
    //}
    //return outputString;

 // return inputString.split("").reverse().join("-"); {

    
    
    //By using split we get an array from the string with each character inside of it. Reverse reverses that array, and join turns it back into a string
    //console.log (reverseString("Hello World"));

//}
//Create a function called calcHypotenuse to find the length of the hypotenuse of a triangle that takes as input the lengths of the two legs of a triangle, and returns the hypotenuse value.
//Hint: c^2 = a^2 + b^2
//Math.sqrt is a built-in function for getting a square root

//function calcHypotenuse(leg1length, leg2length){
    //var hypotenuse = Math.sqrt((leg1length ** 2) + (leg2length ** 2));
    //return hypotenuse;
//}
//var legA = 10; //Length of leg A 
//var legB = 13; // Length of leg B
//var legC = calcHypotenuse(legA, legB); //Calculating the hypotenuse by passing in the length of legA and legB
//console.log(legC);

//Create a function called checkFor50 that takes in two numbers as input which returns true if one of the numbers is 50 or if the sum of the two numbers is 50, or false if neither of those conditions is true.

// function checkFor50(num1, num2){
//     if (num1 === 50) {
//         return true;
//     }
//     if (num2 === 50) {
//         return true;
//     }
//     if (num1 + num2 === 50) {
//         return true; 
//     }
//   
var num1 = 50;
var num2 = 30;


if (num1 ===50 || num2 ===50 || num1 + num2 === 50)
{ 
   return true; 

}
return false; //If none of above return true statements were hit, return false.

console.log(checkfor50(50, 25));
console.log(checkfor50(25, 45));
console.log(checkfor50(34, 40));

//Create a function called checkForMultiple that checks to see if a number is a multiple of 3 or 7. It should return true if the number is a multiple of either of those numbers, or false if not.

// function checkforMultiple(number){
//     if(number % 3 === 0) {
//         return true; 
//     }
//     if (number % 7 === 0) {
//         return true;
//     }
//     return false; 
// if (number % 3 === 0 || number % 7 === 0) { 
    //return true;
    // }
    // return false; 

    return (number % 3 ===0 || number % 7 === 0);
}

console.log(checkForMultiple(6));

//Hoisting 
// Normally, our code runs top to bottom from the start of our file to end. 
x = 5; //Since I didn't use the var keyword, I haven't technically declared the variable x. 
var x; // I'm declaring x after I assign a value to it ?!?! 
//This works because of hoisting. JavaScript automatically moves declarations to the top of the current scope. 
function hoistingTest(){

    y = 7;
    console.log(y);
    var y;
}
hoistingTest();
//It is generally not a good idea to depend on hoisting as it makes your code more confusing logically and harder to follow.
//Reviewing Scope
//Scope determines whether our variables are accessible or not. If we try to access a variable from outside its scope, we'll be unable to 
function scopeTest() {
    var functionScopedVariable = 10;
    //Becuase we declared functionScopedVariable inside of this function, we can only access it here. This is known as local/function scope
}
console.log (functionScopedVariable);

var globalScopedVariable = 20; //Variables declared outside of any functionhave what is called global scope. This means that this variable can be accessed anywhere in this file, including in functions inside this file. 

function globalScopedTest() {
    globalScopedVariable = 30; //We can change globalScopedVariable because it has global scope
console.log (globalScopeVariable);
}

globalScopeTest();
var thisVariable = 10;

function anotherScopeTest(){
    var thisVariable = "Hi";
    console.log ("thisVariable inside function: " + thisVariable)
}
console.log ("thisVariable outside the function: " + thisVariable);
anotherScopeTest();

//Even though  both of these variables have the same name,  they exist in different scopes. They are technically different variables
