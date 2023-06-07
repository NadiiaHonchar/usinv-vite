import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIfetchArticles } from "../../services/news-api";
import * as newsActions from "./newsActions";
export const fetchNews = (query, currentPage) => async (dispatch) => {
  dispatch(newsActions.fetchNewsRequest());
  try {
    const news = await APIfetchArticles({ searchQuery: query, currentPage });
    // console.log(currentPage);
    dispatch(newsActions.fetchNewsSuccess(news));
  } catch (error) {
    dispatch(newsActions.fetchNewsError(error));
  }
};

// const fetchNews = createAsyncThunk("news/fetchNews");
