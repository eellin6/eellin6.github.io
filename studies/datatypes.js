
/*
 * DataTypes:
 *
 * 0. Data Types are how we catagorize different types of data in Javascript. They allow Javascript interpreter  
 *    to work with different kinds of data.
 *
 * 1. The simplest data types are called primitive data types. These are numbers, 
 *    strings, booleans, NAN (not a number), undefined, and Null. These are atomic and immutable. They do not hold, collect, 
 *    or aggrigate other values. Operations on primative values return new primative values. The do NOT alter the original value.
 *    There are 6 simple/primative data types.
 *      1. Number
 *      2. String
 *      3. Boolean
 *      4. NaN
 *      5. undefined
 *      6. null
 *
 * 2. Complex data types aggregate and hold other values and as a by-product have an indefinate size. Complex data types 
 *    are stored as references when assigned to variable. Making a copy of that variable only copies a reference to where the 
 *    complex data type is stored. NOT its literal value.
 *    There are 3 complex data types.
 *      1. Object
 *      2. Array
 *      3. Function
 *
 * 3. Primitive Values are passed to a function BY COPY - When assigning, primative dataTpes are copied from one variable to the next.
 *    Complex Values are passed to a function BY REVERENCE 
 */

// 1. Simple/Primative Data Types //

// Numbers: Numeric data //
var num1 = 1;
var num2 = 2;
var num3 = num1 + num2;//num3 equals three because adding 1 + 2 = 3. The values of num1 & num2 never change.

// 2. String: Character data//
/*
* Strings represent character data and must be inside "", ``, or ''.
* Strings are good for holding words and expressions and can be added to other strings as well as separated.
*/
let myNameFirst = 'Ed';
let myNameLast = 'Ellington';
let myNameFull = myNameFirst + " " + myNameLast //returns one string "Ed Ellington"
//note that a space can be a string " ".

// 3. Boolean: true or false//
/*
* True or false values. Only two options. Used all the time in JavaScript
* Used often when dealing with logic and how we write logic in JS
*/
let isAlive = true;// this makes isAlive variable true
let isDead = false;// this makes isDdead variable false

if(isAlive === true) {
    console.log("Yay!")
    // this will return "Yay!" because isAlice is true.
} else {
    return isDead//this would return false if isAlive was not true.
}

// 4. NaN: Not A Number //
/*
* Considered a numeric value that represents something that is not a number.
* Lets you know when what you are trying to get is not a number.
*/

0/0 //returns NaN because that is not a real number
1 + NaN //returns NaN because something that is not a number plus a number is NaN

// 5. Undefined //
/*
* primative type
* A variable in global scope
* A non writable property
* A variable that has not been assigned 
*/

let randomVariable;
console.log(randomVariable)//will return undefined because randomVariable has not been defined yet

// 6. null //
/*
* primitive type
* Intentionally assigned variable set to nothing
* Lets javaScript know there is a value but it is set to nothing
*/

let variableThatDoesNotMatterAnymore = null; 
//this variable has been set to null because it doesn't matter anymore or doesn't need to have a value

// 7. Objects //
/*
* Allows us to store data where we can group them together in a nice order with labels
* Objects are collections of properties
* Instead of getting to data using an index(arrays use this), objects use keys.
* Objects store information with a key that has a value
* Mutable = can be HUGE or small
*/

var awesomeObject = {
    name: "Edward",
    interest: "NASA",
    dog : "Ollie",
}
console.log(awesomeObject) 
//this will return { name: 'Edward', interest: 'NASA', dog: 'Ollie' }

// 8. Arrays //
/*
* Collections of values in a long order
* Best analogy I could find is that it is like a mon - sunday pill box that grandma uses
* Arrays use square values [] and hold the informaiton inside
* Arrays can have arrays within arrays 
* Arrays can store strings as well
* Arrays can hold pretty much everything (booleans, objects, more arrays, strings)
* Mutable = can be HUGE or small 
* Ararays are zero-indexed - the first element of an array is at index 0
*/
//                  0    1   2   3    4   5   6 = this is what zero-index looks like
var myTestScores = [98, 75, 93, 99, 100,103, 97];
var myFavFoods = ["Cheese", "Pasta", "Pho", "Sushi"];
var javaScriptIsCrazy = [56, true, "WOW", {this: "is crazt"}, ["Michael", 23]];
console.log(javaScriptIsCrazy)
// returns [ 56, true, 'WOW', { this: 'is crazt' }, [ 'Michael', 23 ] ];

// 9. Functions //
/*
* This is where JS really shines and essencial to being good JS developer
* Neither the length of a JavaScript array nor the types of its elements are fixed
* Reusable procedures that you can call again and refer back to
* Functions are Objects (first class citizens)
* Functions can be stored in variables makine JS very dynamic
* Can be passed through as arguments
* Fucntions need arguments to be passed through to opperate and give a result
*/

function add(x,y) {
    return x + y;
}

const sum = function(x,y) {
    return x + y;
}
//both of these functions return the same result. Just written differently 

// 10. Infinity and -Infinity //
/*
* Infinity is a numeric value that represents positive infinity.
* -Infinity is a numeric value that represents negative infinity
* Infinity is displayed when a number exceeds the upper limit of the floating
* point numbers.
* Vice versa for -Infinity.
*/

// 11. Primitive vs. Complext Pass By //
/*
* When you use = sign to define a variable that is primitive and set it to = a value, 
* it copies that value into whatever variable you chose. So it is still primative.
*/
let primObj = 6;//primObj now is defined to equal 6. A primative dataType
let stillPrimObj = primObj; //now stillPrimObj is equal to 6 and is still primative

/*
* When you set a variable = to an object you are just referencing that object
* So any other variable set to = that variable will be passed to = that object
* It does not change the object at all.
*/
var myPoodle = {
    breed: "Standard Poodle",
    size: "Sixty lbs",
    favToy: "Chuck'it Ball",
};

let myGirlsPoodle = myPoodle;
//if the object changes, then the values for both change
myPoodle.size = "60 lbs";

console.log(myGirlsPoodle);// this will return { breed: 'Standard Poodle', size: '60 lbs', favToy: "Chuck'it Ball" }
//this returns this way because the variables reference the same Object.