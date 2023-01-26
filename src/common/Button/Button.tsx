import React, {FC} from 'react';
import s from './Button.module.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    id?:string
}

const Button: FC<IButton> = ({title,id, ...props}) => {
    return <button {...props} className={s.button}>{id ? <a href={id}>{title}</a> : title}</button>
};

export default Button;