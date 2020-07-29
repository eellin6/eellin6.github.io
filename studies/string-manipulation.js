/**
 * String Manipulations:
 *
 * 0. There are operators and many methods built into JavaScriot that are very useful for manipulating and working
 *    with strings.
 * 1. Utalizing these operators and methods allow you to search through strings with the help of loops, as well as add/subtract and 
 *    change strings in ways that can be very useful
 */
 
 // 1. String Manipulation with Operators //
 /*
 * Strings are zero-indexed like arrays
 * Strings can be added together
 * Strings can use += to add string to other string
 */
 //adding strings
 let go = "Geaux";
 let tigers = "Tigers!"
 let chant = go + " " + tigers;
 console.log(chant); // will return "Geaux Tigers"
 
 // += example
 let worry = "I hope this test works and I get a ";
 let badScore = 65;
 let goodScore = 100;
 let passAttempt = worry + goodScore;
 passAttempt += " and not a " + badScore;//using += to add to the back of the string
 console.log(passAttempt);// will return "I hope this test works and I get a 100 and not a 65"
 
 // 2. String Methods //
 /*
 *
 * Strings come with built in methods that are actions that can be performed on or with that string
 * All follow the same method of thing.method()
 */
 
  // concat()	Joins two or more strings, and returns a new string.
  let string = "Hello";
  let stringTwo = "World";
  console.log(string.concat(" ", stringTwo))// returns "Hello World" - Note that the first arg being added is " "(a space) and the second is the string
  
  // includes()	Checks whether a string contains the specified substring
  // Returns true if the string contains the characters and false if not
  let stringEx = "Today is the greatest day I've ever known";
  if (stringEx.includes("greatest")) {
   console.log(stringEx += " Can't wait for tomorrow")
  }// returns "Today is the greatest day I've ever known Con't wait for tomorrow"
  
  // replace()	Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
  // let coolShoes = "Man... these reebox are incredible!";
  // let actualCoolShoes = coolshoes.replace("reebox", "kobe's");
  // console.log(ActualcoolShoes);// returns "Man... these kobe's are incredible!"
  
  //  search()	Searches a string against a regular expression, and returns the index of the first match.
  let jamba = "Jamba Juice";
  let whereIsTheJuice = jamba.search("Juice");
  console.log(whereIsTheJuice);// returns 6 bc that is where the Juice starts in the string
  /*
  * Note: dont forget that strings, like arrays are zero-indexed
  */
  
  // slice()	pulls out a portion of a string and returns it as a new string.
  // The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
  // Note: The original array will NOT be changed
  let dogs = ["poodle", "goldens", "labs", "bulldogs"]
  let myDog = dogs.slice(0,1);
  // array.slice(from,to) is conceptually how the slice() works.
  console.log(myDog);// returns ["poodle"]
  let kindaCoolDogs = dogs.slice(1,3);
  console.log(kindaCoolDogs);// returns ["goldens", "labs"]
  //Note: for this example slice() returns what is between the first argument(1) and then the value before the last argument(3)
  
  // split()	Splits a string into an array of substrings.
  /* 
  *  This method splits up the string into individual items in an array
  *  They can be individual letters, idividual words, or full sentence items in an array.
  */
  
  let masterFlash = "And these are the breaks";
  let breakItUp = masterFlash.split(" ");
  console.log(breakItUp);// returns [ 'And', 'these', 'are', 'the', 'breaks' ]
  
  let coldPlay = "It was all Yellow";
  let hotPlay = coldPlay.split()
  console.log(hotPlay);// returns [ 'It was all Yellow' ] a one expression array
  
  let dramaGuy = "I'm falling to pieces!"
  let heMeantIt = dramaGuy.split("");
  console.log(heMeantIt);
  /* 
  *returns [
  *'I', "'", 'm', ' ', 'f',
  *'a', 'l', 'l', 'i', 'n',
  *'g', ' ', 't', 'o', ' ',
  *'p', 'i', 'e', 'c', 'e',
  *'s', '!'
]
  */
  
//  startsWith()	Checks whether a string begins with a specified substring.
// Returns true if what is searched for in the string starts with that value

let allAboutMe = "Me, Myself, and I";
let itBeginsWithMe = allAboutMe.startsWith("Me");
console.log(itBeginsWithMe);//returns true

// toLowerCase()	Converts a string to lowercase letters
// toUpperCase()	Converts a string to uppercase letters

// .length //
// Tells you how long the string is
let stringLength = "How long is this?";
console.log(stringLength.length);
//Note: it counts EVERYTHING normal... not Zero - indexed