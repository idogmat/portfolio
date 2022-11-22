import React from 'react';
import s from './Header.module.css'
const Header = () => {
    const nav=[
        {point:'Main',path:'/'},
        {point:'Skills',path:'/'},
        {point:'Project',path:'/'},
        {point:'Contacts',path:'/'}
    ]

    return (
        <div className={s.header}>
            <nav className={s.headerNav}>
                {nav.map(el=><a className={s.headerLinks}>{el.point}</a>)}
            </nav>
        </div>
    );
};

export default Header;