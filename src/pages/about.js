
import * as React from 'react';

import * as styles from './index.module.css';
import SlideShow from "../components/slideShow/slideShow";
import Layout from '../components/layout/layout';

const maxW = {
    maxWidth: "1200px",
    padding: " 2rem 1rem",
    margin: "0 auto"
}

const About = () => {
    return (
        <Layout>
            <section style={maxW}>
                I'm just a Self taught bla bla bla bla ...............
                lorem
            </section>

            <section style={maxW}>
                <h2>My Hobbies</h2>
            </section>

            <section style={maxW}>
                <h2>Other Skills</h2>
            </section>

            <div style={maxW}>
                <h1>This is th about Page</h1>
            </div>

            <aside className={styles.bigText}>
                <h2> Languages & Frameworks</h2>
                <SlideShow data={[]} />
            </aside>

            
        </Layout>
    );
};

export default About;

export const Head = () => <title>About</title>