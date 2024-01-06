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

import { SkillsCanvas } from "./SkillsCanvas";

export function SkillsSection() {




  return <div id="skills-section">
    <SkillsCanvas />
    <div id="skills">
      <h2>My Skills Include:</h2>
      <div id="skills-table">
        <Skill title="Games" frameworks={[UnrealLogo, UnityLogo]} languages={[CPPLogo, CSLogo]} />
        <Skill title="Websites" frameworks={[ReactLogo, AngularLogo]} languages={[HTMLLogo, CSSLogo, TSLogo, JSLogo]} />
        <Skill title="Apps" frameworks={[WindowsLogo, FlutterLogo, DotNETLogo]} languages={[CPPLogo, DartLogo, CSLogo]} />
        <Skill title="Experiments" frameworks={[ShadertoyLogo, ArduinoLogo, LinuxLogo]} languages={[CLogo]} />

      </div>
    </div>
  </div>;
}
function Skill(props: { title: string, frameworks: string[], languages: string[] }) {
  return <div id="skill">
    <h3>{props.title}</h3>

    <div>
      {props.frameworks.map((e, i) => <img src={e} key={i} />)}
    </div>
    <div>
      {props.languages.map((e, i) => <img src={e} key={i} />)}
    </div>

  </div>;
}

