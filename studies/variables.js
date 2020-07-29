/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point. Variables are like boxes with labels on them 
 * that tell you what's inside the box.
 *
 * 1. There are three ways to create variables and that is by using var, let, and const. To create a variable
 *    we use the keyword, var (or now with ES6, let & const), followed by a name (id or alias) for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
/*
* The keyword name can be anything you want it to be as long as it is not a reserved keyword and this keyword
* should be relevant and follow the camelCase structure.
*/
var myName; 
/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined


// 2. initialization or assignment //
// When you assaign a value to an undeclared variable
myName = 'john';
console.log(myName); // prints => john


// 3. re-assignment 
// Changing or updating the value of a previously assigned variable
myName = 'bob';
console.log(myName); // prints => bob
//edName = 'Ryan'
//console.log(edName)// will get TypeError
// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


// 4. var , let, const
// Three keyword options you have in JS to declare variables.
/*
* Var is a keyword that declares a variable that is scoped to its currrent execution context.
* Let keyword declares a block scoped variable.
* Const keyword declares constants that are block scoped similar to let but the value of const cannot change.
*/
var myName; 
let yourName;
const EdName = 'Ed';
/*NOTE:
 *let myName; => with var and let you can create a variable without assigning a value
 *const myName; => if you don't assign a value to const then you will get a syntaxError
 * One of the biggest difference between const and var/let is that const CANNOT be reassigned a value
 */
 
 
// 5. Hoisting 
/*Variable and function declarations are processed before the code is actually
* executed. Even though they are written throughout the code, they are declared
* first and might as well be at the top of the code. 
* Variable definitions, however, occur when you assign a value to a variable. 
* The variable is hoisted to the top but the definition of the varaiable is not.
*/
console.log(definedWhen);// returns undefined even though it is defined below. 
                        // definedWhen is hoisted but its definition remains below.
var definedWhen = "when am I going to be defined?";
console.log(definedWhen);// returns "when am I going to be defined?"