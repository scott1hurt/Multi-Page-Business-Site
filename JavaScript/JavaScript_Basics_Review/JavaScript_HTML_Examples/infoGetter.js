var firstName= prompt("What is your first name");
//Ask for the user's last  name
var lastName= prompt( "What is your last name");

//Ask for the user's age

var age= prompt ("What is your age");
console.log(age);

//Display information to the user
var fullName = firstName+ " " + lastName;

alert ("Full Name:" + fullName);
alert ("Age:" + age);
//Combine the first name and last name  into a single string

//alert ("Full name:"+ fullName);
//alert ("Age: " + age);

document.getElementById("fullName").innerHTML= "Full name: " + fullName;
document.getElementById("age").innerHTML= "Age:" + age;