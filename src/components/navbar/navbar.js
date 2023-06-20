

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

            {open && <section className={styles.navMenu}>

                <aside>
                    {pages.map(pag => <Link key={pag.name} to={pag.go}> {pag.name}</Link>)}
                </aside>

                <aside>
                    <blockquote>
                        <q>
                            The steps through wish you work are always enjoyable.
                            No matter how harsh your path is, be grateful.
                        </q>

                        <br />
                        <small># nthadrien.</small>
                    </blockquote>
                </aside>

                <span className={styles.low}>&copy; 2023 nthadrien</span>

            </section>}
        </nav>
    )
}

export default Navbar;