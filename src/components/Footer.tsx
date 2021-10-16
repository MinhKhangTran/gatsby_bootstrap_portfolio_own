import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/MKT_white.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-700">
      <Container className="">
        <Row className="pt-5 pb-4">
          <Col lg={8}>
            <Link to="/" className="">
              <img src={logo} alt="MKT" />
            </Link>
          </Col>
          <Col lg={2} className="text-white">
            <h4>Home</h4>
            <ul className="list-unstyled">
              <li>
                <a className="footer_links" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="footer_links" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="footer_links" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2} className="text-white">
            <h4>Legal</h4>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
