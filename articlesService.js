import articlesData from "./articles.json"  with { type: "json" };
export function getArticles (){ 
  return articlesData.articles;
}

