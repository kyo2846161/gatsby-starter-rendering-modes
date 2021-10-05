import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '../components/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { motion, AnimatePresence } from "framer-motion";

import { ColorModeContext } from "../../plugins/gatsby-plugin-top-layout/TopLayout";
import useWindowDimensions from "./../components/useWindowDimensions";
// import Media from 'react-media';

export default function Header() {
    const { winHeight, winWidth } = useWindowDimensions();
    // const [ winHeight, setWinHeight ] = React.useState(useWindowDimensions();
    const [isDesktop, setDesktop] = React.useState(winWidth > 599);
    const [isLogoHover, setIsLogoHover] = React.useState(false);
    const [isAboutHover, setIsAboutHover] = React.useState(false);
    const updateMedia = () => {
        setDesktop(winWidth > 599);
    };
    React.useEffect(() => {
        updateMedia();
    });
    // React.useEffect(() => {
    //     window.addEventListener("resize", updateMedia);
    //     return () => window.removeEventListener("resize", updateMedia);
    // }, []);
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <>
        <AppBar position="fixed" elevation={0} sx={{bgcolor: "rgba(0,0,0,0)", backdropFilter: "blur(3px)", color: "text.primary", mb: 8}}>
            <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                <Link to="/" variant="h6" sx={{ color: "text.primary", display: "block", height: isDesktop? 32 : 28.8, width: isDesktop? 77 : 55 }} onMouseEnter={() => setIsLogoHover(true)} onMouseLeave={() => setIsLogoHover(false)}>
                    <AnimatePresence>
                        {isLogoHover ? (
                            <motion.div initial={{ display: "inline-block", position: "absolute" }} key="logoHomeWrap">
                                <motion.div
                                    initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                    animate={{ rotateX: 0, translateY: 0 }}
                                    exit={{ rotateX: 90, translateY: "-50%" }}
                                    transition={{ duration: 0.5 }}
                                    key="logoHome1"
                                >H</motion.div>
                                <motion.div
                                    initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                    animate={{ rotateX: 0, translateY: 0 }}
                                    exit={{ rotateX: 90, translateY: "-50%" }}
                                    transition={{ duration: 0.5, delay: 0.05 }}
                                    key="logoHome2"
                                >O</motion.div>
                                <motion.div
                                    initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                    animate={{ rotateX: 0, translateY: 0 }}
                                    exit={{ rotateX: 90, translateY: "-50%" }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    key="logoHome3"
                                >M</motion.div>
                                <motion.div
                                    initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                    animate={{ rotateX: 0, translateY: 0 }}
                                    exit={{ rotateX: 90, translateY: "-50%" }}
                                    transition={{ duration: 0.5, delay: 0.15 }}
                                    key="logoHome4"
                                >E</motion.div>
                            </motion.div>
                        ): (
                            <motion.div initial={{ display: "inline-block", position: "absolute" }}  key="logoWrap">
                                <motion.div
                                    initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                    animate={{ rotateX: 0, translateY: 0 }}
                                    exit={{ rotateX: 90, translateY: "-50%" }}
                                    transition={{ duration: 0.5 }}
                                    key="logo1"
                                >E</motion.div>
                                {isDesktop && (
                                    <>
                                        <motion.div
                                            initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                            animate={{ rotateX: 0, translateY: 0 }}
                                            exit={{ rotateX: 90, translateY: "-50%" }}
                                            transition={{ duration: 0.5, delay: 0.05 }}
                                            key="logo2"
                                        >R</motion.div>
                                        <motion.div
                                            initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                            animate={{ rotateX: 0, translateY: 0 }}
                                            exit={{ rotateX: 90, translateY: "-50%" }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                            key="logo3"
                                        >I</motion.div>
                                        <motion.div
                                            initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                            animate={{ rotateX: 0, translateY: 0 }}
                                            exit={{ rotateX: 90, translateY: "-50%" }}
                                            transition={{ duration: 0.5, delay: 0.15 }}
                                            key="logo4"
                                        >C</motion.div>
                                    </>
                                )}
                                <motion.div
                                    initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                    animate={{ rotateX: 0, translateY: 0 }}
                                    exit={{ rotateX: 90, translateY: "-50%" }}
                                    transition={{ duration: 0.5, delay: isDesktop ? 0.2 : 0.05 }}
                                    key="logo5"
                                ><Box sx={{color:"primary.main"}}>E</Box></motion.div>
                                {isDesktop && (
                                    <motion.div
                                        initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                        animate={{ rotateX: 0, translateY: 0 }}
                                        exit={{ rotateX: 90, translateY: "-50%" }}
                                        transition={{ duration: 0.5, delay: 0.25 }}
                                        key="logo6"
                                    ><Box sx={{color:"secondary.main"}}>R</Box></motion.div>
                                )}
                                {!isDesktop && (
                                    <motion.div
                                        initial={{ display: "inline-block", rotateX: -90, translateY: "50%" }}
                                        animate={{ rotateX: 0, translateY: 0 }}
                                        exit={{ rotateX: 90, translateY: "-50%" }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        key="logo7"
                                    >.</motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Link>
                <Typography variant="caption" sx={{ml: 2}}>
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, display: "inline-block", width: 0, marginRight: 5 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            key="logosub1"
                        >UIUX</motion.div>
                        {isDesktop && (
                            <motion.div
                                initial={{ opacity: 0, display: "inline-block", width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                key="logosub2"
                            >Specialist</motion.div>
                        )}
                        <motion.div
                            initial={{ opacity: 0, display: "inline-block", width: 0, marginLeft: 5, marginRight: 5 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            key="logosub3"
                        > | </motion.div>
                        {isDesktop && (
                            <>   
                                <motion.div
                                    initial={{ opacity: 0, display: "inline-block", width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    key="logosub4"
                                >Malaysia</motion.div>
                            </>
                        )}
                        {!isDesktop && (
                            <>   
                                <motion.div
                                    initial={{ opacity: 0, display: "inline-block", width: 0, marginLeft: 5 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    key="logosub5"
                                >MY</motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </Typography>
            </Box>
            <Link to="/about" typography="button" sx={{textDecoration: "none", display: {xs: "none", sm: "inline-block" } }} color="text.primary" onMouseEnter={() => setIsAboutHover(true)} onMouseLeave={() => setIsAboutHover(false)}>
                <Box>About</Box>
                <motion.div initial={{ width: 0, height: 2, backgroundColor: theme.palette.mode === 'dark' ? ':ffeb3b' : '#757164' }} animate={{ width: isAboutHover ? "100%" : 0 }}></motion.div>
            </Link>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
                // size="large"
                // edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: "flex", sm: "none"} }}
            >
                <MenuIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
        <Box sx={{mb: 8}}></Box>
        </>
    );
}