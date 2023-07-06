import React, { useContext, useEffect, useRef } from "react";
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
        const wipe = () => curso.current.classList.remove(styles.typewritting)

        function write() {
            if ( i > text.length - 1 ) {
                setTimeout(wipe, 2000);
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
            setTimeout(write, 70);
        };

        setTimeout(write, 2300);
        return () => {
            clearTimeout(writting);
            clearTimeout(wipe);
        };
    }, []);

    return (
        <header>
            <div id={theme} className={styles.headerWrap} >
                <h1>
                    <span ref={textZone}></span>
                    <span ref={curso} className={styles.typewritting}>.</span>
                </h1>
                <br/>
                <p>This is a plain static webpage</p>

                <div className={styles.nex}>
                    <button onClick={() => navigate('/projects')}>Projects</button>
                    <button onClick={() => navigate('/about')}>About Me</button>
                </div>
            </div>
        </header>
    )
};

export default IndexHeader;