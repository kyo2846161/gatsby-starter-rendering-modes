import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { TextField } from '@mui/material';
// import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
// import Header from "../components/Header";
import { motion, useViewportScroll, useTransform} from "framer-motion";
import { useInView } from 'react-intersection-observer';

import useWindowDimensions from "./../components/useWindowDimensions";

const serifFont = "'Playfair Display', serif";
const font =  "'Montserrat', sans-serif";

export default function Index() {
  const { scrollY } = useViewportScroll();
  const { winHeight, winWidth } = useWindowDimensions();

  const y1 = useTransform(scrollY, [0, winHeight ], [0, -winHeight ]);
  const y2 = useTransform(scrollY, [0, winHeight ], [0, -winHeight*1.5 ]);
  const intro_x = useTransform(scrollY, [0, winHeight/2], [0, -400]);
  const intro_y = useTransform(scrollY, [0, winHeight/2], [0, winHeight/2]);
  const worksTitle_x = useTransform(scrollY, [0, winHeight/2], [0, -400]);
  const worksTitle_y = useTransform(scrollY, [0, winHeight/2], [0, winHeight/2]);
  // const intro_y = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const intro_opacity = useTransform(scrollY, [0, winHeight/8, winHeight/4], [1, 1, 0]);
  const intro_scale = useTransform(scrollY, [0, 800], [1, 0.1]);
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };
  const txt_intro = ["l","e","s","s"," ","i","s"," ","m","o","r","e"];
  const txt_iDoUX = ["I"," ","d","o"," ","U","I","U","X"," ","d","e","s","i","g","n"];
  return (
    <>
      <motion.div style={{x: intro_x, y: intro_y, opacity: intro_opacity, height: winHeight, overflow: "hidden", marginTop: -64, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <Typography variant="h3" component="h1">
          {txt_intro.map((item, index) => (
            <motion.span key={item+index}
            initial={{scale: 5, opacity: 0, x: (index - txt_intro.length/2)*100, y: -winHeight/2, filter: "blur(8px)" }} style={{ whiteSpace: "break-spaces", display: "inline-block"}} animate={{scale: 1, opacity: 1, x:0, y:0, filter: "blur(0px)" }} transition={{ type: "spring", duration: 1.8, delay: index * 0.1 + 0.3 }}>
                {item}
            </motion.span>
          ))}
        </Typography>
        <Typography variant="h6" component="h6" sx={{color: "primary.main", fontFamily: font, fontWeight: 400}}>  
          {txt_iDoUX.map((item, index) => (
            <motion.span key={item+index}
            initial={{scale: 1, opacity: 0, x: (index - txt_iDoUX.length/2)*0, y: index * 0}} style={{ whiteSpace: "break-spaces", display: "inline-block"}} animate={{scale: 1, opacity: 1, x:0, y:0 }} transition={{ type: "spring", duration: 1, delay: index * 0.1 + 1.3}}>
                {item}
            </motion.span>
          ))}
        </Typography>
      </motion.div>
      <motion.div style={{overflow: "hidden", /* x: worksTitle_x, y: worksTitle_y */ }}>
        <Typography variant="h6" component="div">
          Works
        </Typography>
      </motion.div>

      <Container maxWidth="sm">
        <Box sx={{ my: 8 }}>
          
          <Link to="/about" color="secondary">
            About
          </Link>
          <Copyright />
        </Box>

        <Box>
          <motion.div className="box" style={{ y: y1, x: -50 }} />
          <motion.div className="box" style={{ y: y2, x: 50, background: 'salmon' }} />
          <div style={{ height: 500 }} />
          <div style={{ height: 500 }} />
          {/* <div style={{ position: 'fixed', top: 0, left: 0 }}>
            {' '}
            {'is in view? ' + inView}
          </div> */}
          <motion.div
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 2, ease: 'easeOut' }}
            ref={ref}
            className="magic"
          />
          <div style={{ height: 500 }} /><div style={{ height: 500 }} /><div style={{ height: 500 }} /><div style={{ height: 500 }} /><div style={{ height: 500 }} />
        </Box>
      </Container>
    </>
  );
}
