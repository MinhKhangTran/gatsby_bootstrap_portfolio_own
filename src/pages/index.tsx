import * as React from "react";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import SEO from "../components/Seo";

// markup
const IndexPage = () => {
  // const blogs = serverData.data.user.publication.posts;

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

// Fetching post from Hashnode with ssr
// export async function getServerData() {
//  const query = `
//  {
//      user(username: "khang93") {
//        publication {
//          posts(page: 0) {
//            title
//            brief
//            slug
//            coverImage
//            contentMarkdown
//            _id
//          }
//        }
//      }
//    }
//  `;
//
//  try {
//    const res = await fetch("https://api.hashnode.com/", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//        Accept: "application/json",
//      },
//      body: JSON.stringify({ query }),
//    });
//    if (!res.ok) {
//      throw new Error(`Response failed`);
//    }
//    return {
//      props: await res.json(),
//    };
//  } catch (error) {
//    return {
//      status: 500,
//      headers: {},
//      props: {},
//    };
//  }
//}

export default IndexPage;
