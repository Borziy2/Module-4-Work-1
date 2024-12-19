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

export let articleElements = () => {
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
    articleEl.appendChild(linkEl);
    return articleEl;
  });
};
