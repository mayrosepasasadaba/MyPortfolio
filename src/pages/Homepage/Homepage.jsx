import * as React from "react";
import { Container } from "react-bootstrap";
import {
  Row,
  Col,
  Layout,
  Menu,
  Button,
  Grid,
  Typography,
  Dropdown,
} from "antd";
import Project from "./Projects/Project";
import Contacts from "./Contacts/Contacts";
import AboutMe from "./AboutMe/AboutMe";
import { MenuOutlined } from "@ant-design/icons";
import profile from "../../assets/images/logo.png";
import "../../styles/CommonStyles.css";
import "./Homepage.css";

const { Header, Content } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

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
  const screens = useBreakpoint(); // responsive info

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

  const menuItems = (
    <Menu>
      {sections.map((section) => (
        <Menu.Item key={section.key} onClick={handleMenuClick}>
          {section.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Layout className="main-layout" ref={homeRef}>
      <Header className="homepage-header">
        <Title level={5} className="header-title">
          Maywose Portfolio
        </Title>
        {screens.md ? (
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
        ) : (
          <>
            <Dropdown
              overlay={menuItems}
              trigger={["click"]}
              placement="topRight"
            >
              <Button
                icon={<MenuOutlined />}
                style={{
                  position: "absolute",
                  right: 16,
                }}
              />
            </Dropdown>
          </>
        )}
      </Header>
      <Content className="">
        <Container fluid className="">
          {currentPage === "home" && (
            <div>
              <Row>
                <Col xs={24} md={24} lg={12} className="center left-section">
                  <div>
                    <Row className="role-title">Software Engineer</Row>
                    <Row className="mt-3">
                      <Title level={1} className="specialty-title">
                        Hi! My name is Mayrose Pasasadaba
                      </Title>
                    </Row>
                    <Row className="top-profile">
                      <div className="image-container center">
                        <img src={profile} alt="img" className="w-100 image" />
                      </div>
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
