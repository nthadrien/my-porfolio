
import * as React from 'react';
import Layout from '../components/layout/layout';
import SlideShow from '../components/slideShow/slideShow';
import ProjectHeader from '../components/headers/projectHeader';

const Projects = () => {
    return (
        <Layout>
            <ProjectHeader />
            <SlideShow />
        </Layout>
    );
};

export default Projects;