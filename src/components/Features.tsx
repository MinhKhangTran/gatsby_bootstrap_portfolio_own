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
        <FaTachometerAlt
          aria-hidden="true"
          size="4em"
          className="text-center text-primary"
        />
      ),
      title: "Fast",
      subtitle: (
        <p className="features_subtitle text-center mx-auto lead">
          I use the latest technology to generate fast static websites.Other
          nice features are security and scalability.
        </p>
      ),
    },
    {
      id: 2,
      icon: (
        <FaUniversalAccess
          aria-hidden="true"
          size="4em"
          className="text-center text-primary"
        />
      ),
      title: "Accessible",
      subtitle: (
        <p className="features_subtitle text-center mx-auto lead">
          Websites should be accessible for everyone by default. I use the{" "}
          <strong>W</strong>eb <strong>C</strong>ontent <strong>A</strong>
          ccessibility <strong>G</strong>uideline (<strong>WCAG</strong>) to
          design and create my websites.
        </p>
      ),
    },
    {
      id: 3,
      icon: (
        <FaDatabase
          aria-hidden="true"
          size="4em"
          className="text-center text-primary"
        />
      ),
      title: "CMS",
      subtitle: (
        <p className="features_subtitle text-center mx-auto lead">
          With the help of <strong>C</strong>ontent <strong>M</strong>anagement{" "}
          <strong>S</strong>ystems (<strong>CMS</strong>) you can easily
          maintain and update your content.
        </p>
      ),
    },
    {
      id: 4,
      icon: (
        <FaSearchengin
          aria-hidden="true"
          size="4em"
          className="text-center text-primary"
        />
      ),
      title: "SEO",
      subtitle: (
        <p className="features_subtitle text-center mx-auto lead">
          With <strong>S</strong>earch <strong>E</strong>ngine{" "}
          <strong>O</strong>ptimaztion (<strong>SEO</strong>) your Business will
          play in the top ranks.
        </p>
      ),
    },
  ];
  return (
    <section id="features" className="mt-5 position-relative">
      <img className="features_blob d-none d-lg-block" src={blob} alt="" />
      <Container>
        <Title
          title="My key features"
          subtitle="I pay great attention to these qualities"
        />
        <div className="kasten bg-blue-100">
          <Row>
            {featuresArray.map((feat) => {
              return (
                <Col key={feat.id} lg={6} className="features_col">
                  <div className="wrapper d-flex justify-content-center">
                    {feat.icon}
                  </div>
                  <h3 className="text-primary text-center">{feat.title}</h3>

                  {feat.subtitle}
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Features;
