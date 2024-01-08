import Beatdown from "./assets/ProjectPics/Beatdown.png";
import Bokksumeka from "./assets/ProjectPics/Bokksumeka.png";
import LostAdrift from "./assets/ProjectPics/LostAdrift.png";
import SmokeAndMirrors from "./assets/ProjectPics/SmokeAndMirrors.png";
import website1 from "./assets/ProjectPics/website1.png";
import website2 from "./assets/ProjectPics/website2.png";
import customplugin from "./assets/ProjectPics/customplugin.png";
import deskclock from "./assets/ProjectPics/deskclock.png";
import prayerclock from "./assets/ProjectPics/prayerclock.png";
import flashcards from "./assets/ProjectPics/app1.png";
import shader from "./assets/ProjectPics/shader.jpg";
import { motion } from "framer-motion";


export function ProjectsSection() {
  return <div id="projects-section">
    <h2>My Projects:</h2>
    <div id="projects-table">
      <div className="project-row-left">
        <h3>Games</h3>
        <div className="project-carousel">
          <ProjectItem image={Bokksumeka} title={"Bokksumeka"}/>
          <ProjectItem image={Beatdown} title={"Beatdown"}/>
          <ProjectItem image={LostAdrift} title={"Lost Adrift"}/>
          <ProjectItem image={SmokeAndMirrors} title={"Smoke and Mirrors"}/>
        </div>
      </div>
      <div className="project-row-right">
        <div className="project-carousel">
          <ProjectItem image={website2} title={"Portfolio 1.0"}/>
          <ProjectItem image={website1} title={"Portfolio 2.0"}/>
        </div>
        <h3>Websites</h3>
      </div>
      <div className="project-row-left">
        <h3>Apps</h3>
        <div className="project-carousel">
          <ProjectItem image={deskclock} title={"Desktop Clock"}/>
          <ProjectItem image={prayerclock} title={"Prayer Timings"}/>
          <ProjectItem image={flashcards} title={"Flashcards"}/>
        </div>
      </div>
      <div className="project-row-right">
        <div className="project-carousel">
          <ProjectItem image={customplugin} title={"Custom Plugin"}/>
          <ProjectItem image={shader} title={"Shaders"}/>
        </div>
        <h3>Experiments</h3>
      </div>
    </div>
  </div>;
}
function ProjectItem(props: {image?:string, title:string }) {
  return <motion.div className="project" whileHover={{scale:1.2}}>
    <img src={props.image}/>
  </motion.div>;
}

