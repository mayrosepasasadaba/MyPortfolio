// Libraries
import React, { useState, useRef } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Row, Col, Layout, Menu, Divider } from "antd";
// Components
// Resourses and styles
import profile from "../../assets/images/logo.png";
import "../../styles/CommonStyles.css";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

export default function Homepage() {
  const [loremIpsum, setLoremIpsum] = useState("");
  const sections = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
    { key: "project", label: "Projects" },
  ];
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

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

  React.useEffect(() => {
    const fetchLoremIpsum = async () => {
      try {
        const response = await axios.get(
          "https://baconipsum.com/api/?type=all-meat&paras=2&format=text"
        );
        setLoremIpsum(response.data);
      } catch (error) {
        console.error("Error fetching Lorem Ipsum text", error);
      }
    };

    fetchLoremIpsum();
  }, []);

  return (
    <Layout className="main-layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Title level={5} className="header-title">
          Maywose Portfolio
        </Title>
        <Menu
          theme="dark"
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
          
          {/* HOME SECTIONS */}
          <div ref={homeRef}>
          <Row className="profile-container">
            <Col xs={24} md={24} lg={12} className="center left-section">
              <div>
                <Row>Hello, I'm Mayrose,</Row>
                <Row>
                  <Title level={1} className="specialty-title">
                    Frontend Developer
                  </Title>
                </Row>
                <Row>
                  <u
                    onClick={() => scrollToSection(contactRef)}
                    className="pointer"
                  >
                    Contact Me
                  </u>
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

          {/* ABOUT REF */}
          <div ref={aboutRef}>
            <Row className="d-flex justify-content-center">
              <Title level={3} className="specialty-title">
                About
              </Title>
            </Row>
            <Row className="section-paragraph">
              <p>{loremIpsum}</p>
            </Row>
            <Row className="d-flex justify-content-center">
              <Title level={3} className="specialty-title">
                Skills
              </Title>
            </Row>
            <Row className="section-paragraph">
              <p>{loremIpsum}</p>
            </Row>
          </div>

          {/* PROJECT SECTION */}
          <div ref={projectRef}>
            <Row className="d-flex justify-content-center">
              <Title level={3} className="specialty-title">
                Projects
              </Title>
            </Row>
            <Row className="section-paragraph">
              <p>{loremIpsum}</p>
            </Row>
          </div>

          {/* CONTACT SECTION */}
          <div ref={contactRef} >
            <Row className="d-flex justify-content-center">
              <Title level={3} className="specialty-title">
                Contact Me
              </Title>
            </Row>
            <Row className="section-paragraph">
              <p>{loremIpsum}</p>
            </Row>
          </div>
        </Container>
      </Content>
    </Layout>
  );
}
