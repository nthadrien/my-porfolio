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
    const chose = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var color = '#';
    for (let i = 0; i < 6; i++) {
      color += chose[Math.ceil(Math.random() * 14)]
    };
    return color;
  }

  const changeBg = (name) => {
    console.log(generateRandom());
    bg.current.style.background = generateRandom();
  };

  return (
    <div >
      <h2 style={{ textAlign: 'center' }} className={styles.bigText}>
        Languages & Frameworks
      </h2>

      <section ref={bg} className={styles.wrap}>

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

const About = () => {

  return (
    <>
    aboooout
    
    </>
  )

  return (
    <>
      <section className={styles.wrap}>

        <aside>
          <h2> Experiences </h2>
          <ul>
            <li>+2 years Frontend : Vue Js, Next Js, Gatsby Js, React Js </li>
            <li>+1 years Backend : Express Js, Nest Js </li>
            <li>+1 UI Designer (self-projects): Gimp, Libresprite Ms Word, Power Point & Publisher</li>
          </ul>
        </aside>

        <aside className={styles.bigText}>

          <h2>Jobs & Skills</h2>

          <ul style={{ color: "darkcyan", fontSize: '1.2rem' }}>
            <li>Frontend dev</li>
            <li>Backend dev</li>
            <li>Ui designs</li>
          </ul>

        </aside>

      </section>



      <h2 style={{ order: 1 }} className={styles.bigText}> Education </h2>


      <div className={styles.wrap}>
        <section className={styles.wrap}>
          <aside>
            <h3>Hobbies</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem obcaecati sapiente sit ut expedita veniam, magni optio. Et iure rem, velit sunt sequi sit ullam saepe beatae quo sint?</p>
            <ul>
              <li>MSc Physics</li>
              <li>BSc Physics</li>
            </ul>
          </aside>

          <aside>
            <h3>Skills</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem obcaecati sapiente sit ut expedita veniam, magni optio. Et iure rem, velit sunt sequi sit ullam saepe beatae quo sint?</p>
            <ul>
              <li>MSc Physics</li>
              <li>BSc Physics</li>
            </ul>
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
      </div>
    </>
  );
}

const IndexPage = () => {
  return (
    <Layout>

      <IndexHeader />

      <About  />

      <AccordContainer />


      <div>
        hiehiid jij
        <p>
          Lorem iposiuo
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magnam assumenda dolorum iure similique magni eveniet? Voluptates nam sit corporis obcaecati, facere sed tenetur animi, dicta reprehenderit est, libero perspiciatis?

        </p>


        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic harum voluptatibus necessitatibus, ab voluptatum repellat voluptatem sint earum consequuntur libero voluptas. Mollitia vitae doloremque molestias accusantium nostrum ipsum corrupti sunt.
          <span style={{ background:"blue"}} id='about'>Killl it</span>
        </p>
      </div>

    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
