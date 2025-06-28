import * as React from "react";
import { Row } from "antd";
import Title from "antd/es/typography/Title";

export default function AboutMe() {
  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Title level={3} className="specialty-title">
          About
        </Title>
      </Row>
      <Row className="section-paragraph">
        <p>ABOUT ME</p>
      </Row>
      <Row className="d-flex justify-content-center">
        <Title level={3} className="specialty-title">
          Skills
        </Title>
      </Row>
      <Row className="section-paragraph">
        <p>SKILLS SECTION</p>
      </Row>
    </div>
  );
}
