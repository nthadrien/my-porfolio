import * as React from "react";

import IndexHeader from "../components/headers/indexHeader";
import Layout from '../components/layout/layout.js';
import About from "./about";

const IndexPage = () => {
  return (
    <Layout>
      <IndexHeader />
      <About />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Document</title>;