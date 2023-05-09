import axios from "axios";
import { useEffect, useState } from "react";
import NewsSearchForm from "../NewsSearchForm/NewsSearchForm";

axios.defaults.headers.common["Authorization"] =
  "Bearer 09d57272085b447b8177e54ca0136b76";

const APIfetchArticles = ({
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

export default function NewsGeneral() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchArticles = () => {
      setIsLoading(true);

      APIfetchArticles({ searchQuery: query, currentPage })
        .then((responseArticles) => {
          setArticles((prevArticles) => [...prevArticles, ...responseArticles]);
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    };

    fetchArticles();
  }, [currentPage, query]);

  const onChangeQuery = (query) => {
    setQuery(query);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
  };

  const loadMore = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;
  return (
    <>
      {error && <h2>Warning! Error!</h2>}
      <NewsSearchForm onSubmit={onChangeQuery} />
      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferer">
              {title}
            </a>
          </li>
        ))}
      </ul>
      {shouldRenderLoadMoreButton && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
      {isLoading && <p>Loading...</p>}
    </>
  );
}
