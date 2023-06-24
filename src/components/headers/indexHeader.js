import React, { useContext, useEffect, useRef, useState } from "react";
import { navigate } from "gatsby";
import * as styles from './indexHeader.module.css';

import { ThemeContext } from '../../contexts/themeContext';

const IndexHeader = () => {

    const { theme } = useContext(ThemeContext);
    const textZone = useRef(null);
    const curso = useRef(null);

    const text = "Hello, Welcome to my Portfolio !!! < My name is John,< I am a Javascript Developper";

    useEffect(() => {

        let i = 0;
        var writting;

        function write() {
            if (i === text.length - 1) {
                curso.current.classList.remove(styles.typewritting);
                clearInterval(writting);
            }
            if ( text[i] === '<' ) {
                textZone.current.innerHTML += `<br/>`
                i = i + 2;
                return;
            } else {
                textZone.current.innerHTML += text[i];
                i = i + 1
            };
            if (i === 1) writting = setInterval(write, 90);
        };
        setTimeout(write, 2300);
        return () => clearInterval(writting);
    }, []);

    return (
        <header>

            <div id={theme} className={styles.headerWrap} >
                <h1>
                    <span ref={textZone}></span>
                    <span ref={curso} className={styles.typewritting}>.</span>
                </h1>
                <p>This is like a little show case webpage</p>

                <div className={styles.nex}>
                    <button onClick={() => navigate('/projects')}>Projects</button>
                    <button onClick={() => navigate('/about')}>About Me</button>
                </div>
            </div>

        </header>
    )
};

export default IndexHeader;