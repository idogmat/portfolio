import React from 'react';
import s from './Contacts.module.scss'
import Button from "../../common/Button/Button";
const Zoom = require('react-reveal/Zoom')
const Contacts = () => {
    return <Zoom>
        <div id={'contacts'} className={s.contacts}>
            <h2>Contacts</h2>
            <form className={s.sendForm} action="">
                <input placeholder={'Name'} type="text"/>
                <input placeholder={'Email'} type="text"/>
                <textarea placeholder={'Your message'} name="" id="" cols="30" rows="10"></textarea>
                <Button title={'SEND'}/>
            </form>

        </div>
    </Zoom>
};

export default Contacts;