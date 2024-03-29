import React from 'react';
import s from './RemoteJob.module.scss'
import Contacts from "../Contacts/Contacts";
import Button from "../../common/Button/Button";

const Zoom = require('react-reveal/Zoom')
const RemoteJob = () => {
    return <div className={s.remoteContacts}>
        <div className={s.remote}>
            <Zoom>
                <h2>Remote Work And Relocation Are Considered By Me</h2>
            </Zoom>
            {/*<Button id={'#contacts'} title={'HIRE'}/>*/}
        </div>
        <Contacts/>
    </div>

};

export default RemoteJob;