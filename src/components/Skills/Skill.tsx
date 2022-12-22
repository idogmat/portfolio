import React, {FC} from 'react';
import s from "./Skills.module.scss";
const Zoom = require('react-reveal/Zoom')

type SkillType = {
    id: string,
    title: string,
    description: string,
    backgroundImage: string,
}
const Skill: FC<SkillType> = ({id, title, description, backgroundImage}) => {
    return <Zoom>
        <div className={s.skillElement}>
            <div className={s.skillIcon} style={{backgroundImage}}></div>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
    </Zoom>
};

export default Skill;