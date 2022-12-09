import React from 'react';
import s from './Button.module.scss'
type ButtonPropsType={
    title:string
}
const Button = (props:ButtonPropsType) => {
    return <button className={s.button}>{props.title}</button>
};

export default Button;