import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Contacts.module.scss'
import Button from "../../common/Button/Button";
import {IForm, sendMail} from "../../api";
import ModalMessageSent from "./modalMessageSent";
import {useForm} from "react-hook-form";

const Zoom = require('react-reveal/Zoom')

const Contacts = () => {
    const {register, handleSubmit, watch, formState: {errors},reset} = useForm();
    const [statusSent, setStatus] = useState<boolean>(false)
    useEffect(() => {
        statusSent && setTimeout(() => {
            setStatus(false)
        }, 3000)
    }, [statusSent])
    const sendMessage =async (form:any) => {
        console.log(form)
        const res = await sendMail(form)
        setStatus(res)
        res && reset()
    }
    return <Zoom>
        <div id={'contacts'} className={s.contacts}>
            <h2>Contacts</h2>
            {statusSent ? <ModalMessageSent/> : ''}
            <form className={s.sendForm} onSubmit={handleSubmit((form) => sendMessage(form))}>
                <input {...register('name', {required: true, pattern: /^[a-zA-Z]+$/})} placeholder={'Name'}
                       type="text"/>
                <input {...register('mail', {required: true, pattern: /^\S+@\S+$/i})} placeholder={'Email'}
                       type="text"/>
                <textarea {...register('message', {required: true, maxLength: 280})} placeholder={'Your message'}
                          cols={30} rows={10}></textarea>
                <Button type={'submit'} title={'SEND'}/>
            </form>
        </div>
    </Zoom>
};

export default Contacts;