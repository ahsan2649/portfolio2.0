import { useEffect, useState } from "react";
import game1 from "./assets/LandingPics/game1.png"
import game2 from "./assets/LandingPics/game2.png"
import game3 from "./assets/LandingPics/game3.png"
import game4 from "./assets/LandingPics/game4.png"
import app1 from "./assets/LandingPics/app1.png"
import app2 from "./assets/LandingPics/app2.png"
import app3 from "./assets/LandingPics/app3.png"
import app4 from "./assets/LandingPics/app4.png"
import app5 from "./assets/LandingPics/app5.png"
import website1 from "./assets/LandingPics/website1.png"
import website2 from "./assets/LandingPics/website2.png"
import exp1 from "./assets/LandingPics/exp1.jpg"
import exp2 from "./assets/LandingPics/exp2.jpg"
import exp3 from "./assets/LandingPics/exp3.jpg"
import exp4 from "./assets/LandingPics/exp4.jpg"
import exp5 from "./assets/LandingPics/exp5.png"
import { AnimatePresence, motion } from "framer-motion";







export function LandingSection() {
  const categories = ["Games", "Websites", "Apps", "Experiments"]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % categories.length);
    }, 5000);

    return () => clearTimeout(timer);
  });




  return <div id="landing-section">
    <div className="caption">
      <h2>I'm Ahsan and I make</h2>
      <motion.h2
        key={categories[index]}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.675 }}
        className="caption-name">{categories[index]}</motion.h2>
    </div>
    <AnimatePresence>
      <Collage entry={categories[index]} />
    </AnimatePresence>
  </div>;
}


function Collage(props: { entry: string }) {
  let entries: Record<string, any> = {
    "Games": GameItems(),
    "Websites": WebItems(),
    "Apps": AppItems(),
    "Experiments": ExpItems()
  }

  return <>
    {entries[props.entry]}
  </>;
}
function randomDirection() {
  return Math.sign(Math.random() - 0.5) * 2
}

function LandingItem(props: { image: string, style: {} }) {
  return <motion.div key={props.image} initial={{ y: randomDirection() * 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: randomDirection() * 50, opacity: 0 }} transition={{ duration: 1 }} className="landing-item" style={props.style}>
    <img src={props.image} />
  </motion.div>;
}

function GameItems() {
  return <>
    <LandingItem image={game1} style={{ gridRow: "2/4", gridColumn: "1/5" }} />
    <LandingItem image={game2} style={{ gridRow: "1/3", gridColumn: "5/9" }} />
    <LandingItem image={game3} style={{ gridRow: "3/5", gridColumn: "5/9" }} />
    <LandingItem image={game4} style={{ gridRow: "2/4", gridColumn: "9/13" }} />
  </>;
}


function WebItems() {
  return <>
    <LandingItem image={website2} style={{ gridColumn: "2/7", gridRow: "1/4", justifyContent: "center" }} />
    <LandingItem image={website1} style={{ gridColumn: "7/12", gridRow: "2/5", justifyContent: "center" }} />
  </>;
}

function AppItems() {
  return <>
    <LandingItem image={app1} style={{ gridRow: "1/5", gridColumn: "6/9", justifyContent: "center", border: "none" }} />
    <LandingItem image={app2} style={{ gridRow: "1/4", gridColumn: "2/6", justifyContent: "end" }} />
    <LandingItem image={app3} style={{ gridColumn: "9/12", objectFit: "fill", justifyContent: "center", border: "none" }} />
    <LandingItem image={app4} style={{ gridColumn: "10/13", objectFit: "fill", justifyContent: "center", border: "none" }} />
    <LandingItem image={app5} style={{ gridColumn: "9/12", objectFit: "fill", justifyContent: "center", border: "none" }} />
  </>;
}

function ExpItems() {
  return <>
    <LandingItem image={exp1} style={{ gridRow: "3/4", gridColumn: "10/12", justifyContent: "center" }} />
    <LandingItem image={exp2} style={{ gridRow: "1/2", gridColumn: "10/12", justifyContent: "center" }} />
    <LandingItem image={exp3} style={{ gridRow: "2/3", gridColumn: "9/11", justifyContent: "center" }} />
    <LandingItem image={exp4} style={{ gridRow: "2/5", gridColumn: "6/9", justifyContent: "center" }} />
    <LandingItem image={exp5} style={{ gridRow: "1/4", gridColumn: "2/6" }} />
  </>;
}

