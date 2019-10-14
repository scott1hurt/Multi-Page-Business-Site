//Variables
//Variables are used to store data within our JavaScript applications.  This allows us to use that different data in different places.

// Data Types

//Declaring a variable without assigning it a value
var x

//Declaring a variable and assigning it a value
var name= "Scott";

//Print off the value of the variable name to the console
console.log(name);
var firstName= "Scott", lastName= "Hurt", age= "38";


//Casing Names
//Snake_case <-- Recommended for file/folder names
//CamelCase  <-- Pretty much everything else
//kebab-case <-- Recommended for file/folder names
//PascalCase

//Data Types

// Types of data that our variables can store and our programs can interact with

//Strings- collections of characters that are represented as text.

var string= "This is a string!";
console.log(string.length);//Print out how many characters are in the string
console.log(string.charAt(0)); //Print out the first character in the string

//Nums- store number values. These can be decimal numbers, integers, positive, negative, basically any number. We can perform arithmetic on these values. 

var num1= 5;
var num2= 10;
var num3= -20;

console.log (num3 + num2); //Adds the value of num3 and num2 and prints result

//We can also store the result of calculations in a new variable

var result= num1 * num2 * num3;
console.log(result);


//Booleans are values that are either true or false. We use these to modify the flow of our application's logic.
//Ex. Do one thing if something is true, do something else if it's false.
var loggedIn = true; 
var niceWeather = true;
var masteredJavaScript = false; 
// You might commonly see these referred to as Bools

// Symbols that carry out operations on our data. For example, plus sign, minus sign, equal sign, etc

// Assignment Operator

// This operator is used to assign a value to a variable. This operator is used to assign a value to a variable. This operator is represented by the =. 
var anothervariable="Hello";

//Arithmetic Operators
//Addition: +
console.log(6 + 2);
console.log(8 + 20);
//Subtraction:-
console.log(100-50);
console.log(40-50);
//Multiplication: *
console.log(9*8);
console.log(2 * 0.5);

//Division: /
console.log(4/2);

//Exponentiation: **
console.log( 2 ** 3);
//Modulus: % - gives us the remainder of a division,instead of the quotient
console.log(3 % 2); //This will give me 1, because that is the remainder of this division
// Increment: ++
var counter= 0;
counter ++; //Same thing as doing counter = counter + 1;
console.log(counter);
// Decrement: --
counter--;
counter--;
console.log (counter);


//Multiply and set equal 
z=5;
z *=4; //Multiply the value of z by 4

//Divide and set equal 
z= 100;
z= /= 4;

//Modulus and set equal
z= 10
z= % 3





//Operators

//Assignment  Operator
//Arithmetic Operators