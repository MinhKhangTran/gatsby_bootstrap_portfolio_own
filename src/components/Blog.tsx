import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container } from "react-bootstrap";
import Title from "./Title";

const Blog = ({ blogs }) => {
  console.log(blogs);

  return (
    <section id="blog" className="section">
      <Container>
        <Title title="Blog" subtitle="My Blog to educate and learn" />
        {blogs.map((blog) => {
          return (
            <div key={blog._id}>
              <h3>{blog.title}</h3>
              <img className="img-fluid" src={blog.coverImage} alt="" />
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Blog;
