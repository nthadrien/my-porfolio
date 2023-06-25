import React, { useEffect, useRef , useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext';

import * as styles from './indexHeader.module.css';

export default function ProjectHeader() {

    const { theme } = useContext(ThemeContext);
    const textZone = useRef(null);
    const curso = useRef(null);
    const glitch = useRef(null)

    const text = "Projects< << (n. n )";

    useEffect(() => {
        let i = 0;
        var writting;

        function write() {
            if ( i > text.length - 1 ) {
                curso.current.classList.remove(styles.typewritting);
                clearTimeout(writting);
                return;
            };
            if ( text[i] === '<' ) {
                textZone.current.innerHTML += `<br/>`;
                i = i + 2;
            } else {
                textZone.current.innerHTML += text[i];
                i = i + 1
            };
            setTimeout(write, 90);
        };

        setTimeout(write, 2300);
        return () => clearTimeout(writting);
    }, []);

    return (
        <header id={theme}>

            <div ref={glitch}  style={{ textAlign: 'center', alignItems: 'center'}} className={styles.headerWrap} >
                <h1>
                    <span ref={textZone}></span>
                    <span ref={curso} className={styles.typewritting}>.</span>
                </h1>
                <br />
                <p>A stack Journey Of wonderful experiences.......</p>
            </div>

        </header>
    );
};
