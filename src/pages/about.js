import React, { useState, useRef } from 'react';
import * as  styles from './index.module.css';


const abtStyle = {
    width: "100%",
    minHeight:"100vh",
    justifyContent: "flex-end",
}

export default function About() {

    const frms = ["Skills", "Experiences", "Education"];
    const [show, setShow] = useState('Skills');
    const line = useRef(null);
    const btns = useRef([]);

    const getFrame = (e) => {
        line.current.style.marginLeft = (80 * e) + 16 + 'px';
        line.current.style.width = `${48}px`;
        setShow(btns.current[e].innerHTML);
    };

    return (
        <div id='about' style={abtStyle}>
            
            <div style={{ height:"64px"}}></div>

            <section className={styles.wrap}>

                <article className={styles.gallery}>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.abtPic}>P</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                </article>

                <aside>
                    <h2>About Me</h2>
                    <blockquote>
                        <q>No man ever steps in the same river twice, for it's not the same river and he's not the same man.
                        </q>
                        <br />
                        <a href='https://www.brainyquote.com/topics/experience-quotes'>
                            Heraclitus
                        </a>
                    </blockquote>

                    <div className={styles.iframes}>
                        {frms.map((it, idx) => <button
                            ref={el => btns.current.push(el)}
                            key={it}
                            className={`${styles.abtBtn} ${show === it ? styles.active : null}`}
                            onClick={() => getFrame(idx)}>
                            {it}
                        </button>)}
                        <hr ref={line} />
                    </div>

                    <div className={styles.abtPages}>
                        <h3> {show}: </h3>
                        {
                            show === "Experiences" ? <Experience /> :
                                show === "Education" ? <Education /> :
                                    <Skills />
                        }
                    </div>

                </aside>


            </section>

        </div>
    );
};


const Skills = () => (<ul>
    <li>Good in analytical and problem-solving domains.</li>
    <li>Disciplined and self-awareness.</li>
    <li>Adpatability on Team Workflow.</li>
</ul>);

const Experience = () => (<ul>
    <li>
        <h4>2 years in Web dev.</h4>
        <ul>
            <li>Frontend: React js (Gatsby, Next) , Vue js & Hugo </li>
            <li>Backend: Node js (Express & Nest js) </li>
        </ul>
    </li>
    <li>
        <h4>4 months in Mobile dev</h4>
        <ul>
            <li>ReactNative</li>
            <li>Flutter</li>
        </ul>
    </li>
</ul>);

const Education = () => (<ul>
    <li>M.Sc in Theoretical Phyics</li>
    <li>B.Sc in Theoretical Physics.</li>
    <li>Self-taught software developper.</li>
</ul>);