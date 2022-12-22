import React from 'react';
import s from './Footer.module.scss'
import {contactLinks} from "../../resource/links";

const Fade = require('react-reveal/Fade')
const Footer = () => {
    return (
        <footer className={s.footer}>
            <Fade left>
                <h4>Evgeny Rodin</h4>
            </Fade>
            <Fade right>
                <div className={s.linksBlock}>
                    {contactLinks.map((el, i) => {
                        return <a className={s.link} key={i} href={el.link}>
                            <img src={el.icon} alt={el.link}/>
                        </a>
                    })}
                </div>
            </Fade>
            <span className={s.copywriting}>
                © 2022 All Rights Reserved
            </span>
        </footer>
    );
};

export default Footer;