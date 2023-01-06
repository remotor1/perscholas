/* eslint-disable */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "ovvr",
  "the",
  "lazy!!!!!!",
  "dog",
];

// Every
//Determine if every number is greater than or equal to 0

const isGreaterThan0 = (arr) => {
  return arr.every((element) => element >= 0);
};

console.log("isGreaterThan0", isGreaterThan0(nums));

// determine if every word shorter than 8 characters

const isEveryWordShorterThan8 = (arr) => {
  return arr.every((element) => element.length >= 8);
};

console.log("isEveryWordShorterThan8", isEveryWordShorterThan8(panagram));

// Filter
// filter the array for numbers less than 4

const filterTheArray = (arr) => {
  return arr.filter((element) => element < 4);
};
console.log("filterTheArray", filterTheArray(nums));

// filter words that have an even length

const filterWordsThatHaveAnEvenLength = (arr) => {
  return arr.filter((element) => element.length % 2 === 0);
};

console.log(
  "filterWordsThatHaveAnEvenLength",
  filterWordsThatHaveAnEvenLength(panagram)
);

// Find
// Find the first value divisible by 5

const FindTheFirstValueDivisibleBy5 = (arr) => {
  return arr.find((element) => element % 5 === 0);
};

console.log(
  "FindTheFirstValueDivisibleBy5",
  FindTheFirstValueDivisibleBy5(nums)
);

// find the first word that is longer than 5 characters

const findTheFirstWordThatIsLongerThan5Characters = (arr) => {
  return arr.find((element) => element.length > 5);
};

console.log(
  "findTheFirstWordThatIsLongerThan5Characters",
  findTheFirstWordThatIsLongerThan5Characters(panagram)
);

// Find Index
// find the index of the first number that is divisible by 3

const findTheIndexOfTheFirstNumberThatIsDivisibleBy3 = (arr) => {
  return arr.findIndex((element) => element % 3 === 0);
};

console.log(
  "findTheIndexOfTheFirstNumberThatIsDivisibleBy3",
  findTheIndexOfTheFirstNumberThatIsDivisibleBy3(nums)
);

// find the index of the first word that is less than 2 characters long

const findTheIndexOfTheFirstWordThatIsLessThan2CharactersLong = (arr) => {
  return arr.findIndex((element) => element.length < 2);
};

console.log(
  "findTheIndexOfTheFirstWordThatIsLessThan2CharactersLong",
  findTheIndexOfTheFirstWordThatIsLessThan2CharactersLong(panagram)
);

//forEach
// console.log each value of the nums array multiplied by 3

const multipliedBy3 = (arr) => {
  arr.forEach((element) => {
    console.log(element * 3);
  });
};

multipliedBy3(nums);

// console.log each word with an exclamation point at the end of it

const wordWithAnExclamation = (arr) => {
  arr.forEach((element) => {
    if (element[element.length - 1] === "!") {
      console.log(element);
    }
  });
};

wordWithAnExclamation(panagram);

// Thought Questions

// What happened to the original array? nothing
// Can you store the values from a forEach method in a new array? - yes

// make a new array of each number multiplied by 100

const multipliedBy100 = (arr) => {
  return arr.map((element) => element * 100);
};
console.log("multipliedBy100", multipliedBy100(nums));

// make a new array of all the words in all uppercase

const wordsInAllUppercase = (arr) => {
  return arr.map((element) => element.toUpperCase());
};
console.log("wordsInAllUppercase", wordsInAllUppercase(panagram));

// What happened to the original array? - nothing
// Can you store the values from a mapmethod in a new array? - yes

// Some
// Find out if some numbers are divisible by 7

const FindDivisibleBy7 = (arr) => {
  return arr.some((element) => element % 7 === 0);
};

console.log("FindDivisibleBy7", FindDivisibleBy7(nums));

// Find out if some words have the letter a in them

const haveLetterA = (arr) => {
  const newArr = arr.map((element) => {
    if (
      [...element].some((item) => {
        if (item.toUpperCase() === "A") {
          return true;
        }
      })
    ) {
      return true;
    }
  });
  return newArr.some((item) => item);
};

console.log("haveLetterA", haveLetterA(panagram));

// Hungry for More

// Reduce
// Add all the numbers in the array together using the reduce method

const numbersInTheArrayTogether = (arr) => {
  return arr.reduce((currentSum, currentNumber) => {
    return currentSum + currentNumber;
  }, 0);
};

console.log("numbersInTheArrayTogether", numbersInTheArrayTogether(nums));

// concatenate all the words using reduce

const concatenateAllWords = (arr) => {
  return arr.reduce((currentAll, currentWord) => {
    return currentAll + currentWord;
  }, "");
};

console.log("concatenateAllWords", concatenateAllWords(panagram));

// Thought Questions

// What happened to the original array? - nothing

// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?

console.log("nums.sort();", nums.sort());

// Try to sort without any arguments, do you get what you'd expect with the words array?

console.log("panagram.sort();", panagram.sort());

// Sort the numbers in ascending order

function compareNumbers(a, b) {
  return a - b;
}

console.log("nums.sort(compareNumbers)", nums.sort(compareNumbers));

// Sort the numbers in descending order
const compareFn = (a, b) => (a > b ? -1 : 0);

console.log("Sort the numbers in descending order ", nums.sort(compareFn));
