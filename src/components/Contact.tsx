import React, { useState } from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Button,
  Row,
} from "react-bootstrap";

import Title from "./Title";
import blob from "../images/contact_blob.svg";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e: any): void => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <section id="contact" className="section position-relative">
      <img className="features_blob d-none d-lg-block" src={blob} alt="" />
      <Container className="contact_container">
        <Title
          title="Contact"
          subtitle="Fell free to contact me and I will get back to you as soon as possible!"
        />
        <div className="kasten bg-blue-100 contact_kasten mt-4">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="contact_form">
              <Col lg={6}>
                <FloatingLabel
                  className="mb-4"
                  controlId="floatingFirstName"
                  label="First name"
                >
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ color: "#890e1a" }}
                  >
                    Please provide a first name
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={6}>
                <FloatingLabel
                  className="mb-4"
                  controlId="floatingLastName"
                  label="Last name"
                >
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ color: "#890e1a" }}
                  >
                    Please provide a last name
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <FloatingLabel
                  controlId="floatingEmail"
                  label="Email address"
                  className="mb-4"
                >
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@example.com"
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ color: "#890e1a" }}
                  >
                    Please provide an email
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <FloatingLabel controlId="floatingTextarea" label="Message">
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Leave a message here"
                    style={{ height: "150px" }}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ color: "#890e1a" }}
                  >
                    Please provide a message
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <Button type="submit" className="mt-4">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
