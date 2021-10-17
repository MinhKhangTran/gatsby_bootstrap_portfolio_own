import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

import Title from "./Title";
import blob1 from "../images/project_blob_1.svg";
import blob2 from "../images/project_blob_2.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaExternalLinkAlt } from "react-icons/fa";

interface IProjects {
  allContentfulProject: {
    nodes: [
      {
        id: string;
        title: string;
        desc: { desc: string };
        image: { gatsbyImageData: any };
        url: string;
      }
    ];
  };
}

const Projects = () => {
  const {
    allContentfulProject: { nodes },
  }: IProjects = useStaticQuery(query);

  return (
    <section id="projects" className="mt-5 ">
      <Container>
        <Title title="Projects" subtitle="A showcase of my latest works" />
        <div className="kasten bg-blue-100 position-relative p-5">
          <img
            className="projects_blob projects_blob_1 d-none d-lg-block"
            src={blob1}
            alt=""
          />
          <img
            className="projects_blob projects_blob_2 d-none d-lg-block"
            src={blob2}
            alt=""
          />
          {nodes.map((pro, index) => {
            return (
              <Row key={pro.id} className="py-5 p-lg-4 my-lg-5">
                <Col lg={6} className={`${index % 2 === 0 && "order-lg-2"}`}>
                  <GatsbyImage
                    image={getImage(pro.image.gatsbyImageData)}
                    alt={pro.title}
                    className="rounded"
                  />
                </Col>
                <Col lg={6}>
                  <h3 className="text-primary mt-3 mt-lg-3">{pro.title}</h3>
                  <p className="lead">{pro.desc.desc}</p>
                  <a
                    href={pro.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project_links d-flex align-items-center"
                  >
                    View Demo <FaExternalLinkAlt className="ms-2" />
                  </a>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export const query = graphql`
  {
    allContentfulProject(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        title
        url
        desc {
          desc
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default Projects;
