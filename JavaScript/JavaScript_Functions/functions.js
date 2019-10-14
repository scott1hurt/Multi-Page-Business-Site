//Functions 

// Functions are self contained blocks of code. We can call upon these blocks of code to use throughout  our applications. 

function addNumbers() {
    console.log (5 + 3);
}

addNumbers();
addNumbers();
addNumbers();
addNumbers();

//Functions consist of the following parts:
//function keyword 
//An indentifier for the function 
//Code block { }, which contains the code the function carries out

function sayHello () {
    console.log ("Hello User");
}

function calculateTotal() {
    var price = 8.79;
    console.log (price + (price * 0.06)); 
}
sayHello();
calculateTotal();

//Advantage of using functions is that we can use a piece of code without having to retype it every time we want to carry out the functionality.

//Naming conventions for Functions 
//Functions are generally named similarily to variables. Names for functions are in camel case just like variables. WHen naming a function, it's good to provide a name that the function does. As good rule of thumb for this is to have a verb followed by noun. 

//For example: a function to print off someone's name could be called printName. 

//Create a function called sum to add together  an array of numnbers. The function should print out the total of the array. 
//Hint: Your array will need to be declared inside of the function body. 
function sum() {
    var nums = [5, 7, 1, 2, 3, 5];
    var sum = 0; 
    for (num of nums){ 
        sum += num; 
    }
    console.log (sum);
}
sum ();
//Calling Functions
// In order to call a function, we need to use the function's name. 
//We've already done this with the functions we made above. We've also done this with some functions that are built-in to JavaScript.
//alert ("This is an alert");   <--Calling the alert function
//Calling a function can also be referred to as invoking the function
function sayName() {
    var firstName = "Scott";
    var lastName = "Hurt";
    console.log ("My name is "+ firstName + "  " + lastName);

}
sayName();
//Functions become super powerful when we add parameters to our functions.
//Parameters are pieces of data that we pass into our function that our function uses when it's running. 
//Our greet function has two parameters:firstName and lastName. 
function greet(firstName, lastName){
    console.log ("Hello " + firstName + " " + lastName); 
    //Inside of the function we have no idea what value firstName and lastName have 

}
greet("George", "Washington"); //Pieces of data passed in to our function parameters are called arguments. 
greet("Justin", "Browning"); //Since our function has parameters, we can run the function code and get different results by passing in different values. 

//Properties can be whatever we want, however, they should be descriptively named so that it's easier to figure out what the function is doing. 
function calculateSum(num1, num2, num3){
    var sum = num1 + num2+ num3;
    console.log(num1);

    console.log(sum);
}

calculateSum(4, 5, 6);
calculateSum(523, 4353, 234);
calculateSum(234, 3, 12); 

calculateSum(4, 5); //What happens when we don't enter in one of parameters that our function needs.
// If we don't provide an argument as a value for our parameter, it will be undefined. Above, because we didn't give num3 a value, it is undefined and when we try to add it to our sum, the sum becomes NaN(not a number). 
//Important Note About JavaScript: There is no type checking done on our function parameters. For example, if we are expecting a number as an input to a function, a string could be passed in instead. There is no way to make sure that only numbers can be passed in. 
calculateSum("param1", "param2", "param3"); //Even though this function is designed to add 3 numbers together we can pass in 3 strings or even other data. 

//Function's to Practice:
  function calculateSum(input){
      var squared =input * input;
      console.log(squared);

  }
  calculateSum(8);

  function test(num1, num2){

    if (num1 > num2) {
        console.log("The first number has a higher value");
    }
      
    else {
         console.log("The second number is has a higher value");
         

    }
}


test(4, 7);

function why(x, y){
    if (x>y) {
        console.log("a;sldkfj");
    } else {
        console.log(";asdjfh");
    }
}

why(4, 7);

function input (num1);{

} if (num1 % 2 === 0) {
    console.log(even)
} else {
    console.log(odd)
}

function getLargestElement (numbers);{
    var largestNumber = 0;
    for(number of numbers){
        if(num > largestNumber){
            largestNumber = number; 
        }
    }
    console.log("The largest number in the array is: " + largestNumber);
}
getLargestElement ([3, 7, 12, 1, 5, 2, 75, 3]);

//1.Create a function that takes in a number and prints out that number squared. 
function squareNumber(num) {
    console.log (num**2);
}
squareNumber(3);
squareNumber(7);

//2. 
function findBiggest (num1, num2) {
    if (num1 > num2) { 
        console.log("First number has a higher value");
    }else if (num2  > num1) {
        console.log("The second number has a higher value");
    } else{
        console.log("The two numbers are even");
    }
}
//3. 
function isEven (num){
    if (num % 2 ===0) {
        console.log("Even");
    } else {
        console.log("Odd"); 

    }

//Other option: 
//num % 2 === 0 ? console.log("Even") : console.log ("Odd");
}

//4. 
function getLargestElement(numbers) {
    var largestNumber = 0; 
    for (number of numbers){
        if (num > largestNumber) {
            largestNumber = number; 
        }
    }
    console.log("The largest number in an array is: "  + largestNumber); 
}

//5 //Create a function that takes in the radius of a circle as input. The function should print out the diameter, circumference, and area of the circle.
/*
    Hint: 
    Diameter = 2 * radius, 
    Circumference = 2 * pi * radius,
    Area = pi * (radius ** 2)
*/
function calculateCircleValues(radius){
    var pi = Math.pi();

    var diameter = 2 * radius;
    var circumference = 2 * pi * radius 
    var area = pi * (radius ** 2);
    console.log (" The circle's diameter is: "  + diameter + ". The circle's circumference is " + circumference + ". The circle's area is " + area + ".");  
}
//6. Create a function called calculateDogAge that takes a dog's age (in human years) as input. The function should print out the dog's age in dog years (1 human year = 7 dog years). BONUS: Add in another parameter to the function that takes a custom conversion rate value as input. For example, instead of having it hardcoded that 1 human year is 7 dog years, have it so the number of dog years will depend on the conversion rate parameter.
function calculateDogAge (dogAge, conversionRate) {
    var ageInHumanYears = dogAge * conversionRate; 
    console.log(ageInHumanYears); 

    calculateDogAge(7, 7);
    calculateDogAge(3, 5);
}

//7. 
function farenheitToCelcius(farenheitTemp){
    var celciusTemp = (farenheitTemp-32) * (5/9); 
    console.log("The temperature in farenheit is: " + farenheitTemp + ". The temperature in celcius is: " + celciusTemp + ".");
}
farenheitToCelcius(farenheitTemp) {
    var celciusTemp = (farenheitTemp-32) * (5/9);
}
farenheitToCelcius(32);
farenheitToCelcius(95);
farenheitToCelcius(50);

//Functions consist of the following parts:
//function keyword
//An identifier for the function
//Code block{ }, which contains the code the function carries out 


//Calling functions
//In order to call a function, we need to use a function's name.
//We've already done this with the functions we made above. We've also done this with some functions that are built-in to JavaScript. 
//alert("This is an alert"); <--Calling the alert function
//Calling a function can also be referred to as invoking the function

sayName();

console.log(sayName); //If we provide a function without the parentheses, JavaScript just gives us the function itself, and doesn't run it
//Functions become super powerful when we add parameters to our functions

//Parameters are pieces of data that we pass into our function that our function uses when it's running. 
//Our greet function has two parameters: firstName and lastName. 
function.greet(firstName, lastName) {
    console.log ("Hello" + firstName + " " + lastName);
}

greet("George", "Washington");//Pieces of data passed into our function parameters are called arguments. 
greet("Justin", "Browning"); // Since our function has parameters, we can run the function code and get a different results by passing in different values. 




