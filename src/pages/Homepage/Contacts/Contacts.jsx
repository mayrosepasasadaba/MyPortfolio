import * as React from "react";
import { Row } from "antd";
import Title from "antd/es/typography/Title";

export default function Contacts() {
  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Title level={3} className="specialty-title">
          Contact Me
        </Title>
      </Row>
      <Row className="section-paragraph">
        <p>CONTACTS</p>
      </Row>
    </div>
  );
}
