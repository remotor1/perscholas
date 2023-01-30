/* eslint-disable*/
// Luhn Algorithm
const validCard = (setValue) => {
  let ch = 0;
  const num = String(setValue).replace(/\D/g, '');
  const isOdd = num.length % 2 !== 0;

  if ('' === num) return false;

  for (let i = 0; i < num.length; i++) {
    let n = parseInt(num[i], 10);

    ch += (isOdd | 0) === i % 2 && 9 < (n *= 2) ? n - 9 : n;
  }

  return 0 === ch % 10;
};

validCard(1234567890123456); // should be false
validCard(4408041234567893); // should be true
validCard(38520000023237); // should be true
validCard(4222222222222); // should be true

console.log(validCard(1234567890123456));
console.log(validCard(4408041234567893));
console.log(validCard(38520000023237));
console.log(validCard(4222222222222));
