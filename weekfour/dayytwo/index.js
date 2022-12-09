/* eslint-disable */
// Section 1
// JavaScript Total Recall

// I. Variables & Datatypes
// To answer these questions, you can add them in a multiline comment section inside of script.js

// like this:

// /*
// 1. How do we assign a value to a variable? A. With the assignment operator
// 2. How do we change the value of a...
// ...
// */

// A. Q + A
// How do we assign a value to a variable?              let const var
// How do we change the value of a variable?           variable = property += -= ++ --
// How do we assign an existing variable to a new variable?             variable = variable
// Remind me, what are declare, assign, and define?             const name; - declare / const name = value - define / name = value - assign
// What is pseudocoding and why should you do it?           Pseudocode literally means ‘fake code’. It is an informal and contrived way of writing programs in which you represent the sequence of actions and instructions (aka algorithms) in a form that humans can easily understand.
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?               60/ 10% typing
//

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

let firstVariable;
firstvariable = "Hello World";
firstVariable = 10;
let secondVariable = firstVariable;
secondVariable = "r2d2";
// What is the value of firstVariable? - 10
let yourNameand = "Igor";
console.log(`Hello, my name is ${yourNameand}`);

//C. Booleans
//Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== "48");

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

let animal = "cow";
console.log(animal === "cow" ? "mooooo" : "Hey! You're not a cow.");
animal = "humster";
console.log(animal === "cow" ? "mooooo" : "Hey! You're not a cow.");

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let personAge = 15;
console.log(
  personAge >= 16 ? "Here are the keys!" : "Sorry, you're too young."
);

// II. Loops
// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i = 0; i <= 10; i += 1) {
  console.log(i);
}
for (let i = 10; i <= 400; i += 1) {
  console.log(i);
}
for (let i = 12; i <= 400; i += 3) {
  console.log(i);
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i = 0; i <= 100; i += 1) {
  if (i % 2 === 0) {
    console.log(`${i}<-- is an even number`);
  }
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:

// I found a 5. High five!
// I found a 10. High five!

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:
//For numbers divisible by both three and five, be sure your code prints both messages

for (let i = 0; i <= 100; i += 1) {
  if (i % 5 === 0) {
    console.log(`"I found a ${i}. High five!"`);
  }
  if (i % 3 === 0) {
    console.log(`"I found a ${i}. Three is a crowd"`);
  }
}

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

let bank_account = 0;
for (let i = 1; i <= 10; i += 1) {
  bank_account += i;
}
console.log("bank_account = ", bank_account);

bank_account = 0;
for (let i = 1; i <= 100; i += 1) {
  bank_account += i * 2;
}
console.log("bank_account = ", bank_account);

// III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called?          Each item stored in an array is called an array element, and each has a unique number (index) by which we can refer to it.
// Do Arrays guarantee those things will be in order?        index - yes and value not
// What real-life thing could you model with an array?          mailbox

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

const quotes = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aut libero, ex dignissimos eius doloribus, rem amet possimus reiciendis ducimus dolores illo a debitis? Expedita autem assumenda ",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aut libero, ex dignissimos eius doloribus, rem amet possimus reiciendis ducimus dolores illo a debitis? Expedita autem assumenda ",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aut libero, ex dignissimos eius doloribus, rem amet possimus reiciendis ducimus dolores illo a debitis? Expedita autem assumenda ",
];

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
console.log(randomThings[0]);

// Change the value of "Hello" to "World"
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
console.log("the 3rd element of the array", ourClass[3 - 1]);

// Change the value of "Github" to "Octocat"
ourClass[ourClass.length - 1] = "Octocat";
console.log(ourClass);
// Add a new element, "Cloud City" to the array

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20];

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
console.log(myArray);

// Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
console.log("Did the .reverse()method return anything? ->", myArray.reverse());
console.log(myArray);

// F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

let integer = 10;
console.log(integer < 100 ? "little number" : "big number");

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

let monkey = 3;
console.log(
  `monkey = ${monkey} - `,
  monkey < 5 ? "little number" : monkey > 10 ? "big number" : "monkey"
);
monkey = 8;
console.log(
  `monkey = ${monkey} - `,
  monkey < 5 ? "little number" : monkey > 10 ? "big number" : "monkey"
);
monkey = 111;
console.log(
  `monkey = ${monkey} - `,
  monkey < 5 ? "little number" : monkey > 10 ? "big number" : "monkey"
);

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];
console.log(kristynsCloset);
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat");
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log("homsCloset - ", thomsCloset);
console.log("Thom's shirts array.", thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.
console.log("Thom's pants array.", thomsCloset[1][1]);

// Access one item from Thom's accessories array.
console.log("t Thom's accessories array.", thomsCloset[2][2]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  `Thom is looking ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}`
);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = " Footie Pajamas";
console.log(thomsCloset);

// IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
const printGreeting = (name) => `Hello there, ${name}!`;
console.log(printGreeting("Igor"));

// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

const printCoolthat = (name) => `${name} is cool`;
console.log(printCoolthat("Captain Reynolds"));

// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

// console.log(calculateCube(5));
// => 125

const calculateCube = (number) => number * number;
console.log(calculateCube(33));

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// console.log(isVowel("a"));
// => true

const isVowelthat = (character) => {
  const vowelList = ["a", "e", "i", "o", "u"];
  if (vowelList.includes(character.toLowerCase())) {
    return true;
  }
  return false;
};

//'a', 'e', 'i', 'o' and 'u'
console.log(isVowelthat("e"));
console.log(isVowelthat("A"));
console.log(isVowelthat("b"));

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

const getTwoLengths = (string1, string2) => [string1.length, string2.length];
console.log(getTwoLengths("Igor", "Savin"));

// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

// const maxOfThreethat = (arg1, arg2, arg3) => {
//   if (arg1 > arg2 && arg1 > arg3) {
//     return arg1;
//   } else if (arg2 > arg1 && arg2 > arg3) {
//     return arg2;
//   } else {
//     return arg3;
//   }
// };
// console.log(maxOfThreethat(3, 44, 444));
// console.log(maxOfThreethat(2, 34, 12));
// console.log(maxOfThreethat(122, 22, 1));

const maxOfThreethat = (arg1, arg2, arg3) =>
  arg1 > arg2 && arg1 > arg3 ? arg1 : arg2 > arg1 && arg2 > arg3 ? arg2 : arg3;

console.log(maxOfThreethat(3, 44, 444));
console.log(maxOfThreethat(2, 34, 12));
console.log(maxOfThreethat(122, 22, 1));

// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

const printLongestWord = (strings) => {
  let result = "";
  strings.forEach((element) => {
    if (element.length > result.length) result = element;
  });
  return result;
};

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
const user = { name: "igor", email: "rerer@gmail.com", age: 33, purchased: [] };
console.log(user);

// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user.email = "sdfsdgg@mail.ru";
console.log(user);

// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++;
console.log(user);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "NYC";
console.log(user);

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(...user.purchased);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friend with a name and age, we could write:

// user.friend = {
//   name: "Grace Hopper",
//   age: 85,
// };

// When we console.log user, we would see the friend object added to our user object.

// Write a friend object into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "LA",
  purchased: [],
};

// Console.log just the friend's name
console.log(user.friend.name);

// Console.log just the friend's location
console.log(user.friend.location);

// CHANGE the friend's age to 55
console.log((user.friend.age = 55));
console.log(user.friend.age);

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring");

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte");

// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[user.friend.purchased.length - 1]);

// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
console.log(...user.purchased);

//or

for (let i = 0; i < user.purchased.length; i += 1) {
  console.log(user.purchased[i]);
}

// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
console.log(...user.friend.purchased);

//or

for (let i = 0; i < user.friend.purchased.length; i += 1) {
  console.log(user.friend.purchased[i]);
}

// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
const updateUser = () => {
  user.age += 1;
  user.name = user.name.toUpperCase();
};
// console.log(user);
// updateUser();
// console.log(user);

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

const oldAndLoud = (person) => {
  person.age += 1;
  person.name = user.name.toUpperCase();
};

console.log(user);
updateUser(user);
console.log(user);

// Requirements Complete! Hungry for More?

// Cat Combinator

// 1. Mama cat
// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

const cat1 = {
  name: "Pet",
  breed: "siam",
  age: 4,
};
console.log(cat1.age, cat1.breed);

// 2. Papa cat
// Define an object called cat2 that also contains the properties:

// name
// breed
// age (a number)
const cat2 = {
  name: "Natan",
  breed: "Pers",
  age: 6,
};

//   3. Combine Cats!
// The cats are multiplying!

// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Make it so the combine Catsfunction will return a combination of the two incoming cats
// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in betwee
const combineCats = (mama, papa) => {
  return {
    name: `${mama.name}${papa.name}`,
    breed: `${mama.breed}-${papa.breed}`,
    age: 1,
  };
};

// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
console.log(combineCats(cat1, cat2));

// 4. Cat brain bender
// If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

// catCombinatorcan use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like:

console.log(
  combineCats(
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
  )
);
