//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
return Object.keys(object).join(" ");//
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
  let myArray = []
  let valuesArray = [];
  valuesArray = Object.values(object);// turns the key values into strings
  for (let i = 0; i < valuesArray.length; i++){
    if(typeof valuesArray[i] === 'string') {//use typeof to figure out what values are strings
      myArray.push(valuesArray[i]); 
    }
  }
  return myArray.join(" ");// must let the for loop run and then return the array AFTER
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
  //Use typeof to find out if argument is array or object and return its respected property
  if(Array.isArray(collection)) {
    return 'array';
  } else if (typeof collection === 'object') {
    return 'object';
  }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  let newArray = string.split(" ");// splits the string up into individual words in an array
  for(let i = 0; i < newArray.length; i++){//looping through the array 
    newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);//setting newArray[i] = the strings now capitalized
  }
  return newArray.join(' ');// joining them back to a capitalized string
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  return 'Welcome ' + object.name.charAt(0).toUpperCase() + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
return object.name.charAt(0).toUpperCase() + object.name.slice(1) + ' is a ' + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if (object.noises === undefined || object.noises.length === 0) {
  //the object.length is crucial to see if array has any value
  return "there are no noises";
} else {
  return object.noises.join(" ");// joining the array into a string
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// if string has the word in it say tru otherwise 
if (string.includes(word)){
  return true;
} else {
  return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  
function addFriend (name, object) {
  object.friends.push(name);
  return object;
}


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  if(Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
    for(let i = 0; i < object.friends.length; i++) {
      if(name === object.friends[i]) {
        return true;
      }
    }
  }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, arrayOfPeople) {
//name is the name of the persob
// aray is the list of objects with each person and their friends inside an array
// empty array for non friends
let nonFriends = [];//array that you are suppose to return
// looping through arrayOfPeople objects to find the current person in the array
for (let i = 0; i < arrayOfPeople.length; i++) {
  // if(name === arrayOfPeople[i].name){
  //   // when person is found set it currentObj so we can then look into his/her arrayy
  //   let current = arrayOfPeople[i];
  // }
  
if (!(arrayOfPeople[i]['name'] === name) && !arrayOfPeople[i]['friends'].includes(name)){
    nonFriends.push(arrayOfPeople[i]['name']);
  }
}

// finally return all the people who aren't friends
return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for(let i = 0; i < array.length; i++) {
  //looping through array
  for(let key in object) {
    // looping through the OBJECT
    if(key === array[i]){
      delete object[key];
     
    }
  }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
let uniqueChars = [...new Set(array)];
return uniqueChars;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}