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
        images:[Beatdown],
        title: "Beatdown",
        category: "Games",
        description: "Semester Project for BA3, with the theme of Music and the category of Multiplayer Games. With two artists, and two designers, we made a 2D rhythm-based couch co-op shooter. I focused on the rhythm system using FMOD, and helped with the character control. The game was developed in Unity."
    },
    {
        thumbnail: SmokeAndMirrors,
        images:[SmokeAndMirrors],
        title: "Smoke And Mirrors",
        category: "Games",
        description: "Semester Project for BA1, with the theme of Magic and the category of Ludic Games. With two artists and two designers, we made a 2D light-based puzzle game in Unity. My focus was on creating the light interaction system, where objects would be made corporeal by shining specific colors, which can also be mirrored and teleported."
    },
    {
        thumbnail: LostAdrift,
        images:[LostAdrift],
        title: "Lost Adrift",
        category: "Games",
        description:"Semester Project for BA2, with the theme of Hope and the category of Narrative Games. With two artists and two designers, we made a single player horror-themed story game. My contribution was very little, including just an outline shader and a simple raycast proximity system."
    },
    {
        thumbnail: Bokksumeka,
        images:[Bokksumeka],
        title: "Bokksumeka",
        category: "Games",
        description:"Semester Project for BA4, with the category of Experimental Games. With one artist, two designers, and one other programmer, we made a two-player booth-sized controller for a dog-style mech. The legs were controlled by ropes connected to sliders, and the mech had a cannon that fired corresponding to a sequence co-ordinated by lights and switches. The focus of my contributions were to bridge the arduino hardware with Unity. This was achieved by implementing mirrored bitwise operations on both the arduino and the engine."
    },
    {
        thumbnail: Website1,
        images:[Website1],
        title: "Portfolio 2.0",
        category: "Websites",
        description:"My second portfolio website was made with React and TypeScript, with Framer-Motion for animations. I decided to make this as large of a step up than my first one, so I brought in animations and flair using Canvas and a video of a Shadertoy shader I made."
    },
    {
        thumbnail: Website2,
        images:[Website2],
        title: "Portfolio 1.0",
        category: "Websites",
        description:"My first portfolio website was made with Angular and Vite. I prefer TypeScript over JavaScript for its type safety, which in turn allows for better intellisense. Animation is very minimal, with just hovers and simple states to switch between tabs."
    },
    {
        thumbnail: Shader,
        images:[Shader],
        title: "Shadertoy Experiments",
        category: "Experiments",
        description:"In my pursuit of learning shaders, I came upon Shadertoy, where 2D and 3D shaders are made on a blank canvas using GLSL. I tinkered with it to come up with interesting patterns, and further my understanding."
    },
    {
        thumbnail: DeskClock,
        images:[DeskClock],
        title: "Desk:Clock",
        category: "Apps",
        description:"Desk:Clock is my first WinUI3 app using C#. As the name implies, it's a simple clean app for telling the time. The aim of this project was to learn as much of the Windows API as possible, starting from Win32 all the way to UWP."
    },
    {
        thumbnail: CustomPlugin,
        images:[CustomPlugin],
        title: "UE5 Custom Plugin",
        category: "Experiments",
        description:"A Custom Asset type with its own editor that I am developing for a Unreal Engine project. The asset consists of a Soundwave and arrays of values that contain timestamps. The editor will show the waveform and a pointer mechanism to set timestamps. These can be used to create soundmaps for rhythm games. The custom asset is a regular UObject, and the editor involves the C++ Slate UI."
    },
    {
        thumbnail: PrayerClock,
        images:[PrayerClock],
        title: "Prayer:Clock",
        category: "Apps",
        description:"Prayer:Clock is my second WinUI3 app, this time in C++ for the added difficulty and depth. Basically it's an minimalist app for indicating the next prayer time depending on the location. Alongside XAML and C++/WinRT, it makes use of open APIs to request the dataset of prayer times."
    },
    {
        thumbnail: PaulOak,
        images:[PaulOak],
        title: "Paul_Oak",
        category: "Apps",
        description:"Paul_Oak is a flashcard app made in Flutter. The name is just a spin on a pronunciation of a Bengali word that means a flash. As my first project in flutter, it's merely the product of coming up with my own app to help me practice my German."
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
    const [{description, images, title}
        , setModalItem] = useState({title: "", description: "", images: [""]})

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
                                setModalItem({title: e.title, description: e.description, images: e.images})
                            }
                        }/> : null
                })
            }
        </div>
        {modal &&
            <ProjectModalItem
                onClick={() => setModal(false)}
                title={title}
                description={description}
                images={images}
            />}
    </div>;
}