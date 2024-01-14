import {useState} from "react";
import Beatdown from "./assets/ProjectPics/Beatdown.png";
import Bokksumeka from "./assets/ProjectPics/Bokksumeka.png";
import LostAdrift from "./assets/ProjectPics/LostAdrift.png";
import SmokeAndMirrors from "./assets/ProjectPics/SmokeAndMirrors.png";
import Website1 from "./assets/ProjectPics/website1.png";
import Website2 from "./assets/ProjectPics/website2.png";
import Shader from "./assets/ProjectPics/shader.jpg";
import DeskClock from "./assets/ProjectPics/deskclock.png";
import CustomPlugin from "./assets/ProjectPics/customplugin.png";
import PrayerClock from "./assets/ProjectPics/prayerclock.png";
import PaulOak from "./assets/ProjectPics/paul_oak.png";
import {motion} from "framer-motion";


const items = [
    {
        thumbnail: Beatdown,
        title: "Beatdown",
        category: "Games"
    },
    {
        thumbnail: SmokeAndMirrors,
        title: "Smoke And Mirrors",
        category: "Games"
    },
    {
        thumbnail: LostAdrift,
        title: "Lost Adrift",
        category: "Games"
    },
    {
        thumbnail: Bokksumeka,
        title: "Bokksumeka",
        category: "Games"
    },
    {
        thumbnail: Website1,
        title: "Portfolio 2.0",
        category: "Websites"
    },
    {
        thumbnail: Website2,
        title: "Portfolio 1.0",
        category: "Websites"
    },
    {
        thumbnail: Shader,
        title: "Shadertoy Experiments",
        category: "Experiments"
    },
    {
        thumbnail: DeskClock,
        title: "Desk:Clock",
        category: "Apps"
    },
    {
        thumbnail: CustomPlugin,
        title: "UE5 Custom Plugin",
        category: "Experiments"
    },
    {
        thumbnail: PrayerClock,
        title: "Prayer:Clock",
        category: "Apps"
    },
    {
        thumbnail: PaulOak,
        title: "Paul_Oak",
        category: "Apps"
    }
]


function ProjectGridItem(props: {
    thumbnail: string,
    openModal: React.MouseEventHandler
}) {
    return <motion.div whileHover={{scale:1.125}} className="project-grid-item" onClick={props.openModal}>
        <img src={props.thumbnail} alt=""/></motion.div>;
}

function ProjectModalItem(props: {
    onClick: () => void,
    images: string[],
    description: string,
    title: string
}) {
    return <div
        onClick={props.onClick}
        className="project-modal-item">
        <div>
            <img src={props.images[0]} alt=""/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>;
}

export function ProjectGridSection() {
    const categories = ["All", "Games", "Apps", "Websites", "Experiments"]
    const [category, setCategory] = useState("All");
    const [modal, setModal] = useState(false);
    const [modalItem, setModalItem] = useState({title: "", description: "", images: []})

    const isActiveCategory = (e:string) =>{return e == category ? "nav-active" : ""};

    return <div id="project-grid-section">
        <h2>Check out my projects:</h2>
        <div id="project-grid-navbar">
            <ul>
                {
                    categories.map((e, i) => <li key={i} onClick={() => {
                        setCategory(e)
                    }}><motion.div className={"project-grid-nav-item " + isActiveCategory(e)} whileHover={{y:-15}}>{e}</motion.div></li>)
                }
                    </ul>
        </div>
        <div id="project-grid">
            {
                items.map((e, i) => {
                    return ((category == "All") || (category == e.category)) ?
                        <ProjectGridItem
                            key={i}
                            thumbnail={e.thumbnail}
                            openModal={() => {
                                setModal(true);
                                setModalItem({title: e.title, description: "", images: []})
                            }
                        }/> : null
                })
            }
        </div>
        {modal &&
            <ProjectModalItem
                onClick={() => setModal(false)}
                title={modalItem.title}
                description={modalItem.description}
                images={modalItem.images}
            />}
    </div>;
}