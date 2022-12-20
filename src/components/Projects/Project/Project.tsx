import React, {FC} from 'react';
import s from "./Project.module.scss";
import bg from "../../../assets/images/bg-projects.jpg";
type ProjectType={
    id: string
    title: string
    description: string
    backgroundImage: string
    tech: string[]
    repoLink: string
    demoLink: string
}
const Project:FC<ProjectType> = ({tech,
                                     title,
                                     description,
                                     backgroundImage,
                                     repoLink,
                                     demoLink}) => {
    return <div className={s.projectElement}>
        <div className={s.projectIcon} style={{backgroundImage}}>
            <a href={repoLink}>Show repo</a>
            <a href={demoLink}>Show demo</a>
        </div>
        <h4>{title}</h4>
        <span className={s.description}>{description}</span>
        <span className={s.techs}>{tech.map(t=><span className={s.tech}>{t}</span>)}</span>
    </div>
};

export default Project;