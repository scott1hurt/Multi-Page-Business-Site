//Write a JavaScript function called findLargest to find the largest of three input integers.


// Write a JavaScript function called sumArray calculate the sum of the values in an input array.

function sumArray(inputArray) {
    var sum = 0; 
    for (num of inputArray){
        sum += num;
    }
    return sum;
}
console.log(sumArray([3, 7, 5]));