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
      icon: <FaTachometerAlt size="4em" className="text-center text-primary" />,
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
        <FaUniversalAccess size="4em" className="text-center text-primary" />
      ),
      title: "Accessible",
      subtitle: (
        <p className="features_subtitle text-center mx-auto lead">
          Websites should be accessible for everyone by default. I use the{" "}
          <b>W</b>eb <b>C</b>ontent <b>A</b>ccessibility <b>G</b>uideline (
          <b>WCAG</b>) to design and create my websites.
        </p>
      ),
    },
    {
      id: 3,
      icon: <FaDatabase size="4em" className="text-center text-primary" />,
      title: "CMS",
      subtitle: (
        <p className="features_subtitle text-center mx-auto lead">
          With the help of <b>C</b>ontent <b>M</b>anagement <b>S</b>ystems (
          <b>CMS</b>) you can easily maintain and update your content.
        </p>
      ),
    },
    {
      id: 4,
      icon: <FaSearchengin size="4em" className="text-center text-primary" />,
      title: "SEO",
      subtitle: (
        <p className="features_subtitle text-center mx-auto lead">
          With <b>S</b>earch <b>E</b>ngine <b>O</b>ptimaztion (<b>SEO</b>) your
          Business will play in the top ranks.
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
