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
Collapse



//Write a JavaScript function called countVowels to count the number of vowels in a given string.
functioncountVowels(string) {
    var count = 0; //Keeps track of how many vowels we find.
    var lowerCaseString = string.toLowerCase();//Convert he input string to lower case before we check for vowels.
    for (letter of lowerCaseString) {
        if (letter ==="a") || letter === "e" || letter === "i" || letter === "o" || letter ==="u") {
             count ++; //Since the letter is a vowel, add one to the count
        }
    }
    console.log(count);

}

countVowels("Hello");
countVowels()


//Write a JavaScript function called printShape to construct the following pattern, using for loops.
//*
//** 
//*** 
//**** 
//***** 
//****** 

//*Hint- easiest way to do this is by having a for loop with another for loop nested inside of it*
function printshape();
      for (var outerIndex =1; outerIndex <=6; outerIndex ++){
          var output = "";
      for (var innerIndex = 1; innerIndex <= outerIndex; innerIndex ++) {
          //This loop will run the same number of times as the current value of outerIndex. If outerIndex = 10, this loop will run 10 times. 
          output +="*";

      }
      //Outer index = 1 --> Inner for loop runs for 1 iteration
      //Outer index = 2 --> Inner for loop runs for 2 iterations
      console.log(output);

 }

 printshape();

 //Write a JavaScript function that will return true if the string input is y/yes or false if string is n/no.
function evaluateInput(input){
    if(input==="y") || input === "yes"){
        return true;
    } else if (input === "n" || input ==="no"){
        return false;
    }
}
console.log(evaluateInput("yes"))
console.log(evaluateInput("no"));
 
//Write a JavaScript function to convert a specified input number to an array of digits. /*Hint : Strings are an array of characters ... so can we convert a number to a string? */
function convertNumber(number){
    var numAsString = number.tostring(); //Convert the number to a string
    var digitArray = [];
    for (character of numAsString){
        digitArray.push(character); //For each character in our number string, push that character to digitArray
    }
    console.log(digitArray);
}
convertNumber(1,2,3,4);
convertNumber(912512);

//For this exercise, consider you live on a farm with chickens(2legs), cows(4legs), and pigs (4legs). You want to calculate the total number of legs you have depending on these animals. Create a JavaScript function called sumLegs that takes in a number of chickens, a number of cows, and a number of pigs as input and returns the total number of legs. 
function sumLegs(numChickens, numCows, numPigs){
    var totalLegs = numChickens * 2 + numPigs * 4 + numCows * 4;
    return totalLegs;
}
var numLegs = sumLegs(4, 5, 5);
console.log(numLegs);

//Write a JavaScript function that calculates the number of seconds in a number of hours that are passed in as an input parameter, and returns the number of seconds. 
function calculateSeconds(hours){
    var minutes = hours * 60;
    var seconds = minutes * 60;
    return seconds;
}
vartotalSeconds = calculateSeconds(24);
console.log(totalSeconds);

//Write a JavaScript function to format a number up to specified decimal places. The function should take in the number and the number of decimal places you want to show as input.
// /* Hint: use the toFixed function! */
function roundToDecimalPlaces(number, decimalPlaces){
    var roundedNumber = number.toFixed(decimalPlaces); // Round the number that is passed into the number of decimal places that is passed 
    console.log(roundedNumber);
} 
roundToDecimalPlaces(4.5, 3);
roundToDecimalPlaces(6, 7);

//Write a JavaScript function to calculate the product of values in an input array. 
function calculateProduct(numberArray) {
    var product = 1;
    for(number of numberArray) {
        product *= number;
    }
    console.log(product);
}
calculateProduct([5, 9, 10, 100, 32]);

//Write a JavaScript functionto calculate the perimeter of a rectangle. The function should take in the lengths of the four sides as input.
function calculatePerimeter(side1Length, side2Length, side3Length, side4Length){
var perimeter = side1Length + side2Length + side3length + side4Length;
    console.log(perimeter);
}
calculatePerimeter(3, 5, 7, 9);

//Write a JavaScript functiono format a number up to specified decimal places. This function should ake in the number and the number of decimal places you want to show as input.  // /* Hint: use the toFixed function! */
function roundToDecimalPlaces(number, decimalPlaces){
    var roundedNumber = number.toFixed(decimalPlaces); // Round the number that is passed into the number of decimal places that is passed in
    console.log(roundedNumber);
}
roundToDecimalPlaces(4.5, 3);

/* Write a JavaScript function to calculate the product of values in an input array */ 
function calculateProduct(numberArray){
    var product =1;
    for(number of numberArray){
        product *= number; 
    }
    console.log(product);

}
calculateProduct([5, 9, 10, 100, 32]);

// Write a javaScript funtion that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function uppercase(string){
    let wordArray = string.split("");
    
    //Create a new array to hold each word once it's uppercased
    let uppercaseArray = [];
    
    for (var i = 0; i < wordArray.length; i++){
        //For each word in the wordArray, get the first character and uppercase it and add the rest of the word to it by slicing all but the first character. Add that to our array of uppercased words. 
        uppercaseArray.push(wordArray[i].charArt(0).toUpperCase() + wordArray[i].slice(1));
    }
    return uppercaseArray.join(" ");
}

console.log(uppercase("hi i'm scott"))

//Create a function to determine if a number is prime or not 

function testPrime(number){
    if (number === 1){
        return false;
    } else if (number === 2) {
        return true;
    } else {
        for (var i = 2; i < number; i++){
            if (number % i === 0){
                return false;
            }
        }
        return true;
    }

    }
    console.log(testPrime(100000000));