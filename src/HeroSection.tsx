import circlesVideo from "./assets/Shattered Circles.mp4";
import { motion } from "framer-motion";

export function HeroSection() {
  return <div id='hero-section'>
    <div id="hero-bg">
      <video src={circlesVideo} autoPlay loop muted></video>
    </div>
    <div id="hero-name">
      <motion.h1
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{delay:0.25,ease:"easeOut", duration: 1.5 }}
        
      >Ahsan</motion.h1>
    </div>
    <motion.div id='cursor'
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{delay:0.25, ease:"easeInOut", duration: 1.25 }}
    ></motion.div>
    <div id="hero-caption"><motion.h2
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{delay:0.25,ease:"easeOut", duration: 1.5 }}>Programming<br />Polyglot</motion.h2></div>
  </div>;
}
