import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

export const increment = createAction("myValue/increment");
export const decrement = createAction("myValue/decrement");
const myReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
    user: authSlice.reducer,
  },
});
