//JavaScript review so far

//Comments

//Single Line Comments

/*

MultiLine Comment
*/

//Remember comments are used  to describe our code or provide other documentation to our codes

//Comments are ignored by the compiler and only used by us and the other developers



//Variables

//Remember that variables are used to store data values
//Declaring a variable
var x;
//Assign variables a value
x = 10;

//When a variable has been declared but not assigned a value yet, then the valuefor the variable will be undefined.
var y;
console.log(y); ("the value of y is: "+ y);
y= null;
console.log("the value of y is: " + y);
//Variables can also be given value of null, which is nothing....nada..

//Primitive Data Types

//Strings represent texts they are collection of characters. Because they are a collection , you can treat strings like arrays.
var string= "This is a string";
console.log ("The string is" + string.length + " characters long.");
console.log(string[0]); //This gets us the first character in the string 
//We can find smaller strings within bigger strings
var helloWorld= "Hello World";
var worldLocation=helloWorld.search ( "World");
console.log("World is located in the string starting at index: " + worldLocation);
worldLocation= helloWorld.indexOf("World");

console.log("World is located in the string starting at index: " + worldLocation);
var repeatingString= "Test Test Test Test Test Test"
var lastTestLocation = repeatingString.lastIndexOf ("Test");
console.log (" Last instance of the string Test starts at: " + lastTestLocation); 
//Extracting parts of strings
var phoneNumber = "859-444-5467";
lastFourDigits = phoneNumber.slice(8); // Slice takes a start index and end index. if an end index isn't provided, it will give us everything from the start index on. 

console.log(" The last four digits of the phone number are: " + lastFourDigits);

var lastSevenDigits = phoneNumber.slice(-8);//Slice can also count backwards from the end of the string using negative numbers
console.log("The phone number is: " + lastSevenDigits);

var firstThreeDigits = phoneNumber.substring(0, 3);// Substring works the same as slice but can't handle negative numbers
console.log("The first three digits are: " + firstThreeDigits);

var email = "test@example.com";
var emailDomain = email.substr(12, 4); // Substr works like slice as well, but the second value is how many characters we want instead of the end index 
console.log("The domain of the email is: " + emailDomain);

//Replacing parts of strings 
var fruit = "Apple";
var newFruit= fruit.replace("Apple", "Banana");
console.log(newFruit);
//Make strings of upper and lowercase very easily

var name = "Scott";

console.log(name.toUpperCase());
console.log(name.toLowerCase());

//Removing leading and trailing whitespace from a string

var str = "      String         ";
console.log(str);

console.log(str.trim());

//One important noter about strings is that once you create it, you can't modify it. (immutable)
var changeString = "Trying to change this string";
changeString[0] = "S";
console.log(changeString);
// The only way to change an existing string is by assigning it a new value
changeString = "By assigning a new value, I replace the previous string";
//Nums
var myNum = 10;
var anotherNum = 20;

//We can perform different mathematical oeprations with our numbers
console.log(myNum + anotherNum);
console.log(myNum + 50)

var result = myNum /anotherNum; 

// if we try to combine different data types, things get weird

myNum = 10 
var myString = "10";

console.log(myNum + myString); //This gives us the string "1010" because it converts the number to a string to add it to another string.

console.log(myNum/myString); //This will work because JavaScript will convert the string to a number

//NaN
var x = 100/ "Apple";
console.log (x); // This will print out an NaN invalid number because  it isn't a calculation
console.log(typeof NaN); // The type of NaN will be returned as ???????

//Infinity 
console.log (123456789  *   987654234);


// while (myNumber != Infinity) {
//     myNumber *= myNumber;
//     console.log (myNumber);
// }

//We can also run into infinity if we divide by 0

console.log(2/0);
console.log(-2/0);
//the type of infinity is also a number 

//Converting numbers to strings

var num = 10; 
var string = num.toString();  //This attempts to convert a number to a string
console.log(string);

//Making numbers use a fixed amount of decimal places 
var amount = 5.123478956704
console.log (amount.toFixed(0)); //5
console.log (amount.toFixed(2)); //5.12
console.log (amount.toFixed(4)); // 5.1234


//Booleans
// Are a true or false value 

//Any comparision that we do will give us back  a boolean value
console.log(6>3); //True
console.log (10<2); //False
console.log ("String1" === "String2"); //False

var boolean= true;

//Undefined/Null 

//Undefined is the data type we deal with when things haven't been assigned a value
var undefined; //A variable that hasn't been assigned a value will have a value of undefined. 
varx = undefined; //We can also assign a value of undefined 

//Null means nothing 
var nullVar= null; //Something with the value of null has no value 

//Symbol
//Symbols are used to represent a unique identifier.

var id1 = Symbol ("id");
var id2 = Symbol ("id");

console.log (id1===id2); // Even though both symbols have the same identifier, they are not equal to one another

//Operators

//Assignment Operator = used to assign values

/*  Arithmetic
+  add numbers (or to concatenate strings)
-
/
*
** used to exponentiate
++ used to add 1 to a number 
-- used to subtract 1 from a number
% used to get remainder from division

Comparision
== equal to 
=== equal to and same type 
!= not equal to 
!== not equal to  or not equal type 
> Greater than
< less than 
>= Greater than or equal to 
<= Less than or equal to 

Logical 
&& AND
|| OR
! NOT

*/

//Arrays are containers for pieces of related data 

var seasons = ["Spring", "Summer", "Fall", "Winter"];

//We can access an array by referring  to the index number of the data we want from the array
console.log(seasons[0]);  //Arrays start numbering at 0!  0 is the first element!

seasons [2] = "Autumn"; //Change an array valueWe can get length of an array using.length

console.log(seasons.length);

//We can use .length to easily access the last item in the array
console.log (seasons[seasons.length -1]);

//Adding items to arrays
seasons.push ("New season"); //This will add to the end of an array 

seasons.unshift ("Another new season"); //This will add an element at the beginning of an array

console.log(seasons);

seasons.splice(2, 0, "Super Summer"); //This will add an element to the array at a given index

console.log(seasons);

//Removing elements from an array

seasons.pop(); //Removes  the last element from an array
seasons.shift(); //Removes the first element from an array 

seasons.splice(2, 1); //Starting at the given index, removes the given amount of items

console.log (seasons);



//Conditional Statements 

//Used to execute code based on different conditions
//The execution  is based on booleans values
// If statement
var tired = true;
if (tired===true){
    console.log("Need a nap");
}
//We could do this if we want to check the other condition
//if (tired===false){
//  console.log("Good to go!");
//}
if (tired){
    console.log("Need a nap");
} else{
    console.log("Good to go!");
}

var colors = ["Blue", "Purple", "Magenta", "Orange", "Brown"]
console.log(colors[0]);
console.log(colors[2]);
colors[colors.length-1]= "ultraviolet";
var fourthColor= colors[3];
colors.push('indigo');
colors.unshift("brown");
console.log(colors.length);
colors.pop();
console.log(colors.length);



console.log (colors);




//Conditional Statements

//If/Else examples
var x = 10;
var y = 5;

if (x>y){
    console.log("X is greater than Y");
} else{
    console.log("Y is greater than or equal to X");
}

var hour = 20;

if (hour <16){
    console.log("Good Day");
} else{
    console.log("Good Evening");
}

var number  = 4;

if (number %2 ===0 ){
    // Since the number divides evenly into 2, it's even
    console.log("even");
} else{
    console.log("odd");

}
//We can have if statements inside of if statements
var a = 1;
var b = 2;
var c = 3;
if (a>b){
    console.log("a is greater than b"); }

    //By making it here, we know that a is greater than b already 
    
    else if (a > c) {
        console.log ("a is also greater than c"); }
    
else { 
    

            console.log("a is greater than b but less than c")
}

    console.log (" a is less than or equal to b")

var temperature = 85;
if (temperature > 80) {
    console.log("It's hot out");

} else if (temperature > 70) {
    console.log ("It's slightly hot out");
} else if (temperature > 60){
    console.log("It's pretty comfortable out");
    } else if (temperature > 40) {
        console.log("Kinda cold");
    } else {
        console.log("Brr");
    }
    //We can chain if/else statements together to test conditions sequentially. Above, we first test for the temperature to be above 80, then we test for above 70, etc.

//The if/else chain stops soon as a condition is true
var hourOfTheDay = 10;

if (hourOfTheDay < 0 || hourOfTheDay > 23){
    console.log ("Invalid entry");
}
if (hourOfTheDay >= 18 && hourOfTheDay <= 23){
    console.log("Night");
} else if (hourOfTheDay >= 15){
    console.log("Evening");
} else if (hourOfTheDay >= 12){
    console.log("Afternoon");
} else if (hourOfTheDay >= 6) {
    console.log("Morning");

} else if (hourOfTheDay >= 0) {
    console.log ("Night");
}
//Switch statement 
  var fruit = "Banana";
  switch (fruit) {
      case "Apple":
      console.log("That's an apple");
      break;
       case "Banana":
       console.log("That's a banana");
       break;
       case "Mango":("That's a mango");
       break;
       case "Strawberry":
       console.log("That's a strawberry");
       break;
       default:
       console.log("Invalid fruit entered");
       break;
  }
  //Switch statements can be used to simplify large chains of if/else statements. We can instead switch on a variable or condition and execute different cases based on those in a shorter and more concise form.

  var currentDate = new Date ();
  console.log(currentDate.getDay());
  switch (currentDate.getDay()) {
      case 0:
      console.log ("Sunday");
      break;
      case 1: 
      console.log("Monday");
      break;
      case 2: 
      console.log("Tuesday");
      break;
      case 3:
      console.log("Wednesday");
      break;
      case 4:
      console.log("Thursday");
      break;
      case 5:
      console.log("Friday");
      case 6:
      console.log("Saturday");
      break;
  }
  var temperature = 80;
  switch(true) {
      case (temperature >= 80):
      console.log("Pretty Hot");
      break;
      case (temperature >=70):
      break;
    case (temperature >=60):
      console.log("Comfortable");
      break;
      case (temperature >=40):
      console.log("Coldish");
      break;
    default:
     console.log ("Too cold");
  }

     var num = 3;

     //Create a switch statement that checks to see if  num's value is 1, 2, 3, 4, 5. If it is print out the value of num * 2. Otherwise, print out "Invalid Number
     
     switch (num) {
        case 1:
         console.log (num * 2);
         break;
        case 2:
         console.log (num * 2);
         break;
        case 3:
         console.log (num * 2);
         break;
        case 4:
         console.log (num * 2);
         break;
        case 5:
         console.log (num * 2);
         break;
        default:
         console.log ("Invalid Number");
     }

     //Ternary Statements are shorthand for if/else blocks. We check the condition, followed by a question mark. The first thing after the question mark is what happens if the condition is true . This is followed by a colon, and after that is what happens if the condition is false. 
     var tired = true; 

     tired ? console.log ("Time to sleep") : console.log ("I'm wide awake");
     let isStudent = false;
     let isSenior = true;
     let price = isStudent ? 8 : isSenior? 6: price= 10;
     
     
     var hungry = true;
     hungry ? console.log("Need Food"): console.log ("Not Hungry"); 

//if (temperature > 70){
//    console.log("It's slightly hot out");
//}

//Loops 
//Let's say we want to print out "Hi" 10 times 
// we could copy and paste that line of code 10 times 

//A for loop consists of these parts:
// for keyword
// block of code to execute  (inside the curly braces)
// 3 statements inside the parenthesis:
console.log("For loop begins here:");

for (var index = 0; index < 10; index ++) {
    //The three statements within the parenthesis are how our for loop runs. 
    //Statement 1 (Initializer):  Create an index variable. This variable acts as the counter for our loop.
    //Statement 2 (Test Condition):  Specify a condition for our index. In this case, we want the loop to run while our index is less than 10. 
    //Statement 3 (Updater): Modify our index. In this case, we are incrementing it by 1 each time we go through the loop. 
console.log(index);
console.log("Hi");
}
//For loops will be run until condition is no longer true. In the case of the above for loop, the for loop will run while the index is less than 10. Once it hits 10, then the for loop is broken out of. 
console.log("We're done with the for loop now");
// for (var i = 1; i > 0; i ++) 
//If our conditions for our loops are written in such a way that they will never be false, the loop will never be broken out of and continue to repeat forever. It's known as an infinite loop. 
//console.log("We're in an infinite loop...");
//}
var sum = 0;

//Gets the sum of 0-10
for (var i = 0; i <= 100; i++) {
    console.log (i);
    sum += i;
}
console.log (sum);
//Counting down from 100
for (i = 10; i >= 0; i--){
     if (i > 0) {
         console.log (i);
     } else {
         console.log ("Blast Off");
     }

 }
 //Print out every even number between 1 & 50
  for (var i = 1; i <= 50; i ++){
    if (i % 2 === 0) { //Because i % 2 is equal to 0 (no remainder when divided by 0, it's even)
     console.log (i);
    }
  }

  //Printing out each character in a string 
  var string = "This is a string";

  //This for loop will run until our index is one less than length of the string. 
    for (var i = 0; i < string.length; i ++) {
        console.log(string[i]); //Each time thru the loop, we print out the next character by accessing its index. First time through: string [0], next string [1], all the way until we get string [string.length -1]
    }
    //Print out each color in an array of colors
    var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
     for (var counter = 0; counter <colors.length; counter ++) {
         console.log(colors[counter]);
     }
     //Multiply all of numbers together and print out result.
     var nums = [43, 95, 12, 28, 59, 87, 31];
     var total = 1; 
     for (var i = 0; i < nums.length; i++) {
         total *= nums[i];
     }
     console.log(total);

     //Create an array of strings. Using a for loop iterate across the array and concatenate all the strings together. Finally, print out the final string. 
     var strings = ["This", "is", "an","array", "of", "strings"];
     var finalString = "";
     for (var index = 0; index < strings.length; index ++) {
         finalString = strings[index];

         console.log (finalString);

         finalString= "";

        //  for (var index = strings.length -1; index >= 0; index--) {
        //      finalString += strings[index];
        // }
     }
console.log(finalString);

     
     //1. Using a for loop, multiply together all of the odd numbers between 1 and 10.
     var total = 1;
     for (var i = 1; i<=10; i++) {
         if (i % 2 !==0) {
             total *= i; //If i is odd, total = total * i
         }
     }
     console.log(total);

     //2. Using a for loop, print off the multiplication tables of the number 9 from 1-12. 
      for (var i = 1; i <= 12; i ++){
          var result = 9 * i;
          console.log(result);
      }

    //  //3. Using a for loop, print off the squares of numbers from 1-20. 
    //     for (var i = 1; i <= 20; i ++) {
    //         console.log(i ** 2);
    //     }
    //     //For-of  loop
    //     var groceries = ["Milk", "Bread", "Chips", "Hamburger", "Fruit"];
    //     for(grocery of groceries) {
    //         console.log(grocery);
    //     }
    //     //A for-of loop will automatically iterate through each element of an array. We don't need to deal with an index variable or anything like that. Each time thru the loop, the variable to the left of the of keyword will hold the value of the next array element. 
    //     var name = "Scott";
    //     for (character of name) {
    //         console.log(character); 
    //     } 
    //     var prices = [5.32, 7.89, 10.32, 4.33, 7.21];
    //     var highestPrice = 0; 
    //     for (price of prices){
    //         if (price > highestPrice){
    //             highestPrice = price; //If the price we're looking at during this iteration is higher than what we have for highestPrice, set highestPrice to this price. 
    //         }
    //     }
        

    //     console.log("The highest price is: " + highestPrice);
//Write a JavaScript function called findLargest to find the largest of three input integers.
function findLargest(num1, num2, num3) {
    var largestNum = 0;
    if (num1 > num2) {
        largestNum = num1; //If num1 is bigger than num2, set largestNum = num1
    } else {
        largestNum = num2; //Since num2 is bigger than num1, set largestNum = num2
    }
    if (num3 > largestNum) {
        largestNum = num3; //Since num3 is bigger than the largestNum from num1 and num2, set largestNum = num3
    }
    return largestNum;
}
console.log(findLargest(3, 4, 5)); //Testing the function out to see what it returns
//Write a JavaScript function called sumArray to calculate the sum of values in an input array.
function sumArray(inputArray) {
    var sum = 0;
    for (num of inputArray) {
        sum += num;
    }
    return sum;
}
console.log(sumArray([3, 7, 5]));