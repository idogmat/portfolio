import React, {FC} from 'react';
import {nav} from "../../resource/links";
import s from "./Header.module.scss";
// @ts-ignore
import {Link} from "react-scroll";

export const MiniMenu: FC<{ open: boolean,close:()=>void }> = ({open,close}) => {
  return (
    <nav className={open ? s.miniNavActive : s.miniNav}>
      {nav.map(el => <Link activeClass={s.active} key={el.point} {...el} className={s.miniLinks}>{el.point}</Link>)}
      <button onClick={close}>x</button>
    </nav>
  )
}