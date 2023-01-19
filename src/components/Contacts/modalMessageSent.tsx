import React from 'react';
import s from './Contacts.module.scss'
const ModalMessageSent = () => {
    return (
        <div className={s.overlay}>
            <div className={s.modal}>
                <p className={s.text}>Message Sent</p>
            </div>
        </div>
    );
};

export default ModalMessageSent;