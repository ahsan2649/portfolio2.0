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
      <h2 className="caption-name">{categories[index]}</h2>
    </div>
    <Collage entry={categories[index]}/>
  </div>;
}


function Collage(props:{entry:string}) {
  let entries:Record<string, any> = {
    "Games" : GameItems(),
    "Websites" : WebItems(),
    "Apps" : AppItems(),
    "Experiments": ExpItems()
  }

  return <>
    {entries[props.entry]}
  </>;
}

function GameItems() {
  return <>
    <div className="landing-item" style={{ gridRow: "2/4", gridColumn: "1/5" }}>
      <img src={game1} />
    </div>
    <div className="landing-item" style={{ gridRow: "1/3", gridColumn: "5/9" }}>
      <img src={game2} />
    </div>
    <div className="landing-item" style={{ gridRow: "3/5", gridColumn: "5/9" }}>
      <img src={game3} />
    </div>
    <div className="landing-item" style={{ gridRow: "2/4", gridColumn: "9/13" }}>
      <img src={game4} />
    </div>
  </>;
}

function WebItems() {
  return <>
    <div className="landing-item" style={{ gridColumn: "2/7", gridRow: "1/4", justifyContent: "center" }}>
      <img src={website2} />
    </div>
    <div className="landing-item" style={{ gridColumn: "7/12", gridRow: "2/5", justifyContent: "center" }}>
      <img src={website1} />
    </div>
  </>;
}

function AppItems() {
  return <>
    <div className="landing-item" style={{ gridRow: "1/4", gridColumn: "2/6", justifyContent: "end" }}>
      <img src={app2} />
    </div>
    <div className="landing-item" style={{ gridRow: "1/5", gridColumn: "6/9", justifyContent: "center", border: "none" }}>
      <img src={app1} />
    </div>
    <div className="landing-item" style={{ gridColumn: "9/12", objectFit: "fill", justifyContent: "center", border: "none" }}>
      <img src={app3} style={{ borderRadius: "2em" }} />
    </div>
    <div className="landing-item" style={{ gridColumn: "10/13", objectFit: "fill", justifyContent: "center", border: "none" }}>
      <img src={app4} style={{ borderRadius: "2em" }} />
    </div>
    <div className="landing-item" style={{ gridColumn: "9/12", objectFit: "fill", justifyContent: "center", border: "none" }}>
      <img src={app5} style={{ borderRadius: "2em" }} />
    </div>
  </>;
}

function ExpItems() {
  return <>
    <div className="landing-item" style={{ gridRow: "3/4", gridColumn: "10/12", justifyContent: "center" }}>
      <img src={exp1} />
    </div>
    <div className="landing-item" style={{ gridRow: "1/2", gridColumn: "10/12", justifyContent: "center" }}>
      <img src={exp2} />
    </div>
    <div className="landing-item" style={{ gridRow: "2/3", gridColumn: "9/11", justifyContent: "center" }}>
      <img src={exp3} />
    </div>
    <div className="landing-item" style={{ gridRow: "2/5", gridColumn: "6/9", justifyContent: "center" }}>
      <img src={exp4} />
    </div>
    <div className="landing-item" style={{ gridRow: "1/4", gridColumn: "2/6" }}>
      <img src={exp5} />
    </div>
  </>;
}

