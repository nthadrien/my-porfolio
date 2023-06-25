import * as React from "react";

import * as styles from './index.module.css';
import Accordion from "../components/accordion/accordion";
import IndexHeader from "../components/headers/indexHeader";
import Layout from '../components/layout/layout.js';
import About from "./about";

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
    <div>
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

const IndexPage = () => {
  return (
    <Layout>

      <IndexHeader />

      <About />

      <AccordContainer />

    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
