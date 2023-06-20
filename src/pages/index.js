import * as React from "react";

import * as styles from './index.module.css';
import Accordion from "../components/accordion/accordion";
import SlideShow from "../components/slideShow/slideShow";

const IndexPage = () => {
  return (
    <>
      <header>
        Home
      </header>
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
          
          <ul style={{ color : "darkcyan", fontSize:'1.2rem'}}>
              <li>Frontend dev</li>
              <li>Backend dev</li>
              <li>Ui designs</li>
          </ul>

        </aside>

      </section>

      <section className={styles.wrap}>

        <aside className={styles.bigText}>
          <h2>Background</h2>
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

      <section className={styles.wrap}>

        <aside>

          <Accordion
            name='Javascript'
            description=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus ratione earum distinctio vitae illo molestiae excepturi? Nihil ratione repellat assumenda facilis repellendus, officia iusto neque consequatur iste eligendi veniam'
          />
          <Accordion
            name='Python'
            description=' Ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus ratione earum distinctio vitae illo molestiae excepturi? Nihil ratione repellat assumenda facilis repellendus, officia iusto neque consequatur iste eligendi veniam'
          />
        </aside>

        <aside className={styles.bigText}>
          <h2> Languages & Frameworks</h2>
          <SlideShow data={[]} />
        </aside>

      </section>

    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
