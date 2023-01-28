import React, {FC, useRef} from 'react';
import s from './Button.module.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    id?: string
}

const Button: FC<IButton> = ({title, id, ...props}) => {
    const ref = useRef()
    return !!id ? (<a href={id}>
            <button {...props} className={s.button}>{title}</button>
        </a>) :( <button {...props} className={s.button}>{title}</button>)

};

export default Button;