import React from "react";
import Layout from "./src/components/layout/layout";
import { ThemeContextProvider } from "./src/contexts/themeContext";

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeContextProvider>
            <Layout>
                {element}
            </Layout>
        </ThemeContextProvider>
    );
};