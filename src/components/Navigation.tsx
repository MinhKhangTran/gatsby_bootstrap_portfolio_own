import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/MKT.svg";

const Navigation = () => {
  const navArray = [
    { id: 1, url: "#features", title: "Features" },
    { id: 2, url: "#projects", title: "Projects" },
    { id: 3, url: "#contact", title: "Contact" },
  ];

  return (
    <Navbar bg="white" expand="lg">
      <Container className="align-items-center">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="MKT" />
        </Link>
        <Navbar.Toggle aria-controls="my-navbar-nav" />
        <Navbar.Collapse id="my-navbar-nav">
          <Nav className="ms-auto">
            {navArray.map((nav) => {
              const { id, url, title } = nav;
              return (
                <Nav.Link className="text-primary" key={id} href={url}>
                  {title}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
