import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../images/MKT_white.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-700">
      <Container className="">
        <Row className="pt-5 pb-4 footer_container mb-4">
          <Col lg={8} className="mb-4">
            <Link to="/" className="">
              <img src={logo} alt="MKT" />
            </Link>
          </Col>
          <Col lg={2} xs={6} className="text-white">
            <h3>Home</h3>
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
          <Col lg={2} xs={6} className="text-white">
            <h3>Legal</h3>
            <ul className="list-unstyled">
              <li>
                <Link className="footer_links" to="privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="footer_links" to="terms">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer_socials pb-4 d-flex justify-content-between align-items-center">
          <span className="lead text-white">
            &copy; {new Date().getFullYear()}, MKT. All rights reserved
          </span>
          <div className="socials text-white">
            <a href="https://twitter.com/">
              <FaTwitter className="social_icon" />
              <span className="visually-hidden">Twitter</span>
            </a>
            <a href="https://github.com/">
              <FaGithub className="social_icon" />
              <span className="visually-hidden">Github</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
