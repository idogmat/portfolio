import React from 'react';
import s from './Header.module.scss'
const Header = () => {
    const nav=[
        {point:'Main',path:'#'},
        {point:'Skills',path:'#'},
        {point:'Projects',path:'#'},
        {point:'Contacts',path:'#'}
    ]

    return (
        <div className={s.header}>
            <nav className={s.headerNav}>
                {nav.map(el=><a key={el.point} className={s.headerLinks}>{el.point}</a>)}
            </nav>
        </div>
    );
};

export default Header;