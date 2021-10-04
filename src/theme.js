import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import "../src/styles/font.scss";

const font =  "'Montserrat', sans-serif";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: font,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
  palette: {
    primary: {
      main: '#757164',
      // main: red.A400,
    },
    secondary: {
      // main: '#757164',
      main: red.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
