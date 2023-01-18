import React, {ChangeEvent, DetailedHTMLProps, FormEventHandler, FormHTMLAttributes, useState} from 'react';
import s from './Contacts.module.scss'
import Button from "../../common/Button/Button";
import {IForm, sendMail} from "../../api";
const Zoom = require('react-reveal/Zoom')

const Contacts = () => {
    const [form,setForm]=useState<IForm>({name:'',mail:'',message:""})
    const changeField=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,field:keyof IForm)=>{
        setForm(form=>({...form,[field]:e.target.value,}))
    }
    const sendMessage=(e:React.FormEvent)=>{
        e.preventDefault()
        sendMail(form)
        setForm({name:'',mail:'',message:""})
    }
    return <Zoom>
        <div id={'contacts'} className={s.contacts}>
            <h2>Contacts</h2>
            <form className={s.sendForm} onSubmit={sendMessage}>
                <input value={form.name} onChange={(e)=>changeField(e,'name')} placeholder={'Name'} type="text"/>
                <input value={form.mail} onChange={(e)=>changeField(e,"mail")} placeholder={'Email'} type="text"/>
                <textarea value={form.message} onChange={(e)=>changeField(e,"message")} placeholder={'Your message'} name="" id="" cols={30} rows={10} ></textarea>
                <Button title={'SEND'}/>
            </form>
        </div>
    </Zoom>
};

export default Contacts;