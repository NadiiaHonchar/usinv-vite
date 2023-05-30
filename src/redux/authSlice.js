import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
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
