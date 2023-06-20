import React from "react";
import { Link } from "gatsby";
import * as styles from './cards.module.css';


const FlipCard = ({ info }) => {

    return (
        <Link to='' className={styles.flipCard}>
            <div className={styles.cardFlipBox}>

                <div className={styles.cardFace}>
                    {info.front}
                </div>

                <div className={styles.cardBack}>
                    {info.back}
                </div>
            </div>
        </Link>
    );
};

export default FlipCard;