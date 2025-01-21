import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Indigo
    },
    secondary: {
      main: "#ff9800", // Orange
    },
    error: {
      main: "#f44336", // Red
    },
    background: {
      default: "#f4f6f8", // Light gray
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h3: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
