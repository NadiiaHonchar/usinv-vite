import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as newsActions from "./newsActions";

const entities = createReducer([], {
  [newsActions.fetchNewsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [newsActions.fetchNewsRequest]: () => true,
  [newsActions.fetchNewsError]: () => false,
  [newsActions.fetchNewsSuccess]: () => false,
});

const error = createReducer(null, {
  [newsActions.fetchNewsError]: (_, actions) => {
    actions.payload;
    console.log("actions", actions.payload);
  },
  [newsActions.fetchNewsRequest]: () => null,
});
export default combineReducers({
  entities,
  isLoading,
  error,
});
