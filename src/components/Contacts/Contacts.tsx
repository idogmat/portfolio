import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Contacts.module.scss'
import Button from "../../common/Button/Button";
import {IForm, sendMail} from "../../api";
import ModalMessageSent from "./modalMessageSent";

const Zoom = require('react-reveal/Zoom')

const Contacts = () => {
    const [form, setForm] = useState<IForm>({name: '', mail: '', message: ""})
    const [statusSent, setStatus] = useState<boolean>(false)
    const changeField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof IForm) => {
        setForm(form => ({...form, [field]: e.target.value,}))
    }
    useEffect(() => {
        statusSent && setTimeout(() => {
            setStatus(false)
        }, 3000)
    }, [statusSent])
    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await sendMail(form)
        setStatus(res)
        res && setForm({name: '', mail: '', message: ""})
    }
    return <Zoom>
        <div id={'contacts'} className={s.contacts}>
            <h2>Contacts</h2>
            {statusSent ? <ModalMessageSent/> : ''}
            <form className={s.sendForm} onSubmit={sendMessage}>
                <input value={form.name} onChange={(e) => changeField(e, 'name')} placeholder={'Name'} type="text"/>
                <input value={form.mail} onChange={(e) => changeField(e, "mail")} placeholder={'Email'} type="text"/>
                <textarea value={form.message} onChange={(e) => changeField(e, "message")} placeholder={'Your message'}
                          name="" id="" cols={30} rows={10}></textarea>
                <Button title={'SEND'}/>
            </form>
        </div>
    </Zoom>
};

export default Contacts;