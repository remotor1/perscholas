/* eslint-disable */

// --------------- Easy Going --------------- //

/*
Write a for loop that will log the numbers 1 through 20.
*/

let increment = 1;
while (increment <= 20) {
  console.log(increment);
  increment += 1;
}

// --------------- Get Even --------------- //

/*
Write a for loop that will log only the even numbers in 0 through 200.
Hint: Think about the increment expression.
*/

for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

for (let i = 0; i <= 200; i += 2) {
  if (i % 2 === 0) console.log(i);
}

// --------------- Fizz Buzz --------------- //

/*
This is a classic problem that you should get really comfortable solving.
If you've solved it before, try to make it more elegant and short.

Write a javascript application that logs all numbers from 1 - 100.
If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
*/

for (let i = 1; i <= 100; i += 1) {
  i % 3 === 0 && i % 5 === 0
    ? console.log("FizzBuzz")
    : i % 3 === 0
    ? console.log("Fizz")
    : i % 3 === 0
    ? console.log("Buzz")
    : console.log(i);
}

// --------------- Wild Wild Life --------------- //

/*
Use the following arrays to answer the questions below (name,species ,age, hometown): 
You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
Plantee just had her birthday; change Plantee's array to reflect her being a year older.
Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
Give D'Art a second hometown by adding "Hawkins"
Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
*/

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = plantee[2] + 1;
wolfy[wolfy.length - 1] = "Gotham City";
dart.push("Hawkins");
wolfy.shift();
wolfy.unshift("Gameboy");

// --------------- Yell at the Ninja Turtles --------------- //
/*
Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
Use a for of loop(not a typo - try it out! Try a for of loop) to call toUpperCase()on each of them and print out the result.
As a developer, you'll be a life long learner and constantly encountering new things.
We'll give you little stretches like this to get you used to looking at documentation
and figuring some things out on your own. You've got this!
*/

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// .1
for (const name of ninjaTurtles) {
  console.log(name.toUpperCase());
}
// .2
ninjaTurtles.forEach((name) => {
  console.log(name.toUpperCase());
});
// .3
console.log(...ninjaTurtles.map((name) => name.toUpperCase()));

// ---------------  Methods, Revisited --------------- //
/* 
Here is a list of favMovies:

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 
'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 
'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
Console log: the index of Titanic
Do the following and console.log the final results (I have included some thought questions, 
  you don't have to write out an answer for those marked as such):
Note: if you have to add to the array, feel free to add any movie you'd like

use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
Use the method pop
push"Guardians of the Galaxy"
Reverse the array
Use the shiftmethod
unshift- what does it return?
splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", 
instead of counting it yourself) Thought question: did this permanently alter our array?
slicethe last half of the array (challenge yourself and try to programatically determine 
  the middle of the array rather than counting it and hard coding it) - Thought question: 
  did this permanently alter our array?
store the value of your slicein a variable, console.log it - Thought question: what is going on here?
console.log your final results
After running the above tasks, console.log the index of "Fast and Furious" -We removed it 
from the array, what value do we get when we look for the index of something that is not in the array?
Thought question: that we declared the variable favMovieswith const, and yet, we were allowed
 to change the array. Weird? Should we have used let?
 */

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

console.log(
  favMovies.findIndex((element, index, array) => {
    return element === "Titanic";
  })
);

// use the .sortme thod Thought question: what did this do to the array? Did it permanently alter it?
console.log("before .sort()", favMovies);
favMovies.sort();
console.log("after .sort()", favMovies);

// Use the method pop
console.log("pop() element - ", favMovies.pop());
console.log("after .pop() - ", favMovies);

// push "Guardians of the Galaxy"
console.log(
  "push Guardians of the Galaxy / method return element index - ",
  favMovies.push('Guardians of the Galaxy"')
);
console.log(favMovies);

// Reverse the array
console.log("from revers method - ", favMovies.reverse());
console.log("after .reverse()", favMovies);

// Use the shiftmethod
console.log("shift method return - ", favMovies.shift());
console.log("after .shift()", favMovies);

// unshift- what does it return?
console.log("unshift method return - ", favMovies.unshift("Red")); // elements quantity
console.log("after .unshift()", favMovies);

// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained",
// instead of counting it yourself) Thought question: did this permanently alter our array?

favMovies.splice(
  favMovies.findIndex(
    (element, index, array) => element === "Django Unchained"
  ),
  1,
  "Avatar"
);
console.log("after .splice()", favMovies);

// slice the last half of the array (challenge yourself and try to programatically ***
// determine the middle of the array rather than counting it and hard coding it)
// - Thought question: did this permanently alter our array?

favMovies.splice(
  Math.trunc(favMovies.length / 2),
  Math.trunc(favMovies.length / 2) + 1
);

// console.log your final results
console.log(favMovies);

//After running the above tasks, console.log the index of "Fast and Furious"
// -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

console.log(
  favMovies.findIndex((element, index, array) => element === "Fast and Furious")
);

//Thought question: that we declared the variable favMovieswith const,
// and yet, we were allowed to change the array. Weird? Should we have used let?

// No, we good

// ---------------  Where is Waldo --------------- //
/*
With the following multi-dimensional array
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
Remove Eggbert (hint look at the slice/splice method(s))
Change "Neff" to "No One"
Access and console.log "Waldo"
 */

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
console.log(whereIsWaldo);
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);
whereIsWaldo[1].splice(2, 1);
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

// --------------- Excited Kitten ----------------//
/* 
Excited Kitten
Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
For every even number in your loop,
 log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
*/

const talkingPoints = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

for (let i = 1; i <= 20; i += 1) {
  console.log(talkingPoints[Math.floor(Math.random() * 3)]);
}

// ------------------ Find the Median ------------------ //
/* 
Find the median number in the following numsarray, then console.log that number.
hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
Expected output:
=> 15
*/

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

const medianNumber = (arr) => {
  elementsSumm = 0;
  arr.forEach((number) => {
    elementsSumm += number;
  });
  return Math.floor(elementsSumm / 2);
};

console.log(medianNumber(nums));

// --------------- Hungry for More? --------------- //
/*
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
 Use this data to answer the following questions.
*/

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

/*
Alien Attire
Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe 
from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
*/

let kristynsShoe = kristynsCloset[0];
kristynsCloset.splice(0, 1);
thomsCloset[2].push(kristynsShoe);
thomsCloset[2].splice(1, 0, kristynsShoe);

console.log(
  `Kristyn's outfit: ${kristynsCloset[1]} ${kristynsCloset[3]} ${kristynsCloset[6]}`
);

console.log(
  `Thom's outfit: ${thomsCloset[0][1]} ${thomsCloset[1][2]} ${thomsCloset[2][1]}`
);

// console.log(thomsCloset);
