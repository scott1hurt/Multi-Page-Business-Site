//Operators are symbols used to carry out mathematic and logical operations(like comparing numbers or checking if two strings are the same)

//Assignment Operator 
// =
var newVariable=10; //newVariable is being assigned a value of 10
var anotherVariable=50;
var thirdVariable=newVariable + anotherVariable;
// thirdVariable is being assigned a valueof the value of newVariable plus the value of anotherVariable

console.log(thirdVariable);

//Arithmetic Operators 
var x=10;
var y= 5;
// + : addition

var sum = x + y;
// - : subtraction 
console.log(sum);
// - : subtraction
var result = x - y;
console.log(result);
// * : multiplication
console.log(8 * 9);
// / : division 
console.log ( 4 / 2);

// ** : exponentiation 
console.log (2 ** 3); // 2 to the power of 3
// % : modulo
// modulo operator works like division but instead of giving us back the result of division it gives us the remainder
console.log(10%2);
//Returns 0 because 10 divides by 2 evenly
console.log(10%3);
//Returns 1 because 10 divides by 3 with remainder of 1

// ++: increment
//Adds  1 to the value
x=10; 
x++;
console.log(x);
x++;
console.log(x);

//--: decrement
//Subtracts 1 from the value
x--;
console.log(x);

x--;
console.log(x);

//Precedence of arithmetic operations
// Like with algebra, operators generally follow the rules of PEMDAS(parenthesis, exponents, multiplication, division, addition, subtraction). Multiplication and division have equal precedence, and are calculated from left to right. Same with addition and subtraction. 
var solution= (2 * 4) + 3 * 2;
console.log(solution)