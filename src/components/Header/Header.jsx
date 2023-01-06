import React, {useState} from 'react';
import s from './Header.module.scss'
import {Link} from 'react-scroll';
import {nav} from "../../resource/links";
import {MiniMenu} from "./MiniMenu";
const Header = () => {
const [miniMenu,setMimiMenu]=useState(false)
const close=()=>setMimiMenu(false)
    return (
        <header className={s.header}>
            <nav className={s.headerNav}>
                {nav.map(el=><Link activeClass={s.active} key={el.point} {...el} className={s.headerLinks}>{el.point}</Link>)}
            </nav>
            <div onClick={()=>setMimiMenu(s=>!s)} className={s.miniMenu}/> : <MiniMenu open={miniMenu} close={close}/>

        </header>
    );
};

export default Header;