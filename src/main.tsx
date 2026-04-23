import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#eaf7ff",
      paper: "#ffffff"
    },
    primary: { main: "#0ea5e9" }
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: ["Roboto", "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"].join(",")
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(234, 247, 255, 0.86)",
          borderBottom: "1px solid rgba(2, 132, 199, 0.20)",
          backdropFilter: "blur(10px)"
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);