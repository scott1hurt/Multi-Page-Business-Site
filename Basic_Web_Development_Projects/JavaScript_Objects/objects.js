//Objects

//Pretty much everything we deal with in JavaScript is an object.

//An object is a collection of related values and functionality.

var name = "Scott";  // A variable containing a single value

var person = {firstName: "Scott", lastName:"Hurt", age: 39}; //A JavaScriptobject representing a person stored in a variable named person

//Objects consist of key-value pairs, which means we have keys with an associated value. Above we have keys firstName, lastname, and age, which have an associated value.

console.log(person.firstName); //Accessing the firstName property of the person object using dot notation -> ObjectName.PropertyName

var date = new Date(); //Date is an object even if we didn't know it before!

date.getDate() //Accessing the getDate function of the date object

person["lastName"]; //We can also access properties this way.

var array = [];
array.length; //Length is a property of an array object 

var car = {make: "Honda", model: "CRV", mileage:20000}

car.make; //Honda
car.model; //CRV

var pen = {inkColor:"black", brand:"Bic"};

var cat = { furColor: "gray", spayedOrNeutered:"false"}

//The for in loop is specifically used for objects
//Iterating thru objects 
for (property in pen){
    console.log(property);
    console.log(pen[property]);
}