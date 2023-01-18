import React, {FC} from 'react';
import s from "./Project.module.scss";

const Zoom = require('react-reveal/Zoom')
type ProjectType = {
    id: string
    title: string
    description: string
    backgroundImage: string
    tech: string[]
    repoLink: string
    demoLink: string
}
const Project: FC<ProjectType> = ({
                                      tech,
                                      title,
                                      description,
                                      backgroundImage,
                                      repoLink,
                                      demoLink
                                  }) => {
    return <Zoom>
        <div className={s.projectElement}>
            <div className={s.projectIcon} style={{backgroundImage}}>
                <a target={'_blank'} href={repoLink}>Show repo</a>
                <a target={'_blank'} href={demoLink}>Show demo</a>
            </div>
            <h4>{title}</h4>
            <span className={s.description}>{description}</span>
            <span className={s.techs}>{tech.map((t,i) => <span key={i} className={s.tech}>{t}</span>)}</span>
        </div>
    </Zoom>
};

export default Project;