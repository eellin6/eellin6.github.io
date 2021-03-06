// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
for (var num = 1; num <= 100; num++) {
    //This kicks off the loop
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
        //This is the first if statement and it is INSIDE the for loop. This solves for FizzBuzz
    } else if (num % 5 === 0) {
        console.log("Buzz");
        //This solves for Byz
  } else if (num % 3 === 0 ) {
      console.log("Fizz");
      //This solves for Fizz istead of what is divisible by 3
  } else { 
    console.log(num)
    //what I consider the most important part! This is essential for continuing the LOOP!!!
}
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}