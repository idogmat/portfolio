import React, {FC} from 'react';
import s from './Button.module.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    title:string
}
const Button:FC<IButton> = ({title,...props}) => {
    return <button {...props} className={s.button}>{title}</button>
};

export default Button;