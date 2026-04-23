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
    fontFamily: ["Manrope", "Segoe UI", "Arial", "sans-serif"].join(","),
    h6: {
      fontFamily: ["Sora", "Manrope", "Segoe UI", "sans-serif"].join(","),
      fontWeight: 700,
      letterSpacing: "0.01em"
    },
    subtitle1: {
      fontWeight: 700,
      letterSpacing: "0.005em"
    },
    body2: {
      fontWeight: 500,
      lineHeight: 1.55
    },
    caption: {
      fontWeight: 600,
      color: "#334155"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          letterSpacing: "0.01em"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#0f172a"
        }
      }
    },
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