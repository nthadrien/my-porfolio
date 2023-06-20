import React, {  createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();


export const ThemeContextProvider = ({ children }) => {

    const [ theme , setTheme ] = useState('dark');

    const changeTheme = ( a ) => {
        setTheme(a);
    };

    useEffect(()=>{
        console.log('check from cache');
    },[]);

    useEffect(()=>{
        console.log('saving theme......');
    },[theme]);

    return (
        <ThemeContext.Provider value={{ theme , changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};