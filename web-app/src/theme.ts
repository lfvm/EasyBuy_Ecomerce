import { createTheme } from "@mui/material/styles";

// Personalized material ui theme
export const theme = createTheme({
  palette: {
    primary: {
      main: "#1E1E1E",
    },
    info: {
      main: "#1B9DBA",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
  },
});
