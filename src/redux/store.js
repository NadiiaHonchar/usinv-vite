import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistAuthReducer = persistReducer(persistConfig, authSlice.reducer);
export const increment = createAction("myValue/increment");
export const decrement = createAction("myValue/decrement");
const myReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
    user: persistAuthReducer,
  },
});

export const persistor = persistStore(store);
