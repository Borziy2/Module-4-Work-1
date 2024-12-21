import { getArticlesid } from "./articlesService.js";

let articlesBlock2 = document.getElementsByClassName("section-articles")[0];

const params = new URLSearchParams(location.search);
const articleid = params.get("articleId");

const article = getArticlesid(Number(articleid));

if (article) {
    let titleElement = document.createElement("h2"); 
    titleElement.innerText = article.title;
    articlesBlock2.append(titleElement);

    let textElement = document.createElement("p");
    textElement.innerText = article.text;
    articlesBlock2.append(textElement);
}
