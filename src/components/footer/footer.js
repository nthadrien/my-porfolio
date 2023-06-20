import * as React from 'react';
import { Link, navigate } from 'gatsby';

import ContactForm from '../contactForm/cForm';

import { footer, fooSvgs, foo, lower } from './footer.module.css';
import { pages } from '../../personalInfo/data';

import  Fb from '../../assets/social-icons/fb.svg';
import Gm from '../../assets/social-icons/gmail.svg';
import Gh from '../../assets/social-icons/github.svg';

const Footer = () => {

    const goingTo = (a) => {
        console.log(a);
    };

    return (

        <footer className={footer}>

            <h1>Contact.</h1>

            <ContactForm />

            <div className={foo} >
                <Fb className={fooSvgs} onClick={ () => goingTo(',e') } />
                <Gm className={fooSvgs} onClick={ () => goingTo(',e') } />
            </div>

            <div className={lower}>
                <p>&copy; 2023 nthadrien copy rights</p>
                <div>
                    <button onClick={ () => goingTo('www.github.com') }>
                        <Gh height={12} width={12} fill={'white'} /> Github
                    </button>
                    {pages.map(pag => <Link key={pag.name} to={pag.go}> {pag.name}</Link>)}
                </div>
                <p style={{ width: "100%"}}>made with Gatsby v5.11</p>
            </div>


        </footer>
    )
};

export default Footer;