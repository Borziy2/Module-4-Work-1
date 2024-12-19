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

let articles = [
  {
    title: "почему я выбрал JavaScript",
    text: "В этой статье я хочу расказать почему програмирую",
    link: "javascript.html",
  },
  {
    title: "Технологии,которые я применяю",
    text: "В этой статье я хочу расказаваю про свои технологии",
    link: "technology.html",
  },
  {
    title: "GIT",
    text: "В этой статье я раскажу почуму я использую GIT",
    link: "git.html",
  },
];

let articleElements = articles.map((article) => {
  let articleEl = document.createElement("article");
  articleEl.classList.add("section-element");
  let titleEl = document.createElement("h3");
  titleEl.innerText = article.title;
  articleEl.appendChild(titleEl);

  let textEl = document.createElement("p");
  textEl.innerText = article.text;
  articleEl.appendChild(textEl);

  let linkEl = document.createElement("a");
  linkEl.innerText = article.link;
  linkEl.href = article.link;
  linkEl.innerText = "Читать";
  articleEl.appendChild(linkEl);
  return articleEl;
});
articlesBlock.append(...articleElements);
