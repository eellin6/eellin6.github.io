/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'dog';
animal['name'] = 'Ollie';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];//step 2:1
noises = ['woof'];
noises.push("bow-wow");
noises.unshift('scratch');
  function animalNoises(noise) {//create function to add as many animal noises as you want
    noises.push(noise);
}

animalNoises('bark');// function you can call and quickly add any new noises
console.log(noises.length);
console.log(noises[3]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;//dumping 
console.log(noises);
animal["noises"].push("GRRR");
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * .notation & bracket  => animals.noises; animals['noises'];
 * 
 * 2. What are the different ways of accessing elements on arrays?
 * dot notation => .push(); .unshift()
 * breacket notation => animal[noises] = noises;
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = []; //create animals empty array
animals.push(animal);// push animal object into empty array
var duck = {        //Step 6/4 creat duck animal
    species: 'duck',
    name: 'Quackers',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);// push duck into animals

var bear = {
    species: 'bear',
    name: 'Grizzy',
    noises: ['GRRR', 'ARRG']
};
animals.push(bear);// push bear into animals

var mouse = {
    species: 'mouse',
    name: 'Caroline',
    noises: ['squeek!', 'yummm']
};
animals.push(mouse);// push mouse into animals

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// chose this data structure because we are using arrays that have objects in them
var friends = [];
function getRandom(array) {
   let randomFriends = animals[Math.floor(Math.random() * animals.length)];
    //use math random that takes our animals array and returns a random index of the input array
    animal['friends'] = friends;
    return friends.push(randomFriends['name']);
    
}

getRandom();
//how to get to one of our animals?

 
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}