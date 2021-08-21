import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image";

const Homepage = ()=>{
  return (
  <>
    <Layout pageTitle='Home Page' pageHead='This is the home page'>
      <p>This is the home page of my first Gatsby sites</p>
      <StaticImage src="../images/image-01.jpg" alt="tree"/>
    </Layout>
  </>
  );
};

export default Homepage;
