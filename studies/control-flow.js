/**
 * Control Flow:
 *
 * 0. Refers to the order of execution of your code. How the program should flow from one section to another.
 *    
 * 1. Conditional statements show pathways for the code to run.
 *
 * 2. The main examples for conditionals are if, else-if, else, and switch
 */
 
 // 1. If Statements //
 /*
 * Allows us to run certain code if the given condition is true
 * All eveluate to a boolean giving us true or false
 * If the condition is true, the code with run.
 */
 
 if (100 < 1000) {
     console.log("Yes this is true")
 };// returns "Yes this is true" because 100 is less than 1000
 
 // 2. if/else //
 // allows you to give an alternative route if your initial condition is !== true
 
 if (1 + 3 === 5) {
     console.log(true)
 } else {
     console.log("this is not right");
 }
 
 // 3. if/else if/ else //
 /*
 * If the first condition is not true, maybe this will be true
 * Only be attempted if the first if statement is false
 */
 
 if (5 + 5 === 10 && 5 + 20 === 45) {
     console.log("This is right")
 } else if (5 * 5 === 45 || 6 * 5 === 30) {
     console.log("one of these is right")
 } else {
     console.log("none of these work?")
 }// returns "one of these is right' because the second condition was true
 
 // Swtich Statements //
 /*
 * Better if you have many options to choose from than if statements
 * Must add break after each case/statement so it runs one at a time
 */
 
//  function whatBeer(val) {
//      var answer = "";
//      switch(val) {
//   case 1 :
//     return "Miller Light";
//     break;
//   case 2 : //structure is case + ""/number : 
//     return "Heini";//then return or console.log() the value
//     break;// MUST PUT THE BREAK
//   case 3 : 
//     return "Coors";
//     break;
//   case 4 : 
//     return "Space Dust";
//     break;
// }
//   return answer;
// }

// caseInSwitch(5);// easy access to each of these values => will return Space Dust
     
 
 