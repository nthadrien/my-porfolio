import React, { useContext } from 'react';
import './layout.css';

import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Theme from '../theme/theme';
import { ThemeContext } from '../../contexts/themeContext';


const Layout = ({ children }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <div id={theme}>
            <Theme />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;