import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaChevronCircleUp } from "react-icons/fa";
import logo from "../images/MKT.svg";

const Navigation = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 200 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [visible]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navArray = [
    { id: 1, url: "#features", title: "Features" },
    { id: 2, url: "#projects", title: "Projects" },
    { id: 3, url: "#blog", title: "Blog" },
    { id: 4, url: "#contact", title: "Contact" },
  ];

  return (
    <>
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
      </Navbar>{" "}
      <div className="back_to_top">
        <FaChevronCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </div>
    </>
  );
};

export default Navigation;
