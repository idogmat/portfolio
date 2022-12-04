import React from 'react';
import s from './RemoteJob.module.scss'
import Contacts from "../Contacts/Contacts";
const RemoteJob = () => {
    return (
        <div className={s.remoteContacts}>
            <div className={s.remote}>
            <h4>Search devs for remote work?
                Here I am!</h4>
                <button>Press Me!</button>
            </div>
            <Contacts/>
        </div>
    );
};

export default RemoteJob;