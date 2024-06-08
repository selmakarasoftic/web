import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
