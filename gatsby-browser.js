import React from "react";
import { ThemeContextProvider } from "./src/contexts/themeContext";

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeContextProvider>
            {element}
        </ThemeContextProvider>
    );
};