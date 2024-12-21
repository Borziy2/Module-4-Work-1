import { getArticles } from "./articlesService.js";

export let articleElements = () => {
  let articles = getArticles();
  return articles.map((article) => {
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
    linkEl.href = `article.html?articleId=${article.id}`;
    articleEl.appendChild(linkEl);
    return articleEl;
  });
};
