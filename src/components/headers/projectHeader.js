import React, { useEffect, useRef , useContext } from 'react';
import { navigate } from 'gatsby';

import { ThemeContext } from '../../contexts/themeContext';

import * as styles from './indexHeader.module.css';

export default function ProjectHeader() {

    const { theme } = useContext(ThemeContext);
    const textZone = useRef(null);
    const curso = useRef(null);

    const text = "Projects< << (n. n )";

    useEffect(() => {

        let i = 0;
        var writting;

        function write() {
            if (i === text.length - 1) {
                curso.current.classList.remove(styles.typewritting);
                clearInterval(writting);
            }
            if ( text[i] === '<' ) {
                textZone.current.innerHTML += `<br/>`;
                i = i + 2;
            } else {
                textZone.current.innerHTML += text[i];
                i = i + 1
            };
            if (i === 1) writting = setInterval(write, 160);
        };
        setTimeout(write, 2200);
        return () => clearInterval(writting);
    }, []);

    return (
        <header id={theme}>

            <div  style={{ textAlign: 'center', alignItems: 'center'}} className={styles.headerWrap} >
                <h1>
                    <span ref={textZone}></span>
                    <span ref={curso} className={styles.typewritting}>.</span>
                </h1>
                <p>A stack Journey Of wonderful experiences.......</p>
            </div>

        </header>
    );
};
