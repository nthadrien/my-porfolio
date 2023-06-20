
import * as React from 'react';

const maxW = {
    maxWidth:"1200px",
    padding:" 2rem 1rem",
    margin:"0 auto"
}

const About = () => {
    return (
        <>
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
        </>
    );
};

export default About;

export const Head = () => <title>About</title>