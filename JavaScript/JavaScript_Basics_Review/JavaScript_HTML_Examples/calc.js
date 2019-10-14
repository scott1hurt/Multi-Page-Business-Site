//This brings up a prompt window asking for the user's age. When the user enters an age and hits ok, the response will be recorded in the age variable.

var age=prompt("What is your age (in years)?");

console.log(age);

//Calculate the number of days someone has been alive based on the age entered.
var days=age * 365.25;
console.log(days);

//Display the result to the user
alert(' Your age is ' + age + " which is roughly " + days + " days.");
//Using string concatenation to create the full string and adding the values of age and days inside our string.



//Using JavaScript to target the element with the ID "result" and change its contents
document.getElementById("result").innerHTML
= ' Your age is ' + age + " which is roughly " + days + " days."
