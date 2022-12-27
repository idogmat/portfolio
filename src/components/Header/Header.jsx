import React from 'react';
import s from './Header.module.scss'
import {Link} from 'react-scroll';
import {nav} from "../../resource/links";
const Header = () => {


    return (
        <header className={s.header}>
            <nav className={s.headerNav}>
                {nav.map(el=><Link activeClass={s.active} key={el.point} {...el} className={s.headerLinks}>{el.point}</Link>)}
            </nav>
            <nav className={s.miniMenu}>
                {nav.map(el=><Link activeClass={s.active} key={el.point} {...el} className={s.miniLinks}>{el.point}</Link>)}
            </nav>
        </header>
    );
};

export default Header;