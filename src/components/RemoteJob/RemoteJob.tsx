import React from 'react';
import s from './RemoteJob.module.scss'
import Contacts from "../Contacts/Contacts";
import Button from "../../common/Button/Button";

const Zoom = require('react-reveal/Zoom')
const RemoteJob = () => {
    return <div className={s.remoteContacts}>
        <div className={s.remote}>
            <Zoom>
                <h2>Search devs for remote work?
                    Here I am!</h2>
            </Zoom>
                <Button title={'Press Me!'}/>

        </div>
        <Contacts/>
    </div>

};

export default RemoteJob;