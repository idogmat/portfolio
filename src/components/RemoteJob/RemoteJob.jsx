import React from 'react';
import s from './RemoteJob.module.scss'
import Contacts from "../Contacts/Contacts";
import Button from "../../common/Button/Button";
const RemoteJob = () => {
    return (
        <div className={s.remoteContacts}>
            <div className={s.remote}>
            <h2>Search devs for remote work?
                Here I am!</h2>
                <Button title={'Press Me!'}/>
            </div>
            <Contacts/>
        </div>
    );
};

export default RemoteJob;