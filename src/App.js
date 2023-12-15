import React, { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { FaAngleUp } from "react-icons/fa";
import particlesOptions from "./particles.json";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProjectsCard from "./components/ProjectsCard/ProjectsCard";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import "./App.css";

const styleTop = {
    fontSize: '20px',
    color: 'rgb(251, 128, 128)',
    margin: '5% 0 2% 0'
}

const styleDown = {
    fontSize: '20px',
    color: 'white',
    margin: '5% 0 2% 0'
}

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const aboutRef = useRef(null);
    const topRef = useRef(null);

    const handleClickAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="App">
            {init && <Particles options={particlesOptions} />}

            <div ref={topRef}>
                <Home />
                <div className="knowBtn">
                    <div className="flex items-center justify-center">
                        <span onClick={handleClickAbout} className="f3 tc no-underline inline-flex items-center ba br4 pointer animate__animated animate__zoomInUp">
                            <h3>Know more</h3>
                        </span>
                    </div>
                </div>
            </div>

            <div ref={aboutRef}>
                <About />
            </div>

            <ProjectsCard />

            <Contacts />

            <div>
                <div className='tc'>
                    <FaAngleUp onClick={handleClickTop} className="top icon" style={styleTop} />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
