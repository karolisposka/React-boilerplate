import React from "react";
import Navigation from "../Navigation/Navigation";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
const links = ["register", "login"];
export default {
  title: "components/Navigation",
  component: Navigation,
};

export const Primary = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation links={links} />
    </ThemeProvider>
  );
};
