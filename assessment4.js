//Create a for loop to iterate through the provided array. If an element is divisible by 3 , console log the result of the number divided by 3.
var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
for (var i = 0; i < array.length; i ++) {
    if (array[i] % 3 === 0 ){ // If the element at index i is divisible by 3 
        console.log(array[i]) / 3); //Print out the element at index i divided by 3 

    }
}
for (blahh of array) { //For each element in our array
    if(blahh % 3 === 0){ //If the element is divisible by 3 
        console.log(element/ 3 ); // Print out the element divided by 3
    }
}

//Create a while loop that will run while the value of the counter is less than 100. For each iteration, it should print out: "The value of the counter is:" followed by the value of the counter. 1 should also be added to the counter uring each iteration. 
var counter = 0; 

while (counter < 100) {
    console.log("The value of counter is: " + counter);
    counter ++;
}

//Create a function that takes in two numbers as input. The function should print out the difference between the two numbers. 
function subtractNumbers(num1, num2){
    console.log(num1-num2);
}
subtractNumbers(4, 1);

//4. Create a function that takes an array of strings as input. The function should return the shortest of the strings as output.
function getShortestString(strings) {
    var shortest = strings[0];
    for (string of strings) { //Go thru each of our strings in the array
        if (string.length < shortest.length){ //If the current string is shorter than what's stored in shortest
        shortest = string; //Set shortest equal to that string 

        }
    }
    console.log(shortest);
}
getShortestString(["Which", "is", "the", "shortest"]);

//Create a function that takes in an assignment grade as input. The function should use conditional logic to return the letter grade corresponding to the assignment grade, as indicated by the following scale:
/* A = 90-100
   B = 80-89
   C = 70-79
   D = 60-69
   F = < 60
*/
function calculateGrade(score){
    if (score >= 90) {
        console.log("A");
    } else if (score >=80){
        console.log("B");
    } else if (score >=70) {
        console.log("C");
     
    }else if (score >=60){
        console.log("D");
    } else {
        console.log ("F");
    }
}

calculateGrade(95);
calculateGrade(82);

//Bonus: Create a function that takes 3 numbers as input. The function should return true if all three of the numbers are less than 10 and the numbers multiplied together is less than 30. 
function testNumbers(num1, num2, num3){
    if (num1 > 10 || num2 > 10 || num3 > 10){

    } return false; //If any of these numbers is greater than 10, return false. 
}

if (num1 * num2 * num3 > 30){
    return false; // If the numbers multiplied together is greater than 30, return false.
}
return true; //Since we didn't hit either  of the previous return statements, we know we have met both conditions.


//Bonus: Create a function that iterates thru the numbers 0-100 that plays the FizzBuzz Game

/*
FizzBuzz Rules 
*If the number is divisible by both 3 and 5, print "FizzBuzz".
*If the number is divisible by 3, print "Fuzz". 
* If the number is divisible by 5, print "Buzz". 

*/
function fizzBuzz(){
    for (var index = 0; index <= 100; index ++){ // Creating a for loop that is counting from 0 to 100.
        if ( index % 3 === 0 & index % 5 === 0 ){ //If it's divisible
            console.log ("FizzBuzz");
        if (index % 3 === 0) { //Checking to see if the current index is divisible by 3.
            console.log("Fizz");
       } else if (index % 5 === 0){ //Checking to see if the current index is divisible by 5 
        console.log("Buzz");
       } 
       } else {
           console.log(index);
       }
            

       }
    }
}

function fizzBuzz(){

}

//When you are finished with this assessment: Create a local repository, commit your files, and create a GitHub repository and push them up
