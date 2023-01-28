import React from 'react';
import s from './Footer.module.scss'
import {contactLinks} from "../../resource/links";

const Fade = require('react-reveal/Fade')
const Footer = () => {
    return (<footer className={s.footer}>
            <Fade left>
                <h4>Evgeny Rodin</h4>
            </Fade>
            <Fade right>
                <div className={s.linksBlock}>
                    {contactLinks.map((el, i) => {
                        return <a rel="noreferrer" className={s.link} target="_blank" key={i} href={el.link}>
                            <img src={el.icon} alt={el.link}/>
                        </a>
                    })}
                </div>
            </Fade>
            <span className={s.copywriting}>
                © {new Date().getFullYear()} All Rights Reserved
            </span>
        </footer>);
};

export default Footer;