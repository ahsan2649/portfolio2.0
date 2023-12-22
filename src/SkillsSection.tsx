import { CSSProperties } from "react";

export function SkillsSection() {
  
  const style:CSSProperties = {
    display:"grid",
    gridTemplateRows:"1fr",
    gridTemplateColumns:"1fr 1fr 1fr 1fr"
  }

  return <div id="skills-section">
    <h2>My Skills Include:</h2>
    <div style={style}>
    <div>
      <h3>Games</h3>
      <ul>
        <li>Unity</li>
        <li>Unreal Engine</li>
      </ul>
      <ul>
        <li>C#</li>
        <li>C++</li>
        <li>HLSL</li>
      </ul>
    </div>
    <div>
      <h3>Websites</h3>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Framer Motion</li>
        <li>React Spring</li>
      </ul>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>TS</li>
        <li>JS</li>
      </ul>
    </div>
    <div>
      <h3>Apps</h3>
      <ul>
        <li>Windows API</li>
        <li>Windows App SDK (WinUI)</li>
        <li>.NET</li>
        <li>Flutter</li>
      </ul>
      <ul>
        <li>C#</li>
        <li>C++</li>
        <li>Dart</li>
      </ul>
    </div>
    <div>
      <h3>Misc.</h3>
      <ul>
        <li>Arduino</li>
        <li>Shadertoy</li>
      </ul>
      <ul>
        <li>C</li>
        <li>GLSL</li>
      </ul>
    </div>
    </div>
    
  </div>;
}
