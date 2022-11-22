import React from 'react';
import s from './Main.module.css'
const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.mainHero}>
                <div className={s.heroInfo}>
                    <h4>Hi!
                        I'm Frontend developer.
                        Please give me job offer</h4>
                </div>
                <div className={s.heroPhoto}>
                    <img src="https://st2.depositphotos.com/4382933/8085/i/950/depositphotos_80858016-stock-photo-hands-bound-men-and-money.jpg" alt="alt"/>
                </div>
            </div>
        </div>
    );
};

export default Main;