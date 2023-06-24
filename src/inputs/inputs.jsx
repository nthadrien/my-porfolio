import React from 'react';


import  * as classes from './inputs.module.css';

import Ps from '../assets/inp-icons/person.svg';
import Em from '../assets/inp-icons/at.svg';
import Mail from '../assets/inp-icons/mail.svg';


export const TextInput = ({ name, place, req, def }) => (
    <div className={classes.textInpWrap}>
        <Ps className='icons' />
        <input type="text" name={name} placeholder={place} defaultValue={def} required={req} />
    </div>
);

export const EmailInput = ({ name, place, req, def }) => (
    <div className={classes.textInpWrap}>
        <Em className='icons' />
        <input type="email" name={name} placeholder={place} defaultValue={def} required={req} />
    </div>
);

export const TextArea = ({ name, place, req, def }) => (
    <div className={classes.textInpWrap}>
        <Mail className='icons' />
        <textarea name={name} placeholder={place} defaultValue={def} required={req} />
    </div>
);