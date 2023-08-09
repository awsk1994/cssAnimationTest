import React, { useRef, CSSProperties } from 'react';
import './App.css';
import { motion, useScroll, useTransform, MotionStyle } from "framer-motion";

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const containerStyle:CSSProperties = {
    'width': '100%',
    'height': '100vh',
    'overflow': 'hidden',
    'position': 'relative',
    'display': 'grid',
    'placeItems': 'center',
  };
  const pStyle:MotionStyle = {
    'fontWeight': 'bold',
    'color': 'white',
    'fontSize': '5rem', /* Equivalent to text-7xl in Tailwind CSS */
    'position': 'relative',
    'zIndex': 10,
  };
  const bgBack:MotionStyle = {
    backgroundImage: "url(/image-full.png)",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
  }
  const bgFront:MotionStyle = {
    backgroundImage: `url(/image-bottom.png)`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 20,
  }

  return (
      <div       
        ref={ref}
        style={containerStyle}>
        <motion.p style={{y: textY, ...pStyle}}>PARALLAX. </motion.p>
        <motion.div style={{y: backgroundY, ...bgBack }}/>
        <motion.div style={bgFront}/>
      </div>
  );
}

export default App;
