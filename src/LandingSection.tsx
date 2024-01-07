import { useEffect, useState } from "react";

export function LandingSection() {
  const categories=["Games", "Websites", "Apps", "Experiments"]
  
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index+1)%categories.length);
    }, 5000);
    
    return () => clearTimeout(timer);
  });

  return <div id="landing-section">
    <div className="caption">
    <h2>I'm Ahsan and I make</h2>
    <h2 className="caption-name">{categories[index]}</h2>
    </div>
    {Collage()}
  </div>;
}
function Collage() {
  let grid2 = [
    {gridColumn:"1/7" ,gridRow:"1/4"},
    {gridColumn:"7/13", gridRow:"2/5"}
  ]

  let grid3 = [
    {gridColumn:"1/5" ,gridRow:"1/4"},
    {gridColumn:"5/9", gridRow:"1/5"},
    {gridColumn:"9/13", gridRow:"2/5"}
  ]

  let grid4 = [
    {gridColumn:"1/4" ,gridRow:"1/4"},
    {gridColumn:"4/7" ,gridRow:"2/5"},
    {gridColumn:"7/10", gridRow:"1/5"},
    {gridColumn:"10/13", gridRow:"1/4"}
  ]

  let config2 = grid2.map((e,i)=><div className="landing-test" style={e} key={i}></div>)
  let config3 = grid3.map((e,i)=><div className="landing-test" style={e} key={i}></div>)
  let config4 = grid4.map((e,i)=><div className="landing-test" style={e} key={i}></div>)


  return <>
    
  </>;
}

