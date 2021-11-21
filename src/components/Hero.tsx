import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="hero" className="mt-4 mt-lg-0">
      <Container className="hero_container">
        <Row>
          <Col md={6} className="my-auto">
            <span className="hero_span d-none d-lg-block">Hi I'm</span>
            <h1 className="text-primary">Be accessible everywhere</h1>
            <p className="hero_subtitle">
              I make accessible & fast websites{" "}
              <br className="d-none d-md-flex" /> that will grow your business
            </p>
            <div className="hero_button_wrapper d-flex justify-content-center justify-content-md-start">
              <Button size="lg" href="#contact">
                Hire me
              </Button>
            </div>
          </Col>
          <Col md={6} className="order-first order-md-last">
            <div className="image_wrapper d-none d-md-flex">
              <StaticImage
                src="../images/hero_blob-min.png"
                alt="hero_image_mkt_lg"
              />
            </div>
            <div className="image_wrapper d-md-none d-flex justify-content-center">
              <StaticImage
                src="../images/Hero-min.png"
                alt="hero_image_mkt_sm"
                height={80}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
