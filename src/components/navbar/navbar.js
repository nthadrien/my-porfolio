

import React, { useState } from 'react';
import { Link } from 'gatsby';

import * as styles from './navbar.module.css';


import { pages } from '../../personalInfo/data';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const change = (e) => setOpen(!open);

    return (
        <nav className={styles.nav}>
            <p>
                hADrieN.
            </p>

            <button onClick={() => change()} className={`${styles.hamburger} ${open ? styles.twist : null}`}>
                <span className={styles.bar1}></span>
                <span className={styles.bar2}></span>
                <span className={styles.bar3}></span>
            </button>

            <section className={`${styles.navLinks} ${open ? styles.openMenu : ''}`}>

                {pages.map(pag => <Link key={pag.name} to={pag.go}> {pag.name}</Link>)}

                <blockquote>
                    <q>
                        The steps through wish you walk are always enjoyable.
                        No matter how harsh your path is, be grateful.
                    </q>
                    <br />
                    <p># nthadrien.</p>
                </blockquote>

                <p className={styles.low}>&copy; 2023 nthadrien</p>
            </section>
        </nav>
    )
}

export default Navbar;