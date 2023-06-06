import { APIfetchArticles } from "../../services/news-api";
import * as newsActions from "./newsActions";
export const fetchNews = () => async (dispatch) => {
  dispatch(newsActions.fetchNewsRequest());
  try {
    const news = await APIfetchArticles();
    dispatch(newsActions.fetchNewsSuccess(news));
  } catch (error) {
    dispatch(newsActions.fetchNewsError(error));
  }
};
