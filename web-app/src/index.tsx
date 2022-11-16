import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AppProvider from "./context/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AppProvider>
    </React.StrictMode>
  </BrowserRouter>
);
