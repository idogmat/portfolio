import React, {useCallback} from 'react';
import s from './Main.module.scss'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
const options={
    fullScreen: {
        enable: false
    },
    background: {
        color: {
            value: "#2a2d38",
        },
    },
    fpsLimit: 120,
    interactivity: {
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

const Main = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
    }, []);

    return (
        <div className={s.main}>
            <Particles
                id="tsparticles"
                className={s.tsparticles}
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
            <div className={s.mainHero}>
                <div className={s.heroInfo}>
                    <h4>Hi!
                        I'm Frontend developer.
                        Please give me job offer</h4>
                </div>
                <div className={s.heroPhoto}>
                </div>
            </div>

        </div>
    );
};

export default Main;
