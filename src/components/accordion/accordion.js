import React, { useState } from 'react';
import { Link } from 'gatsby';

import * as styles from './accordion.module.css';


const Accordion = ({ name, description , link }) =>{

    const [ open, setOpen ] = useState(false);

    const clicked = () => setOpen(!open);

    const leaving = () => setOpen(false);

    return (
        <div className={styles.accordion} onClick={clicked} onMouseLeave={leaving}>
            <h3>{name}   <span>{open?'-':'+'}</span></h3>
            <div className={open? styles.show : styles.hide}>
                <p>{description}</p>
                <Link to={`/projects/${link}`}>More Info &gt;</Link>
            </div>
        </div>
    );
};

export default Accordion;