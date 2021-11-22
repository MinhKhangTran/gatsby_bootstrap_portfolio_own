import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaDatabase,
  FaSearchengin,
  FaTachometerAlt,
  FaUniversalAccess,
} from "react-icons/fa";
import Title from "./Title";
import blob from "../images/feature_blob.svg";

const Features = () => {
  const featuresArray = [
    {
      id: 1,
      icon: (
        <FaUniversalAccess
          aria-hidden="true"
          size="4em"
          className=" text-primary"
        />
      ),
      title: "Accessible",
      subtitle: (
        <p className="features_subtitle  lead">
          Websites should be accessible for everyone by default. I use the{" "}
          <strong>W</strong>eb <strong>C</strong>ontent <strong>A</strong>
          ccessibility <strong>G</strong>uideline (<strong>WCAG</strong>) to
          design and create my websites.
        </p>
      ),
    },

    {
      id: 2,
      icon: (
        <FaSearchengin
          aria-hidden="true"
          size="4em"
          className=" text-primary"
        />
      ),
      title: "SEO & CRO",
      subtitle: (
        <p className="features_subtitle  lead">
          With <strong>S</strong>earch <strong>E</strong>ngine{" "}
          <strong>O</strong>ptimaztion (<strong>SEO</strong>) your Business will
          get traffic while <strong>C</strong>onversion <strong>R</strong>ate{" "}
          <strong>O</strong>ptimization will increase your goal achievements.
        </p>
      ),
    },
    {
      id: 3,
      icon: (
        <FaTachometerAlt
          aria-hidden="true"
          size="4em"
          className=" text-primary"
        />
      ),
      title: "Fast",
      subtitle: (
        <p className="features_subtitle  lead">
          I use the latest technology to generate fast static websites.Other
          nice features are security and scalability.
        </p>
      ),
    },
    {
      id: 4,
      icon: (
        <FaDatabase aria-hidden="true" size="4em" className=" text-primary" />
      ),
      title: "CMS",
      subtitle: (
        <p className="features_subtitle  lead">
          With the help of <strong>C</strong>ontent <strong>M</strong>anagement{" "}
          <strong>S</strong>ystems (<strong>CMS</strong>) you can easily
          maintain and update your content.
        </p>
      ),
    },
  ];
  return (
    <section id="features" className="position-relative section">
      <img className="features_blob d-none d-lg-block" src={blob} alt="" />
      <Container>
        <Row className="">
          <Col md={4} lg={4}>
            <Title
              title="My key features"
              subtitle="I pay great attention to these qualities"
            />
          </Col>
          <Col md={8} lg={8}>
            <Row>
              {featuresArray.map((feat) => {
                return (
                  <Col
                    key={feat.id}
                    lg={6}
                    className="features_col mt-3 mt-md-0 mb-md-3"
                  >
                    <div className="wrapper d-flex">{feat.icon}</div>
                    <h3 className="text-primary">{feat.title}</h3>

                    {feat.subtitle}
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
