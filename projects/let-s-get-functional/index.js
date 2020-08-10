// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-eellin");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 * // make sure that you are inside the eellin6.github.io in the terminal 
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//must use the filter function to filter out the male customers
//output must be a number
return _.filter(array, function(customer){
    //return a condition that resolves to true or false based on the argument 
    // test if the customer obj has a gender prop of male
    return customer.gender === "male";
}).length

};

var femaleCount = function(array){
// //must use
return _.reduce(array, function (accumulator, customer, seed){
    return accumulator + (customer.gender === "female");
}, 0);
};


//find object with oldest age
//input: array of customer
// output: string of olderst customers name

var oldestCustomer = function(array) {
    return _.reduce(array, function(oldest, nextPerson) {
        //use reduce and conditional to return oldest customers name
        if (nextPerson.age > oldest.age) {
            //conditional decides if the next person.age is older, return the next person, else return oldest
            return nextPerson;
        }
            return oldest
    }).name
    //don't forget .name to give oldest customers name
};


var youngestCustomer = function(array){
    return _.reduce(array, function(youngest, nextPerson) {
        if (nextPerson.age > youngest.age) {
            //if the next persons age is older than the youngest persons age, return the youngest, else return the next person
            return youngest;
        }
            return nextPerson;
    }).name;
    //same logic as finding oldest customer
};


var averageBalance = function(arrayMaster, balance){
let balances = [];
  _.each(arrayMaster, function(element) {
    balances.push(parseFloat(element.balance.replace('$','').replace(',','')));
    //use parseFloat to make string into a number and then remove the $ and ,
    // console.log(balance)
});
let totalBalance = _.reduce(balances, function(total, nextNum) {
    return total + nextNum;
    //use reduce to add up the balances
});
return totalBalance / arrayMaster.length;
// divide total balance by arrayMaster.length to get average

};




var firstLetterCount = function(array, letter) {
    return _.reduce(array, function(letterCounter, nextName) {
        if(nextName.name[0].toLowerCase() === letter.toLowerCase()) {
            //use .name[o] to get the first index and set it toLowerCase to make it case insensitive
            letterCounter++;
        } return letterCounter;
    },0);
    //make sure the seed is set at 0 so it starts with the 0 index
};


var friendFirstLetterCount = function(array, customer, letter) {
//use filter to loop through the array and 
    let cust = _.filter(array, person => person.name === customer)[0];
    return firstLetterCount(cust.friends, letter);
};


var friendsCount = function(array, name) {
//create an empty array where our friends result goes
let friendsWith = []
//loop through the array of customers
for (let i = 0; i < array.length; i++) {
//   console.log(array[i].name)
//loop through each customers FRIENDS object
 for (let j = 0; j <array[i].friends.length; j++) {
//   console.log(array[i].friends[j])
//if the friends name for each friends index equals the name given
  if (array[i].friends[j].name === name) 
//push that name into the array given
    friendsWith.push(array[i].name);
  }
}return friendsWith
};




var topThreeTags = function(array){
let tagsArray = []
    for (let i = 0; i < array.length; i++) {
        tagsArray.push(array[i].tags)
}
let merge = ([].concat.apply([], tagsArray));
let tallyTags = merge.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) +1;
        return tally;
}, {}) 
var sortable = [];
for (var key in tallyTags){
    sortable.push([key, tallyTags[key]]);
};
sortable.sort(function(a, b) {
    return b[1] - a[1];
});
sortable = _.first(sortable,3)
    return _.map(sortable, tags => tags[0])
}




var genderCount = function(array) {
//use reduce to iterate through all of our genders, starting seed should be an empty object
    return _.reduce(array, (total, customer) => {
//for every customers gender found true
    if (total[customer.gender]){
//add a count to the gender found
        total[customer.gender]++;
    } else{
//if not set it to 1
      total[customer.gender] = 1
    }  
//return the total
    return total
  }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
