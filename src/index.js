import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "normalize.css";
import { UserProvider } from "./context/user.context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
