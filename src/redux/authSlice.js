import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authSlice = createSlice({
  name: "user",
  initialState: {
    login: "",
    password: "",
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload.login;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = "";
      state.password = "";
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

const persistConfig = {
  key: "auth",
  storage,
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

export const getLogin = (state) => state.user;
