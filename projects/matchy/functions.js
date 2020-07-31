/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
 for (let i = 0; i < array.length; i++) {
     if(array[i].name.toLowerCase() === string.toLowerCase()) {
      //loops through the array of annimals and finds out if their name is equal to string
      //use .toLowerCase for both array and string so finding them is case sensitive
     return array[i];
     //return the animal from array that matches the string
     }
 }
 for (let i = 0; i < array.length; i++) {
  if(array[i].name.toLowerCase() !== string.toLowerCase()) {
   // if the string sent through does not equal the string the computer will just return null
   //uses its own for loop
   return null;
  }
 }
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace (array, string, replace) {
 for (let i = 0; i < array.length; i++) {
  if(array[i].name.toLowerCase() === string.toLowerCase()) {
   return array.splice(i, 1, replace);
   //only need to use i because that is the index to were the object is
   //the middle is 1 because 1 item is being removed
   //replace is object that is going to go in and replace
  }
 }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove (array, string) {
 for (let i = 0; i < array.length; i++) {
  //looping through array
  if(array[i].name.toLowerCase() === string.toLowerCase()) {
   //making sure it is case insensitive and that the name === the string passed through
   return array.splice(i, 1);
   //removing the name that matches with splice index[i] and removing 1
}
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 //check that the animal object has a name property with length > 0
 //checks that the animal object has a species property length> 0
 // has a unique name, no other animals have that name
 //adds this new object to the animals array
function add (animals, animal) {
    for(let i = 0; i < animals.length; i++) { //create loop to iterate array
         if(animals[i].name.toLowerCase() === animal.name.toLowerCase())  { 
            return null; //graceful exit.  no addition
        } else if (animal.name.length > 0 && animal.species.length > 0) {
        animals.push(animal); //
    }
  }
}



// add(animals, animal);
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
