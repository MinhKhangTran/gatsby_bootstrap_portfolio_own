import * as React from "react";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import SEO from "../components/Seo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero />
      <Features />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
