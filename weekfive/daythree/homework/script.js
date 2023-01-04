/* eslint-disable */
let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  let mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "DOM Toretto";

  // Part 2
  let body = document.querySelector("body");
  body.setAttribute("style", "background-color: light-gray");

  // Part 3
  let lastElementChild = document.querySelector("#favorite-things");
  lastElementChild.lastElementChild.remove();

  // Part 4
  let specialTitles = document.querySelectorAll(".special-title");
  specialTitles.forEach((element) => {
    element.setAttribute("style", "font-size: 2em");
  });

  // Part 5
  let chicago = document.querySelector("#past-races").children[3];
  chicago.remove();

  // Part 6
  let newCity = document.createElement("li");
  newCity.textContent = "Novgorod";
  let pastRaces = document.querySelector("#past-races");
  pastRaces.append(newCity);

  // Part 7
  let newBlogPost = document.createElement("div");
  newBlogPost.classList.add("blog-post", "purple");

  let newBlogPostTittle = document.createElement("h1");
  newBlogPostTittle.textContent = "Novgorod";

  let newBlogPostText = document.createElement("p");
  newBlogPostText.textContent = "I DROVE MY CAR THROUGH AN AIRPLANE!";

  newBlogPost.append(newBlogPostTittle);
  newBlogPost.append(newBlogPostText);

  document.querySelector(".main").append(newBlogPost);

  // Part 8
  let quoteTitle = this.querySelector("#quote-title");
  quoteTitle.addEventListener("click", (e) => {
    e.preventDefault();
    randomQuote();
  });

  // Part 9
  let blogPost = document.querySelectorAll(".blog-post");
  blogPost.forEach((element) => {
    element.addEventListener("mouseout", (e) => {
      e.preventDefault();
      element.classList.toggle("purple");
    });
    element.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      element.classList.toggle("red");
    });
    console.log(element);
  });
});
