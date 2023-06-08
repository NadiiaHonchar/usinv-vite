import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import newsReducer from "./news/newsReducer";
import { pokemonApi } from "./pockemon/pockemon";

export const increment = createAction("myValue/increment");
export const decrement = createAction("myValue/decrement");
const myReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
    user: authReducer,
    news: newsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    pokemonApi.middleware,
  ],
});

export const persistor = persistStore(store);
