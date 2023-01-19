import React, {useCallback} from 'react';
import s from './Main.module.scss'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import TypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt'

const Fade = require('react-reveal/Fade')
const options = {
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
            // value: 80,
            value: 200,
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
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: any) => {
        await container;
    }, []);

    return (
        <div id={'main'} className={s.main}>
            <Particles
                id="tsparticles"
                className={s.tsparticles}
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
            <div className={s.mainHero}>
                <Fade left>
                    <div className={s.heroInfo}>
                        <span>Hi there!</span>
                        <h2>I'm Evgeny Rodin</h2>
                        <TypingEffect speed={50} eraseSpeed={20} cursorClassName={s.typingText}
                                      text={'Front-end developer'}/>
                    </div>
                </Fade>
                <Fade right>
                    <Tilt className={'Tilt'}>
                        <div className={s.heroPhoto}>
                            <div className={s.image}>
                            </div>
                        </div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
};

export default Main;
