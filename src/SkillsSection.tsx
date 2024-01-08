import UnityLogo from "./assets/Logos/PNG/Unity.png";
import UnrealLogo from "./assets/Logos/PNG/Unreal.png";
import CSLogo from "./assets/Logos/PNG/CS.png";
import CPPLogo from "./assets/Logos/PNG/CPP.png";
import CLogo from "./assets/Logos/PNG/C.png";
import CSSLogo from "./assets/Logos/PNG/CSS.png";
import AngularLogo from "./assets/Logos/PNG/Angular.png";
import ReactLogo from "./assets/Logos/PNG/React.png";
import HTMLLogo from "./assets/Logos/PNG/HTML.png";
import ShadertoyLogo from "./assets/Logos/PNG/Shadertoy.png";
import JSLogo from "./assets/Logos/PNG/JS.png";
import TSLogo from "./assets/Logos/PNG/TS.png";
import WindowsLogo from "./assets/Logos/PNG/Windows.png";
import ArduinoLogo from "./assets/Logos/PNG/Arduino.png";
import DotNETLogo from "./assets/Logos/PNG/DotNET.png";
import LinuxLogo from "./assets/Logos/PNG/Linux.png";
import FlutterLogo from "./assets/Logos/PNG/Flutter.png";
import DartLogo from "./assets/Logos/PNG/Dart.png";

import { SkillsCanvas } from "./SkillsCanvas";
import { motion } from "framer-motion";

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
      {props.frameworks.map((e, i) => <motion.img initial={{ y:50,opacity: 0 }} whileInView={{y:0, opacity: 1 }} transition={{duration:0.75}} viewport={{once:false}} src={e} key={i} />)}
    </div>
    <div>
      {props.languages.map((e, i) => <motion.img initial={{ y:50,opacity: 0 }} whileInView={{y:0, opacity: 1 }} transition={{duration:0.75}} viewport={{once:false}} src={e} key={i+props.frameworks.length} />)}
    </div>

  </div>;
}

