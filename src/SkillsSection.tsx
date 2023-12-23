import { CSSProperties } from "react";
import UnityLogo from "./assets/SVG/Unity.svg";
import UnrealLogo from "./assets/SVG/Unreal.svg";
import CSLogo from "./assets/SVG/CS.svg";
import CPPLogo from "./assets/SVG/CPP.svg";
import CLogo from "./assets/SVG/C.svg";
import CSSLogo from "./assets/SVG/CSS.svg";
import AngularLogo from "./assets/SVG/Angular.svg";
import ReactLogo from "./assets/SVG/React.svg";
import HTMLLogo from "./assets/SVG/HTML.svg";
import ShadertoyLogo from "./assets/SVG/Shadertoy.svg";
import JSLogo from "./assets/SVG/JS.svg";
import TSLogo from "./assets/SVG/TS.svg";
import WindowsLogo from "./assets/SVG/Windows.svg";
import ArduinoLogo from "./assets/SVG/Arduino.svg";
import DotNETLogo from "./assets/SVG/DotNET.svg";
import LinuxLogo from "./assets/SVG/Linux.svg";
import FlutterLogo from "./assets/SVG/Flutter.svg";
import DartLogo from "./assets/SVG/Dart.svg";



export function SkillsSection() {

  return <div id="skills-section">
    <h2>My Skills Include:</h2>
    <div id="skill-table">
    <SkillTable category="Games" languages={[CPPLogo, CSLogo]} frameworks={[UnrealLogo, UnityLogo]}/>
    <SkillTable category="Websites" languages={[HTMLLogo, CSSLogo, TSLogo, JSLogo]} frameworks={[ReactLogo, AngularLogo]}/>
    <SkillTable category="Apps" languages={[CPPLogo, CSLogo, DartLogo]} frameworks={[WindowsLogo, DotNETLogo, FlutterLogo]}/>
    <SkillTable category="Misc" languages={[CLogo]} frameworks={[ArduinoLogo, ShadertoyLogo, LinuxLogo]}/>
    </div>
    
  </div>;
}

function SkillTable(props:{category:string, frameworks?:string[], languages?:string[]}) {
  return <div className="skill-category">
    <h3>{props.category}</h3>
    <div className="frameworks">
      {props.frameworks?.map(
        (e,i)=><img src={e} key={i}/>
      )}
    </div>
    <div className="languages">
      {props.languages?.map(
        (e,i)=><img src={e} key={i}/>
      )}
    </div>
  </div>;
}
