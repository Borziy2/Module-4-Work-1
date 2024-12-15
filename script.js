let headerLInk = document.getElementById("header-article");
let contactInfo = document.getElementById("linkToContact");
console.log(headerLInk);
console.log(contactInfo);

document.getElementById("header-article").innerText = "Все статьи (1)";

let contactBlock = document.getElementsByClassName("section contacs")[0];

let articlesBlock = document.getElementsByClassName("section articles")[0];

headerLInk.addEventListener("click", () => {
  articlesBlock.scrollIntoView({ behavior: "smooth" });
});

contactInfo.addEventListener("click", () => {
  contactBlock.scrollIntoView({ behavior: "smooth" });
});
