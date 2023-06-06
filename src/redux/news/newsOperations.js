import * as newsActions from "./newsActions";
export const fetchNews = () => async (dispatch) => {
  dispatch(newsActions.fetchNewsRequest());
};
