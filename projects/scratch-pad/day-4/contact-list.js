// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
}


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts =[];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        addContact: function(contact) {
            contacts.push(contact);
            //pushing the contact that is inputted into contacts array 
        },
        
        findContact: function(fullName) {
            for(var i = 0; i < contacts.length; i++) {
                //starting with a loop to search through array of objects
            if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) {
                // check to see if fullName is equal to the combination of nameFirst and nameLast
                return contacts[i];
                //if the above search does find the fullName === to the combo, returning the full object that has that name in it
            } else {
            return undefined;
            }
            
        }
        },
        
        removeContact: function(contact) {
            for(var i = 0; i <= contacts.length; i++) {
                //searches through the contacts array
                if(contacts[i] === contact) {
                    //if the loop finds the contact
                    return contacts.splice(i, 1);
                    //using .splice() to remove the contact. 
                    //i equals the contact you found that matches  
                    //1 is how many items you want to remove.
                }
            }
        },
        
        printAllContactNames: function() {
            let contactNames = '';
            //returning a string so we need a variable to collect the new strings
            for(var i = 0; i < contacts.length; i++) {
                //using a loop to go through contacts array
                contactNames += contacts[i].nameFirst + " " + contacts[i].nameLast + '\n';
                //setting the contactNames variable to += the all the values of all namefirst + " "(a space) + values of all nameLast
                //also adding a + '\n' so after the two values are added they go to the next line for the next group of strings to be placed
            }
            return contactNames.slice(0, contactNames.length - 1);
        }

}
}











// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
