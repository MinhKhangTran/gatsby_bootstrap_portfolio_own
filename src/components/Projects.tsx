import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Title from "./Title";
import blob from "../images/feature_blob.svg";

const Projects = () => {
  return (
    <section id="projects" className="mt-5 position-relative">
      {/* <img className="features_blob d-none d-lg-block" src={blob} alt="" /> */}
      <Container>
        <Title title="Projects" subtitle="A showcase of my latest works" />
        <div className="kasten bg-blue-100">
          <Row>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
