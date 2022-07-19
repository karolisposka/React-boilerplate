import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./fonts.css";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);
