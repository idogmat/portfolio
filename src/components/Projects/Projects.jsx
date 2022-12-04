import React from 'react';
import s from './Projects.module.scss'
import bg from "../../assets/bg-projects.jpg";

const Projects = () => {
    return (
        <div className={s.projects}>
            <h2>Projects</h2>
            <div className={s.projectsContainer}>
                <div className={s.projectsRow}>
                    <div className={s.projectElement}>
                        <div className={s.projectIcon} style={{backgroundImage: `url(${bg})`}}>
                            <a href="#">Show</a>
                        </div>
                        <h4>React</h4>
                        <span>talespin on website</span>
                    </div>
                    <div className={s.projectElement}>
                        <div className={s.projectIcon} style={{backgroundImage: `url(${bg})`}}>
                            <a href="#">Show</a>
                        </div>
                        <h4>React</h4>
                        <span>talespin on website</span>
                    </div>
                    <div className={s.projectElement}>
                        <div className={s.projectIcon} style={{backgroundImage: `url(${bg})`}}>
                            <a href="#">Show</a>
                        </div>
                        <h4>React</h4>
                        <span>talespin on website</span>
                    </div>
                    <div className={s.projectElement}>
                        <div className={s.projectIcon} style={{backgroundImage: `url(${bg})`}}>
                            <a href="#">Show</a>
                        </div>
                        <h4>React</h4>
                        <span>talespin on website</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;