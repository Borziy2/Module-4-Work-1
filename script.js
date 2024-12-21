import { articleElements } from "./articles.js";

let headerLInk = document.getElementById("header-article");
let contactInfo = document.getElementById("link-to-contact");
console.log(headerLInk);
console.log(contactInfo);

document.getElementById("header-article").innerText = "Все статьи (3)";

let contactBlock = document.getElementsByClassName("section-contacs")[0];

let articlesBlock = document.getElementsByClassName("section-articles")[0];

headerLInk.addEventListener("click", () => {
  articlesBlock.scrollIntoView({ behavior: "smooth" });
});

contactInfo.addEventListener("click", () => {
  contactBlock.scrollIntoView({ behavior: "smooth" });
});

let articleElementsnew = articleElements();
articlesBlock.append(...articleElementsnew);
