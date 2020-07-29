/**
 * Functions:
 *
 * 0. Functions allow us to write a reusable block of code that will do work for us anytime we 
 *    call on the function or pass information through it. Functions are like a recipe of instructions on
 *    on the side of the box for putting together a toy. Functions are used all the time in JS and are
 *    extremely important to becomming a software developer.
 *
 * 1. There are Two phases of using functions: Declaration/Definition & Invocation/Calling/Executing/Applying
 *    Declaration => creating the function
 *    Invocation => using the function
 *
 * 2. Any number of required inputs can be designed for a function and these inputs are called Parameters. 
 *    Parameters need to be clear in what they are called to help make sense of what the function is 
 *    actually doing.
 * 
 * 3. Arguments are the values passed to a Function when you are executing the function. Unlike parameters 
 *    that are exact values (kinda like primative values), arguments must reference their names or the variables
 *    it was assigned, then pass any value that is expect from that reference. Ex. parameters are like street car
 *    seats whereas arguments are like the people on street cars.
 * 
 * 4. Functions can control their blocks of code by having variables within their scope.
 *    The scope is like variable visibility. Where you define the variable will let you know what gets access to that
 *    code. Functions can be very specific in this regard as they can have their own innerworkings while that outside
 *    hard-code has its own set of rules.
 * 5. Closure is when a function can carry within its body references to variables in its parent scope. The function
 *    can havae access to variables of its parent scole.
 */
 
 // Parameter //
 
 function addEasy(numOne, numTwo) {
     return numOne + numTwo;
 }
 // this simple and boring add function will add the first paramenter(numOne) to the second(numTwo)
 
 // Argument/ assigning functions to Variables //
 
const add = function(numOne, numTwo) {
    return numOne + numTwo;
};
const sum = add(1,2);// the result of the function can be assigned to a variable!
console.log(sum) // this will return 3

// Syntax //
/*
*  function(parameterOne, parameterTwo) {
*   //function body: code goes here. BE SURE TO INDENT! 
*}
*/