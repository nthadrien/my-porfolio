import React , { useState , useRef } from 'react';
import * as  styles from './index.module.css';

export default function About() {

    const frms = ["Skills", "Experience", "Education"];
    const [show, setShow] = useState('');
    const line = useRef(null);

    const getFrame = (e) => {
        const pos = e.target.getBoundingClientRect();
        const b = frms.findIndex( it => it === e.target.innerHTML);
        line.current.style.width = `${pos.width}px`;
        line.current.style.marginLeft = (b> 1 ? b*65 : b*50) + 'px';
        setShow(e.target.innerHTML);
    };

    return (
        <section id='about' style={{ minHeight: "90vh"}} className={styles.wrap}>

            <h2>About Me</h2>

            <article className={styles.gallery}>
                <div className={styles.item1}>1</div>
                <div className={styles.item2}>2</div>
                <div className={styles.abtPic}>3</div>
                <div className={styles.abtPic}>5</div>
            </article>

            <aside>
                <h3>What will you like to know?</h3>

                <blockquote>
                    <q>lorem innns nasdjoj sdhias aiwjq </q>
                </blockquote>

                <div className={styles.iframes}>
                    {frms.map( it => <button
                        key={it}
                        className={`${styles.abtBtn} ${ show === it ? styles.active : null }`}
                        onClick={getFrame}>
                        {it}
                    </button>)}
                    <hr ref={line} />
                </div>

                <div className={styles.abtPages}>
                    <h3> Hey show us : {show} </h3>
                    { 
                    show === 'Skills' ? <p>Lorem 1 .....</p>: 
                    show === "Experience"? <p>Lorem ... 2</p> : 
                    show === "Education" ? <p>Lorem .... 3 </p> : 
                    null
                    }
                </div>

            </aside>


        </section>
    );
}
