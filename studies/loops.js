/**
 * Loops:
 *
 * 0. Loops are very powerful tools that allow us to search through objects and arrays.
 *    This is how we run code over and over. How to repeat functionality or logic over
 *    and over.
 *
 * 1. There are three types of loops: while, for, and for in.
 *
 * 2. Beware of the infanite loop!
 */
 
 // 1. while loop //
 /*
 * Loops a block of code as long as a specified condition is true
 */
 let i = 2;
 while (i < 6) {
     console.log("the number is " + i);
     i++;
     // While i < 10 this loop will keep looping 
 }
 // the return will be 
// the number is 2
// the number is 3
// the number is 4
// the number is 5

// 2. for loops //
/*
* structured like: for (where the loop starts; where the loop will end; how to increment the values)
* excellent way to search through arrays.
* clearly shows instructions for starting/end points and how to increment towards the endpoint
*
*/

function printArrayValues(array) {
  //using i <= array.length because the ending point is at the end of the array length
  for (var i = 0; i <= array.length; i++) {
      //using for loop to loop through the array starting from beginning of array
      //ending at the end of array => array.length
      //adding i = i + 1 after each loop
    console.log(array[i])//console.log array[i] will log each item in the array one at a time
  }
}

function printArrayValuesInReverse(array) {
  for (var i = array.length - 1; i >= 0; i--) {
      //starting point i = array.length - 1 because we need to start at the end of the array and loop back
    console.log(array[i])
    //array[i] will give us the backward(reverse) loop through the array being passed
    // it will work in revers i = i - 1 after each loop
  }
}
// 3. for in loop //
/*
* Used to loop over the keys, the properties in an Object
*/

function printObjectKeys(object) {
 
  for (var objectKey in object) {
      //this loop drops into the object and prints the keys to that object
    console.log(objectKey)
  }
}

const totalCost = {
    prep: 1200,
    boot: 850,
    immersion: 12000
};

let total = 0;
for (var classes in totalCost) {
    total += totalCost[classes]
 // this loop goes through the totalCost object and adds up the value of the keys
}

console.log('Total cost of class = ' + total)
// Friendly reminder to myself what this investment looks like.