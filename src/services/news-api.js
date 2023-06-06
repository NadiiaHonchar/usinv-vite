import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer 09d57272085b447b8177e54ca0136b76";

export const APIfetchArticles = ({
  searchQuery = "",
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((response) => response.data.articles);
};
