import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIfetchArticles } from "../../services/news-api";
// import * as newsActions from "./newsActions";

// Without AsyncThunk
// export const fetchNews = (query, currentPage) => async (dispatch) => {
//   dispatch(newsActions.fetchNewsRequest());
//   try {
//     const news = await APIfetchArticles({ searchQuery: query, currentPage });
//     dispatch(newsActions.fetchNewsSuccess(news));
//   } catch (error) {
//     dispatch(newsActions.fetchNewsError(error));
//   }
// };

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ query, currentPage }) => {
    const news = await APIfetchArticles({ searchQuery: query, currentPage });
    return news;
  }
);
