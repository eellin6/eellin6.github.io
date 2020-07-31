/**
 * Hoisting:
 *
 * 0. An interesting attribute of JavaScript interpreter that moves the function and variable declarations 
 *    to the top of the current referenced scope. JavaScript's default behavior of moving declarations to the top.
 *    
 * 1. Functions declarations are also hoisted, but these go to the very top,
 *    so will sit above all of the variable declarations.
 * 
 * 3. JS Interpreter: Helps your computer understand JavaScript the same way an interpreter helps you understand
 *       someone who doesn't speak your language. Reads through your code and figures out what you are trying to do.
 */

// 1.Function Declarations //
/*
* Structured function sayHello() {};
*
* Names function definitions are hoiseted to the top of their scope, so they can be used in the program before they
* appear later in the code
*/

//const sum = add(1,1;)
console.log(sum);// returns 2
function add(numOne, numTwo){
    return numOne + numTwo;
}

// 2. Function Expression //
/*
* Formed when an anonymous Function is assigned to a variable or constant
*/
const sum = plus(1,1);
const plus = function (numOne, numTwo) {
    return numOne + numTwo;
} // prints 2

// 3. Keyword Hoisting // 
/*
 *      VAR:
 *          -reassignable: yes
 *          -hoisted: yes
 *          -scoped to functions: yes
 *          -scoped to if blocks: no
 *          -scoped to loop blocks: no
 *      LET:
 *          -reassignable: yes
 *          -hoisted: no
 *          -scoped to functions: yes
 *          -scoped to if blocks: yes
 *          -scoped to loop blocks: yes
 *      Const:
 *          -reassignable: no
 *          -hoisted: no
 *          -scoped to functions: yes
 *          -scoped to if blocks: yes
 *          -scoped to loop blocks: yes
 */

// hoisting
// How are variables hoisted in JavaScript?
// How are function declarations hoisted? How are function expressions hoisted?
// What is the JS Interpreter 
