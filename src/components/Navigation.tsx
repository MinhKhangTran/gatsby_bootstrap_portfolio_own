import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";
import logo from "../images/MKT.svg";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const navArray = [
    { id: 1, url: "#features", title: "Features" },
    { id: 2, url: "#projects", title: "Projects" },
    { id: 3, url: "#contact", title: "Contact" },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="white" expand="lg">
      <Container className="align-items-center">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="MKT" />
        </Link>
        <Nav className="ms-auto d-none d-lg-flex ">
          {navArray.map((nav) => {
            const { id, url, title } = nav;
            return (
              <Nav.Link className="text-primary" key={id} href={url}>
                {title}
              </Nav.Link>
            );
          })}
        </Nav>
        <Button
          variant="transparent"
          className="text-primary d-lg-none"
          onClick={handleShow}
          aria-label="toggle Navigation"
        >
          <span className="visually-hidden">toggle Navigation</span>
          <FaBars size="1.5em" />
        </Button>
        <Offcanvas placement="end" show={show} onHide={handleClose}>
          <Offcanvas.Header className="ms-auto" closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="sidebar_nav flex-column">
              {navArray.map((nav) => {
                const { id, url, title } = nav;
                return (
                  <Nav.Link onClick={handleClose} key={id} href={url}>
                    {title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
