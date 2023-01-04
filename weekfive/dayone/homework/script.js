/* eslint-disable */

let mainEl = document.querySelector("main");

mainEl.style.cssText = "background-color: var(--main-bg)";

mainEl.innerHTML = `<h1>SEI Rocks!</h1>`;

mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.cssText = "height: 100%";

topMenuEl.style.cssText += "background-color: var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach((item) => {
  console.log(item);
  const menuLink = document.createElement("a");
  const linkContent = document.createTextNode(`${item.text}`);
  menuLink.appendChild(linkContent); //!!!
  menuLink.setAttribute("href", `${item.href}`);
  topMenuEl.append(menuLink);
});

const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.cssText = "height: 100%";

subMenuEl.setAttribute("style", "background-color: var(--sub-menu-bg)");

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = 0;

const topMenuLinks = topMenuEl.querySelectorAll("a");

let showingSubMenu = false;

topMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target.localName !== "a") {
    console.log(
      "immediately return if the element clicked was not an <a> element."
    );
    return;
  }

  evt.target.classList.remove("active");

  showingSubMenu = false;
  subMenuEl.style.top = 0;

  topMenuLinks.forEach((item) => {
    item.classList.remove("active");
  });

  evt.target.classList.add("active");

  let subLinks = {};

  if (evt.target.textContent !== "about") {
    menuLinks.forEach((item) => {
      if (item.text === evt.target.textContent) {
        subLinks = item.subLinks;
      }
    });
    showingSubMenu = true;
  }

  // If showingSubMenu is true:
  if (showingSubMenu) {
    buildSubMenu(subLinks);
    subMenuEl.style.top = "100%";
  } else {
    showingSubMenu = false;
    subMenuEl.style.top = "0";
  }
  return;
});

function buildSubMenu(subLinks) {
  subMenuEl.textContent = "";
  subLinks.forEach((element) => {
    const menuSubLink = document.createElement("a");
    menuSubLink.setAttribute("href", `${element.href}`);
    menuSubLink.textContent = element.text;
    subMenuEl.append(menuSubLink);
  });
}

subMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.localName !== "a") {
    console.log(
      "immediately return if the element clicked was not an <a> element."
    );
    return;
  }
  showingSubMenu = false;
  subMenuEl.style.top = 0;

  topMenuLinks.forEach((element) => {
    element.classList.remove("active");
  });
  mainEl.querySelector("h1").textContent = evt.target.textContent;
});
