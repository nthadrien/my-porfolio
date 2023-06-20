import React, { useContext, useState } from "react";

import * as styles from './theme.module.css';
import { ThemeContext } from "../../contexts/themeContext";

import { themesAvailable } from "../../personalInfo/data";

const Theme = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    const findIt = () => {
        const b = themesAvailable.find(t=> t.name === theme );
        return <b.Img className={styles.tIcon} />
    }

    return (
        <div className={styles.themeSwitch}>

            <div className={styles.tIndicator}>
                {findIt()}
            </div>

            {themesAvailable[0] && themesAvailable.map(
                them => <button
                    key={them.name}
                    onClick={() => changeTheme(them.name)}
                    className={theme === them.name ? styles.currentTheme : null}
                >
                    <them.Img className={styles.tIcon} />
                </button>
            )}
        </div>
    );
};

export default Theme;