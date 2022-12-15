/* eslint-disable */
// Task 1.0
//Select and cache the <main>element in a variable named mainEl.

let mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

//mainEl.setAttribute("style", "background-color: var(--main-bg)");
mainEl.style.cssText = "background-color: var(--main-bg)";

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.

mainEl.innerHTML = `<h1>SEI Rocks!</h1>`;

// Task 1.3
// Add a class of flex-ctr to mainEl.

mainEl.classList.add("flex-ctr");

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.querySelector("#top-menu");

console.log(topMenuEl);
// Task 2.1
// Set the height topMenuElelement to be 100%.

topMenuEl.style.cssText = "height: 100%";

// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.

topMenuEl.style.cssText += "background-color: var(--top-menu-bg)";

// Task 2.3
// Add a class of flex-around to topMenuEl.

topMenuEl.classList.add("flex-around");

// Task 3.0
// Copy the following data structure to the top of script.js:

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Task 3.1
// Iterate over the entire menu Links array and for each "link" object:

// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.

menuLinks.forEach((item) => {
  console.log(item);
  const menuLink = document.createElement("a");
  const linkContent = document.createTextNode(`${item.text}`);
  menuLink.appendChild(linkContent); //!!!
  menuLink.setAttribute("href", `${item.href}`);
  topMenuEl.append(menuLink);
});
