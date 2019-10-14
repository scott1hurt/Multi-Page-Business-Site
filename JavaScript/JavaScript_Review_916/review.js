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
    i < 100;
    i ++ 
) {
    
}

//2. For of 

//3. While 
//4. Do - while loops

//Functions 
//Declaring Functions
//Input Parameters
// Returning