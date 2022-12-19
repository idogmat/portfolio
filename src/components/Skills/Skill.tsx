import React, {FC} from 'react';
import s from "./Skills.module.scss";

type SkillType={
    id: string,
    title: string,
    description: string,
    backgroundImage: string,
}
const Skill:FC<SkillType> = ({id,title,description,backgroundImage}) => {
    return <div className={s.skillElement}>
            <div className={s.skillIcon} style={{backgroundImage} }></div>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
};

export default Skill;