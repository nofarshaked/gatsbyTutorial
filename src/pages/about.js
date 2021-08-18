import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';

const About = () => {
    return (
        <Layout pageTitle='About' pageHead='This is the about page'>
            <p>This is the first site I made with Gatsby</p>
        </Layout>
    );
};

export default About;