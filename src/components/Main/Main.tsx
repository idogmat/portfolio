import React, {useCallback} from 'react';
import s from './Main.module.scss'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

const options={
    fullScreen: {
        enable: false
    },
    particles: {
        color: {
            value: '#ffffff',
        },
        links: {
            color: '#ffffff',
            distance: 200,
            enable: true,
            opacity: 0.8,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            enable: true,
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 1500,
            },
            value: 80,
        },
        opacity: {
            value: 0.7,
        },
        shape: {
            type: 'circle',
        },
    }
}

const Main = () => {
    const particlesInit = useCallback(async (engine:any) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container:any) => {
        await container;
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
                    <h2>Hi!
                        I'm Frontend developer.
                        Please give me job offer</h2>
                </div>
                <div className={s.heroPhoto}>
                </div>
            </div>

        </div>
    );
};

export default Main;
