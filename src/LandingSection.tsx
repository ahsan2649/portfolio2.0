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
  return <div>
    <h2>I'm Ahsan and I make</h2>
    <h2>{categories[index]}</h2>
  </div>;
}
