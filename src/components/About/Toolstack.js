import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWireshark,
  SiLinux,
  SiMicrosoftazure,
  SiElastic,
} from "react-icons/si";
import { FaSkullCrossbones } from "react-icons/fa"; // placeholder icon
import { FaSplunk } from "react-icons/fa"; // unofficial Splunk icon

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSkullCrossbones /> {/* Nessus */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSkullCrossbones /> {/* Autopsy */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElastic /> {/* ELK Stack */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSplunk /> {/* Splunk */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
    </Row>
  );
}

export default Toolstack;

