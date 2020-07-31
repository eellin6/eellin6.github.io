
/**
 * Scope:
 *
 * 0. The context in which a variable exists. It manages variable accessibility. You are free to access the variable defined within its scope. But outside of its scope
 *    the variable is incaccessible. 
 *    
 * 1. Scope can be local or global in JS.
 *
 * 2. The three main declarations for variables are var, let, const that have different rules for scope. There breakdown is as follows
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
 
 // 1. Block Scope //
 /*
 * Defines a scope for variables declared.
 */
if(true) {
    //if block scope
    const message = "hello";
    console.log(message);// 'hello'
}
console.log(message); //throws a ReferenceError
/*
* The first console.log(message) will log the variable becasue message is accessed
* from the scope where it is defined
* The second console.log(message) throws a reference error bc message variable is accessed
* outside of the scope.
*/

/*
* The if, for, while statements also create a scope
* See below for "for loop" example:
*/
for (const color of ['green', 'red', 'blue']) {
  // "for" block scope
  const message = 'Hi';
  console.log(color);   // 'green', 'red', 'blue'
  console.log(message); // 'Hi', 'Hi', 'Hi'
}
console.log(color);   // throws ReferenceError
console.log(message); // throws ReferenceError
//color and message variables exist within the cope of the for loop code block.

/*
* The same is true for the while loop 
*/

 while (/* condition */) {
   // "while" block scope
   const message = 'Hi';
   console.log(message); // 'Hi'
 }
 console.log(message); // => throws ReferenceError
// The message is defined within while() body, consequently message is accessible only within while() body.

// Var is NOT block Scoped //
if (true) {
  // "if" block scope
  var count = 0;
  console.log(count); // 0
}
console.log(count); // 0
// count variable is accessible within the scoope of if code and outside!
// A code block does not create a scope for var variables BUT an Function body does.

// 2. Function Scope //
/*
* Defines a scope for variables declared using const, let, AND var!
*/

function run() {
  // "run" function scope
  var message = 'Run, Forrest, Run!';
  console.log(message); // 'Run, Forrest, Run!'
}

run();
console.log(message); // throws ReferenceError
// would throw ReferenceErron if var was let or const.

// 3. Global Scope //
/*
* The outermost scope. It is accessible from any inner scope.
* A variable declared inside the global scope is named global variable. 
* Global variables are accessible from any scope.
*/


// 3. Lexical Scope //
/*
* Lexical scoping means that the accessibility of variables is determined 
* statically by the position of the variables within the nested function 
* scopes: the inner function scope can access variables from the outer function scope.
*/

function outerFunc() {
  // the outer scope
  let outerVar = 'I am from outside!';

  function innerFunc() {
    // the inner scope
    console.log(outerVar); // 'I am from outside but the called me here!'
  }

  return innerFunc;
}

const inner = outerFunc();
inner();


