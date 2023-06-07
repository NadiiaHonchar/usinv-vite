import { useEffect, useState } from "react";
import NewsSearchForm from "../NewsSearchForm/NewsSearchForm";
import { useLogOutRedirect } from "../../../hooks/useLogOutRedirect";
// import { APIfetchArticles } from "../../../services/news-api";
import * as newsOperations from "../../../redux/news/newsOperations";
import { useDispatch, useSelector } from "react-redux";

export default function NewsGeneral() {
  useLogOutRedirect();
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articles = useSelector((state) => state.news.entities);
  const isLoading = useSelector((state) => state.news.isLoading);
  const error = useSelector((state) => state.news.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) {
      return;
    }
    // without Acync Thunk
    // dispatch(newsOperations.fetchNews(query, currentPage));
    dispatch(newsOperations.fetchNews({ query, currentPage }));
  }, [currentPage, query, dispatch]);

  const onChangeQuery = (query) => {
    setQuery(query);
    setCurrentPage(1);
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
