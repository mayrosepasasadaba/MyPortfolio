import * as React from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Layout, Menu, Button } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Project from "./Projects/Project";
import Contacts from "./Contacts/Contacts";
import AboutMe from "./AboutMe/AboutMe";
import profile from "../../assets/images/logo.png";
import "../../styles/CommonStyles.css";
import "./Homepage.css";

export default function Homepage() {
  const sections = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
    { key: "project", label: "Projects" },
  ];
  const homeRef = React.useRef();
  const aboutRef = React.useRef();
  const projectRef = React.useRef();
  const contactRef = React.useRef();

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "home":
        scrollToSection(homeRef);
        break;
      case "about":
        scrollToSection(aboutRef);
        break;
      case "project":
        scrollToSection(projectRef);
        break;
      case "contact":
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <Layout className="main-layout" ref={homeRef}>
      <Header className="homepage-header">
        <div className="demo-logo" />
        <Title level={5} className="header-title">
          Maywose Portfolio
        </Title>
        <Menu
          theme="light"
          mode="horizontal"
          items={sections}
          style={{
            flex: 1,
            minWidth: 0,
          }}
          className="menu-container"
          onClick={handleMenuClick}
        />
      </Header>
      <Content className="main-content">
        <Container fluid className="">
          <div>
            <Row className="profile-container">
              <Col xs={24} md={24} lg={12} className="center left-section">
                <div>
                  <Row className="role-title">Software Engineer</Row>
                  <Row className="mt-3">
                    <Title level={1} className="specialty-title">
                      Hi! My name is Mayrose Pasasadaba
                    </Title>
                  </Row>
                  <Row className="mt-4 profile-buttons">
                    <Button
                      onClick={() => scrollToSection(projectRef)}
                      className="project"
                    >
                      Projects
                    </Button>
                    <a
                      className="linkedin"
                      href="http://linkedin.com/in/mayrose-pasasadaba"
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Row>
                </div>
              </Col>
              <Col xs={24} md={24} lg={12} className="center right-section">
                <div className="image-container">
                  <img src={profile} alt="img" className="w-100" />
                </div>
              </Col>
            </Row>
          </div>

          <div ref={aboutRef}>
            <AboutMe />
          </div>

          <div ref={projectRef}>
            <Project />
          </div>

          <div ref={contactRef}>
            <Contacts />
          </div>
        </Container>
      </Content>
    </Layout>
  );
}
