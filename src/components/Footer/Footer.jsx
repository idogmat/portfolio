import React from 'react';
import s from './Footer.module.scss'
import svg from '../../assets/react.svg'
const Footer = () => {
    return (
        <footer className={s.footer}>
            <h4>Jack Rodin</h4>
            <div className={s.linksBlock}>
                <img src={svg} alt=""/>
                <img src={svg} alt=""/>
                <img src={svg} alt=""/>
                <img src={svg} alt=""/>
            </div>
            <span className={s.copywriting}>
                © 2022 All Rights Reserved
            </span>
        </footer>
    );
};

export default Footer;