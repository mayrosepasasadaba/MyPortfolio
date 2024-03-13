// Libraries
import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "antd";
// Components
// Resourses and styles
import logo from "../../assets/images/logo.png";
import "../../styles/CommonStyles.css"

export default function Homepage() {
  return (
    <Container fluid className="center">
      <Row className="d-flex justify-content-center">
          <img src={logo} alt="logo" className="w-25"/>
      </Row>
      <Row>WELCOME TO THE HOMEPAGE</Row>
    </Container>
  );
}
