import React from "react";
import { navigate } from "gatsby";
import * as styles from './indexHeader.module.css';

const IndexHeader = () => {
    return (
        <header>

            <section className={styles.wrap} >

                <aside>
                    img
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quam consequuntur asperiores provident expedita quibusdam cum voluptate, laboriosam voluptatem quod, quo, et doloribus. Ratione voluptatibus eveniet hic provident! Quos, voluptatem.
                </aside>

                <aside>
                    <h2>
                        <span className={styles.typewriting}>Hello, I am Hadrien.</span>
                        <span className={styles.typewriting}>I am a Javascript </span>
                        <span className={styles.typewriting}>Fullstack Web developper.</span>
                    </h2>

                    <p>This is like a little show case webpage</p>

                    <div className={styles.nex}>
                        <button onClick={() => navigate('/projects')}>Projects</button>
                        <button onClick={() => navigate('/about')}>About Me</button>
                    </div>
                </aside>

            </section>

        </header>
    )
};

export default IndexHeader;