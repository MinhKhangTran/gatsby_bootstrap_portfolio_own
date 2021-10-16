import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Title from "./Title";
import blob from "../images/feature_blob.svg";

const Contact = () => {
  return (
    <section id="contact" className="mt-5 position-relative">
      {/* <img className="features_blob d-none d-lg-block" src={blob} alt="" /> */}
      <Container>
        <Title
          title="Contact"
          subtitle="Fell free to contact me and I will get back to you as soon as possible!"
        />
        <div className="kasten bg-blue-100">
          <Row>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
