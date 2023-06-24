import * as React from "react";

import * as styles from './index.module.css';
import Accordion from "../components/accordion/accordion";
import IndexHeader from "../components/headers/indexHeader";
import Layout from '../components/layout/layout.js';


const AccordContainer = () => {

  const bg = React.useRef(null);

  const dum = {
    name: 'Python',
    description: ' Ipsum dolor sit amet consectetur '
  };

  const generateRandom = () => {
    const chose = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    var color = '#';
    for( let i=0 ; i < 6 ; i++) {
      color += chose[Math.ceil(Math.random()*14)]
    };
    return color;
  }

  const changeBg = (name) => {
    console.log(generateRandom());
    bg.current.style.background = generateRandom();
  };

  return (
    <div ref={bg}>
    <section className={styles.wrap}>
      <h2>Languages & Frameworks </h2>
      <aside className={styles.ver2}>

        <Accordion
          info={dum}
          changeBg={changeBg}
        />
        <Accordion
          info={dum}
          changeBg={changeBg}
        />
      </aside>
    </section>
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <IndexHeader />

      <section className={styles.wrap}>
        <h2> Experiences </h2>
        <aside>
          <ul>
            <li>+2 years Frontend : Vue Js, Next Js, Gatsby Js, React Js </li>
            <li>+1 years Backend : Express Js, Nest Js </li>
            <li>+1 UI Designer (self-projects): Gimp, Libresprite Ms Word, Power Point & Publisher</li>
          </ul>
        </aside>

        <aside className={styles.bigText}>

          <h1>Jobs & Skills</h1>

          <ul style={{ color: "darkcyan", fontSize: '1.2rem' }}>
            <li>Frontend dev</li>
            <li>Backend dev</li>
            <li>Ui designs</li>
          </ul>

        </aside>

      </section>

      <section className={styles.wrap}>

        <aside className={styles.bigText}>
          <h2>Education</h2>
          <p>Header Test for Bigger text</p>
        </aside>

        <aside>
          <h3>Education</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem obcaecati sapiente sit ut expedita veniam, magni optio. Et iure rem, velit sunt sequi sit ullam saepe beatae quo sint?</p>
          <ul>
            <li>MSc Physics</li>
            <li>BSc Physics</li>
          </ul>
          
        </aside>

      </section>

      <AccordContainer />

    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
