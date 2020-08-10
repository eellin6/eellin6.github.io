
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(input) {
  //set input as parameter because it will allow any number sent through to dictate the amount of "#"
let num = "";
//set num = to empty string so we can add "#" during loop
for (let i = 0; i < input; i++) {
  num += "#";
  // set num += to "#" so it will add a "#" after each loop
  console.log(num);
}
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(let num = 1; num <= 15; num++){
    //important to set num = 1 here or else loop doesn't perforom correctly
    if (num % 3 === 0 && num % 5 === 0){
      console.log("fizzbuzz");
    } else if (num % 3 === 0) {
      console.log("fizz");
    } else if (num % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(num);
      //need to console.log num else so it keeps moving though the loop
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
//create string that represents 8X8 grid 
//use newline characters to separate lines
// should make a board for any input number
//prob 
let board = "";
for(let i = 0; i < number; i++){
  //start first for loop that will start a new line after the inner code is run
  for(let j = 0; j < number; j++){
    //start second loop to show alternating from # to " " with clever ass use of % === 2
    if((j + i) % 2 === 0){
      //start board with string " " bc 1 + 1 = 2 which is % 2 === 0
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
  //this is where we start new line
}
console.log(board);
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
