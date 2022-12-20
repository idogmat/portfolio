import React from 'react';
import s from './Skills.module.scss'
import svg from '../../assets/icons/react.svg'
import {techData} from "../../resource/tech";
import Skill from "./Skill";
const Skills = () => {
    return (
        <div className={s.skills}>
            <h2>Skills</h2>
            <div className={s.skillsContainer}>
                <div className={s.skillsRow}>
                    {techData.map(s=><Skill key={s.id} id={s.id} description={s.description} title={s.title} backgroundImage={s.backgroundImage}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;