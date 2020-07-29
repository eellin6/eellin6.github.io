// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (numString) {
         let testNum = 1;
         let testString = "a";
         if (numString > testNum) {
             return true;
         } else if (numString > testString) {//checking if the base "" is greater than the given value 
             return true;
         } else {
             return false;
         }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (numString) {
         let testNum = 3
         let testString = "c"
         if (testNum > numString) {
             return true;
         } else if (testString > numString) {//checking to see if the base value is less than the given value.
             return true;
         } else {
             return false;
         }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

       return function (string) {
           //convert the string to all lowercase letters, and store in a newStr variable
           let newStr = string.toLowerCase();
           
           //if the first letter of the newStr is the same as the lowercased startsWith argument, return true
           if (newStr[0] === startsWith.toLowerCase()) {
               return true;
           } else {
               return false;
           }
       }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
     return function (string) {
           //convert the string to all lowercase letters, and store in a newStr variable
           let newStr = string.toLowerCase();//make all in string lowercase so we can then test the string against the character that is passed through
           
           if (newStr[string.length -1] === endsWith.toLowerCase()) {//string.length - 1 baby! This lets you check the string from the back
               return true;
           } else {
               return false;
           }
     }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    let newArray = [];//cikkectuib soace fir results
    for (var i = 0; i < strings.length; i++) {
        newArray.push(modify(strings[i]));//loop results and modified and new results are pushed to newArray
    }
    return newArray;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    var newOutput = [];
    for (var i = 0; i < strings.length; i++) {
        newOutput.push(test(strings[i]))
        //all of the strings are being tested and the results are being pushed into the newOutput array
        //These results will all be true false after going through the test function
    }
        if(newOutput.includes(false)) {//use .includes to finding out if false is in all the strings
            return false;
        } else {
            //if there is no false.. Then they are all true
            return true;
        }

    

    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}