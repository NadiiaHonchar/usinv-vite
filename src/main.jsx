import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./components/context/auth/Provider.jsx";
import "./index.css";
import { theme } from "./components/styles/theme.js";
import { ThemeProvider } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
