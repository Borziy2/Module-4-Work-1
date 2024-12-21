
import articlesData from "./articles.json" with  { type: "json" }; 

export function getArticles() { 
  return articlesData.articles; 
}

export function getArticlesid(id) { 
  return articlesData.articles.find(article => article.id === id); 
}
