import * as React from "react";
import { Row } from "antd";
import Title from "antd/es/typography/Title";

export default function Project() {
  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Title level={3} className="specialty-title">
          Projects
        </Title>
      </Row>
      <Row className="section-paragraph">
        <p>PROJECTS</p>
      </Row>
    </div>
  );
}
