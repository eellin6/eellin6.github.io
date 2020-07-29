/**
 * Operators:
 *
 * 0. Operators can be used to assign, add, multipy, divide, show remainders, increment, and decrement
 *
 * 1. Operators are separated into 6 main sections:
 *          1. Assignment operators
 *          2. Arithmetic operators
 *          3. Comparison operators
 *          4. Logical operators
 *          5. Unary operators
 *          6. Ternary operators
 */

// 1. Assignment Operators //
/*
* Assign values to JS variables
Operator	Example	    Same As
*    =	    x = y	    x = y
*   +=	    x += y	    x = x + y
*   -=	    x -= y	    x = x - y
*   *=	    x *= y	    x = x * y
*   /=	    x /= y	    x = x / y
*   %=	    x %= y	    x = x % y
*/

// 2. Arithmatic Operators //
/*
* 
*       Operator	    Description
*
*           +	        Addition
*           -	        Subtraction
*           *	        Multiplication
*           **	        Exponentiation => returns the result of the first variable to the power of the second variable
*           /	        Division
*           %	        Modulus (Remainder)
*           ++	        Increment
*           --	        Decrement
*/

// 3. Comparison Operators //
/*
*       let x = 5 //using this example to explain the comparisons below
*
*   Operator      Description         Comparing       Returns
*   
*     ===         equals value          x===5           true
*                 and equal type
*
*     !==         not equal value      x !=== 5         false
*                 not equal type
*
*      >          greater than          x > 8           false
*
*      <          less than             x < 8           true
*
*      >=         greater than          x >= 8          false
*                 equal to                              
*
*      <=         less than             X <= 8          true
*/

// 4. Logical Operators //
/*
*   let six = 6 and three = 3 for the below examples
*
*   Operator            Description         Example
*     &&                    and             (six < 10 && three > 1) //answer is true because both are true
*.    ||                    or              (six === 5 || three < 5)// answer is true because 3 IS less than 5
*.    !                     not             !(six === three)// true because the !. Like a double negative
*/


// 5. Unary Operators //
/*
* An operation with only one operand. This operand comes either before or after the operator. Unary operators 
* are more efficient than standard JavaScript function calls. Additionally, unary operators can not be overridden,
* therefore their functionality is guaranteed.
*
*       Operator	            Explanation
* Unary plus (+)	            Tries to convert the operand into a number// => +3 returns 3
* Unary negation (-) 	        Tries to convert the operand into a number and negates after// => -3 returns -3
* Logical Not (!)	            Converts to boolean value then negates it => !false => true
* Increment (++)	            Adds one to its operand// => var x = 5; y = x++ => y = 4 & x = 5 
* Decrement (--)	            Decrements by one from its operand=> var x = 5; y = x-- => y = 4 & x = 3 
* typeof	                    Returns a string which is the type of the operand=> typeof false returns 'boolean'
* delete	                    Deletes specific index of an array or specific property of an object
* void	                        Discards a return value of an expression.
*/

// 6. Ternary Operators //
// make much shorter if statments
let nameMe = "Edward"
let codeLevel = nameMe === 'Edward' ? 100 : 10;

console.log(codeLevel);