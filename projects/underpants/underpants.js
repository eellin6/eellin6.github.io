// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//Identity function takes in any value and returns its value unchanged

_.identity = function(value){
    //return value unchanged
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// typeOf function takes any value and returns the type of value as a string

_.typeOf = function(value){
    if (typeof value === 'object'){ 
        //use conditional to see if value is === 'object'
        if (Array.isArray(value)){  
            //use another conditional to see if the array is actually an array and if it is, returning 'array'
        return "array";
        } else if (value === null) { 
            //checking to see if value === null; if it does, return 'null'
            return 'null';
        } else if (typeof value === "object"){ 
            return "object";
        }
    } else {
        return typeof value;  //else return typeof will give you the undefined and NaN
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// function _.first takes an array and a number and if array is not an array it returns [];
// if number is not given or not a number, the first element in the array will be returned;
// else if return the first number item of array
// edge case - something to look out for.

_.first = function(array, number) {
    //if array is not an array, return []
    if(Array.isArray(array) === false || number < 0){
        return [];
        // return [] if isn't array and number is less than 0
    }
    if(typeof number !== 'number' || number === null){
        return array[0];
        // if typeof is not 'number' or number === null return first element in array
    }
    return array.slice(0, number);
    //returning the array with the first element removed and replaced with number parameter
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

 

_.last = function(array,number){// Create function expression _.last with parameters array, number 
    if(Array.isArray(array) === false || number < 0){// If array is an array or number is negative,
        return [];//return array literal 
    }
     if (typeof number !== "number" || number === null){// If number is NaN or number is null
        return array[array.length - 1] ;//return the last item in the array. 
    }
    if(array.length <= number){// 
    return array; 
}
    return array.slice(number -1, array.length);
    //use slice to find last number in array and relplace with length 
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// takes an array or a value and returns the index of array that is the first occurance of value
// return -1 if value is not in array
// do not use [].indexOf()
// watch for multiple occurances of a value in the array
// what are we gonna do if the value isn't an array 

_.indexOf = function(array, value){
    if(array.includes(value)) {
        //first screen to see if the array has the value from parameter in it
        for(let i = 0; i < array.length; i++){
            if(array[i] === value){
                //if the value from the array === value from parameter then we are returning that value
                return i;
            }
        }
    } else {
        return -1;
        // or else we are returning -1
    }
    
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//_.contains function takes an array and a value and returns true if array contains value
// returns false otherwise
// must use ternary operator

_.contains = function(array,value){ 
    return array.includes(value) ? true : false;
    // return true if array includes value or false if it doesn't all on one line with ternary operator
    // ternary operator shows true if it includes the value(true/on the left) and false if it doesn't(flase/on the right)
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//_.each function takes a collection and a function as parameters
// if the collection is an array, call the function once for each element with the element, it's index, collection
// if collection is an object, call function once for each property with the arguments

_.each = function(collection, someFunction){
    if(Array.isArray(collection) === true){
        //true so then will start loop
        for(let i = 0; i < collection.length; i++){
            someFunction(collection[i],i, collection);
            //calling someFunction with parameters collection[i] = calling every element in array, then index, then collection
            }
        }
        else {
            for(let key in collection){
            someFunction(collection[key], key, collection);
            }//use for in loop to get inside object and then call the value of the key, the key, and
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//returns a new array of all elements from array with duplicates removed

_.unique = function(array) {
    let uniqueArray = [];
    // create new array to push the unique values into it
    for( let i = 0; i < array.length; i++){
        //for loop to go through array elements
        if(_.indexOf(uniqueArray, array[i]) === -1) {
            // using _.indeOf to find out if uniqArray has array[i] (array values) in it. If it doesn't it returns -1 (line 174) and thus pushes into new array
            uniqueArray.push(array[i]);
            // pushing unique numbers into new array 
        }
    }
    return uniqueArray;
    //returning the new uniqueArray
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// function passes an array and function to call function for each element in array. ex add(element, i, array)
// return new array of elements for which calling function returned true

    _.filter = function(array, sumfunction) {
    let filteredArray = [];
    //create array to push
    for (let i = 0; i < array.length; i++){
        if(sumfunction(array[i], i, array) === true){
            //going through array and having function act on elements in the array and finding out if they are true or not(just placeholders for now)
            filteredArray.push(array[i]);//pushing array[i] because that is the actual value that will be pushed through
        }
    }
    return filteredArray;
    //returning filtered array
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//Passing an array and a function and calling function for each element 

_.reject = function(array, func){
    return _.filter(array, function(elements, i , array){
        //using HOF filter to return the elements in an array that have falsy returns 
        return !(func(array[i],i,array));
        //NOT the filter function that === True
    });
};

// KEEPING OLD VERSION BC IT HELPS ME UNDERSTAND HOF
// _.reject = function(array,func){
//     const accept = _.filter(array,func);
//     // setting acceept = fulter function so it will be equal to the calling of the array and func
//     const reject = [];
//     // create constant variable,reject set to array literal to push array data into. 
//     for(let i = 0; i <= array.length -1; i++){
//         // Using for loop, to loop over array 
//         let add = true;
//         // creating a variable add, with boolean value true
//         for(let j = 0; j<=accept.length - 1; j++){
//             // for loop accessing function
//             if(array[i]===accept[j]){ 
//                 //if array data and function data strictly match 
//                 add = false;// set add to false 
//             }
//         }
//         if(add){
//             reject.push(array[i]);
//             // push data from array into reject array. 
//         }
//     }
//     return reject// return reject array 
// }




/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


// takes an array and a function and calls the funcation for each element in the aray passing element, key, <array>
// return array that is made up of 2 sub arrays
// one array that contains all the values for which the function returned something truthy and one falsy

// KEEPING OLD VERSION BC IT HELPS ME UNDERSTAND HOF
// _.partition = function(array, func){
//     const result = [[],[]];// set up empty array with 2 empty sub arrays
//     for(let i = 0; i < array.length; i++){
//         if(func(array[i], i , array) === true){
//             //use ternary function here to show true/false direction of code
//             result[0].push(array[i]);
//             //pushing it to the [0] sub-array
//         } else {
//             result[1].push(array[i]);
//             //pushing it to the [1] sub-array
//         }
//     }
//     return result;
// };

_.partition = function partition(array,action){
    return [_.filter(array,action),_.reject(array,action)];
    //uses filter and reject to make two sub arrays containing one filled with truthy values and the other with falsy values
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//takes a collection and a function and calss the function for each element in collection passing the arguments:
// if collection is an array it passes the element, its index, and collection
// if collection is an object it passes value, key, and collection 

_.map = function(collection, funky){
    let mapArray = [];
    if(typeof(collection) === 'object'){
        //don't forget typeof! checks to see if collection is an object or an array
        for(let key in collection){
            mapArray.push(funky(collection[key], key, collection));
            //pushing the new object values that have been acted on by the function into the new array using for in loop 
                
            }
        }else {
            for(let i = 0; i < collection.length; i++){
                mapArray.push(funky(collection[i], i , collection));
                //looping through the array if collection is array and pushing the acted on values into the mapArray
            }
        }
        return mapArray;
        //calling the new array
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrayObj, prop){
    let pluckArray = [];
    //creat new empty array for the "plucked" items to go into.
    _.map(arrayObj, function(elements, i , array){
        //use map to call the function for each element 
        pluckArray.push(arrayObj[i][prop]);
        //pushing the array and the new acted on values into the pluckArray
    });
    return pluckArray;
    //returning the newly formed array with the plucked values
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//takes a collection and a function and calls a function of the collection 


_.every = function(collection, sumFunc){
  if(typeof sumFunc !== "function"){ sumFunc = _.identity}
  // if sumFunc is not a function, then use identity to show what the value of sumFunc is
    if((Array.isArray(collection))){ 
        // checking to see if collection is an array
        for (let i = 0; i < collection.length; i++){ 
            // looping through collections if it is an array
            if((sumFunc(collection[i], i, collection)) === false){
                // checking if results of sumFunc are strictly equal to false 
                return false; 
                //returning false even one of them is false
        }
  
    }
    if((typeof collection) === 'object'){
        // checking if collection is an object
        for (var key in collection){ 
            // using for in loop to loop through object 
            if ((sumFunc(collection[key], key, collection) === false)){ 
                // checking if any of the objects return false after sumFunc acts on them
                return false;
                //returning false if even one result is false
            }
        }
    }
}
return true;
// if collection does not equal false even once and all results are true from either array or object, return true.
};







/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


_.some = function(collection,funky){
    if(typeof funky !== "function"){ funky = _.identity}
    //checks to see if funky is a function and if not returns its value using identity
    if((typeof collection) === 'object'){
        // checking if collection is an object
        for (var key in collection){ 
            // using for in loop to search through object 
            if ((funky(collection[key], key, collection) === true)){ 
                // checking if any of the objects return true after funky acts on them
                return true;
                //returning true even one of them is true
            }
        }
   } else if((Array.isArray(collection))){ 
        // checking to see if collection is an array
        for (let i = 0; i < collection.length; i++){ 
            // looping through collections if it is an array
            if((funky(collection[i], i, collection)) === true){
                // checking if results of funky are strictly equal to true 
                return true; 
                //returning true if even one result is true
            }
        }
    }
    return false;
    //returning false if funky value is falsy and if none of the objects or arrays return true
};




/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, action, seed) {
//loop through the array given
    for (let i = 0; i < array.length; i++) {
//if seed is undefined then use the first index in the array as the seed
        if (seed === undefined) {
            seed = array[0];
//then take that seed and call the function on it passing the result, the element, and the index
        } else {
            seed = action(seed, array[i], i)
        }
//omce the loop is finished return the seed
    } return seed;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(a,...more){
    // Create a function expression that could have multiple objects added 
    for(let i = 0; i<= more.length -1; i++){
        // Using for loop so the for in loop can search through all the possible objects 
        for(var key in more[i]){
            // using for in loop to access the keys inside all the possible objects 
            a[key] = more[i][key]; //assigning all the values to one another 
        }
    }
    return a;// returning the new object that has all the keys and values in its one object now
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
