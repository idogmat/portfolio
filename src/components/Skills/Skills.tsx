import React from 'react';
import s from './Skills.module.scss'
import svg from '../../assets/react.svg'
const Skills = () => {
    return (
        <div className={s.skills}>
            <h2>Skills</h2>
            <div className={s.skillsContainer}>
                <div className={s.skillsRow}>
                    <div className={s.skillElement}>
                        <div className={s.skillIcon} style={{ backgroundImage: `url(${svg})` }}></div>
                        <h4>React</h4>
                        <span>talespin on website</span>
                    </div>
                    <div className={s.skillElement}>
                        <div className={s.skillIcon} style={{ backgroundImage: `url(${svg})` }}></div>
                        <h4>React</h4>
                        <span>talespin on website</span>
                    </div>
                    <div className={s.skillElement}>
                        <div className={s.skillIcon} style={{ backgroundImage: `url(${svg})` }}></div>
                        <h4>React</h4>
                        <span>talespin on website</span>
                    </div>
                    <div className={s.skillElement}>
                        <div className={s.skillIcon} style={{ backgroundImage: `url(${svg})` }}></div>
                        <h4>React</h4>
                        <span>talespin on website</span>
                    </div>
                    <div className={s.skillElement}>
                        <div className={s.skillIcon} style={{ backgroundImage: `url(${svg})` }}></div>
                        <h4>React</h4>
                        <span>talespin on website</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;