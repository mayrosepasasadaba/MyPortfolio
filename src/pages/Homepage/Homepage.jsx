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
  const projectRef = React.useRef();
  const contactRef = React.useRef();
  const [currentPage, setCurrentPage] = React.useState("home");

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "home":
        setCurrentPage("home");
        scrollToSection(homeRef);
        break;
      case "about":
        setCurrentPage("about");
        break;
      case "project":
        setCurrentPage("home");
        scrollToSection(projectRef);
        break;
      case "contact":
        setCurrentPage("home");
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
          {currentPage === "home" && (
            <div className="profile-container">
              <Row>
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
          )}
          <div ref={projectRef}>{currentPage === "home" && <Project />}</div>
          <div ref={contactRef}>{currentPage === "home" && <Contacts />}</div>
          {currentPage === "about" && <AboutMe />}
        </Container>
      </Content>
    </Layout>
  );
}
