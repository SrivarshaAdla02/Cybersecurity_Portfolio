import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWireshark,
  SiLinux,
  SiMicrosoftazure,
  SiElastic,
} from "react-icons/si";
import { FaSkullCrossbones, FaSearch } from "react-icons/fa"; // Nessus/Autopsy and Splunk placeholder

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark /> {/* Wireshark */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux /> {/* Linux */}
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
        <FaSearch /> {/* Splunk placeholder */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure /> {/* Azure */}
      </Col>
    </Row>
  );
}

export default Toolstack;


