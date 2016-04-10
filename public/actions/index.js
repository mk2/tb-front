import * as ActionTypes from "../constants/actionTypes";

export function searchArticles(query) {
  return { type: ActionTypes.SEARCH_ARTICLES, query };
}

export function showArticle(id) {
  return { type: ActionTypes.SHOW_ARTICLE, id };
}

export function updateArticle(id, article) {
  return { type: ActionTypes.UPDATE_ARTICLE, article };
}
