import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { fetchNews } from "./newsOperations";
// import * as newsActions from "./newsActions";

// without AsyncThunk
// const entities = createReducer([], {
//   [newsActions.fetchNewsSuccess]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [newsActions.fetchNewsRequest]: () => true,
//   [newsActions.fetchNewsError]: () => false,
//   [newsActions.fetchNewsSuccess]: () => false,
// });

// const error = createReducer(null, {
//   [newsActions.fetchNewsError]: (_, actions) => {
//     actions.payload;
//     console.log("actions", actions.payload);
//   },
//   [newsActions.fetchNewsRequest]: () => null,
// });

const entities = createReducer([], {
  [fetchNews.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchNews.pending]: () => true,
  [fetchNews.rejected]: () => false,
  [fetchNews.fulfilled]: () => false,
});

const error = createReducer(null, {
  [fetchNews.rejected]: (_, actions) => {
    actions.payload;
  },
  [fetchNews.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
