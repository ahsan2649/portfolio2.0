import { CSSProperties } from "react";
import UnityLogo from "./assets/Logos/SVG/Unity.svg";
import UnrealLogo from "./assets/Logos/SVG/Unreal.svg";
import CSLogo from "./assets/Logos/SVG/CS.svg";
import CPPLogo from "./assets/Logos/SVG/CPP.svg";
import CLogo from "./assets/Logos/SVG/C.svg";
import CSSLogo from "./assets/Logos/SVG/CSS.svg";
import AngularLogo from "./assets/Logos/SVG/Angular.svg";
import ReactLogo from "./assets/Logos/SVG/React.svg";
import HTMLLogo from "./assets/Logos/SVG/HTML.svg";
import ShadertoyLogo from "./assets/Logos/SVG/Shadertoy.svg";
import JSLogo from "./assets/Logos/SVG/JS.svg";
import TSLogo from "./assets/Logos/SVG/TS.svg";
import WindowsLogo from "./assets/Logos/SVG/Windows.svg";
import ArduinoLogo from "./assets/Logos/SVG/Arduino.svg";
import DotNETLogo from "./assets/Logos/SVG/DotNET.svg";
import LinuxLogo from "./assets/Logos/SVG/Linux.svg";
import FlutterLogo from "./assets/Logos/SVG/Flutter.svg";
import DartLogo from "./assets/Logos/SVG/Dart.svg";

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

