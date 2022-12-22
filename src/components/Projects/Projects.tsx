import React from 'react';
import s from './Projects.module.scss'
import {projectsData} from "../../resource/projects";
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div id={'projects'} className={s.projects}>
            <h2>Projects</h2>
            <div className={s.projectsContainer}>
                <div className={s.projectsRow}>
                    {projectsData.map((p,i)=><Project key={p.id+i} {...p}/>)}
                </div>
            </div>
        </div>
    );
};

export default Projects;