import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
// import theme from '../../src/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../../src/components/Header";
import "../../src/styles/font.scss";
import "../../src/fonts/silkserif/stylesheet.css";
import "../../src/styles/main.scss";
// import SmoothScroll from '../../src/components/SmoothScroll';

const font =  "'Montserrat', sans-serif";
// const serifFont = "'Silk Serif', serif";
const serifFont = "'Playfair Display', serif";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export default function TopLayout(props) {
  

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light' );
  React.useEffect(()=>{
    setMode(prefersDarkMode ? 'dark' : 'light' );
  }, [prefersDarkMode])
  // console.log(prefersDarkMode);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: font,
          fontWeightLight: 200,
          fontWeightRegular: 400,
          fontWeightMedium: 600,
          fontWeightBold: 800,
          h1: {
            fontFamily: serifFont,
          },
          h2: {
            fontFamily: serifFont,
          },
          h3: {
            fontFamily: serifFont,
          },
          h4: {
            fontFamily: serifFont,
          },
        },
        palette: {
          // mode: prefersDarkMode ? 'dark' : 'light',
          mode: mode,
          primary: {
            // main: '#2a3237',
            main: mode === 'light' ? "#757164" : '#ffeb3b',
          },
          secondary: {
            main: mode === 'light' ? "#757164" : '#ffeb3b',
          },
          text: {
            primary: mode === 'light' ? '#2a3237' : "#d8d0cb",
          },
          background: {
            paper: mode === 'light' ? '#d8d0cb' : "#2a3237",
            default: mode === 'light' ? '#d8d0cb' : "#2a3237",
          }
          // error: {
          //   main: red.A400,
          // },
        },
      }),
    [mode],
  );
  let newTheme = responsiveFontSizes(theme);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        /> */}
      </Helmet>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={newTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {typeof window !== "undefined" && (
            <>
              <Header />
              {/* <SmoothScroll> */}
                {props.children}
              {/* </SmoothScroll> */}
            </>
          )}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
