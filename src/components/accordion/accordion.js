import React, { useState } from 'react';
import { Link } from 'gatsby';

import * as styles from './accordion.module.css';


const Accordion = ({ info , changeBg }) =>{

    const { name, description , link } = info;

    const [ open, setOpen ] = useState(false);

    const clicked = () => {
        changeBg(name);
        setOpen(!open);
    };

    const leaving = () => {
        console.log('leaving'); setOpen(false);}

    return (
        <div className={styles.accordion} onClick={clicked} >
            <h3>{name}   <span>{open?'-':'+'}</span></h3>
            <div className={open? styles.show :' '} onMouseLeave={leaving}>
                <p>{description}</p>
                <Link to={`/projects/${link}`}>More +&gt;</Link>
            </div>
        </div>
    );
};

export default Accordion;