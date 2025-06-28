import * as React from "react";
import { Row, Col, Button } from "antd";
import Title from "antd/es/typography/Title";
import profile from "../../../assets/images/logo.png";
import "./AboutMe.css";

export default function AboutMe() {
  const [aboutMe, setAboutMe] = React.useState("");

  React.useEffect(() => {
    fetch("/AboutMe.txt")
      .then((res) => res.text())
      .then((text) => setAboutMe(text));
  }, []);

  return (
    <div className="about-container">
      <Row>
        <Col xs={24} md={24} lg={12} className="left-section">
          <div>
            <Row className="top-profile">
              <div className="image-container center">
                <img src={profile} alt="img" className="w-100" />
              </div>
            </Row>
            <Row className="">
              <Title level={1} className="specialty-title">
                About Me
              </Title>
            </Row>
            <Row
              className="mt-3"
              style={{
                whiteSpace: "pre-line",
                padding: "1rem",
                maxWidth: "800px",
              }}
            >
              {aboutMe}
            </Row>
            <Row className="mt-4 profile-buttons">
              <Button className="project">Resume</Button>
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
  );
}
