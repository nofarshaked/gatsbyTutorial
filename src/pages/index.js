import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';

const Homepage = ()=>{
  return (
  <>
    <Layout pageTitle='Home Page' pageHead='This is the home page'>
      <p>This is the home page of my first Gatsby site</p>
    </Layout>
  </>
  );
};

export default Homepage;
