import React from 'react';
import s from './Contacts.module.scss'
const Contacts = () => {
    return (
        <div className={s.contacts}>
            <h4>Contacts</h4>
            <form className={s.sendForm} action="">
                <input placeholder={'Name'} type="text"/>
                <input placeholder={'Email'} type="text"/>
                <textarea placeholder={'Your message'} name="" id="" cols="30" rows="10"></textarea>
                <button>SEND</button>
            </form>

        </div>
    );
};

export default Contacts;