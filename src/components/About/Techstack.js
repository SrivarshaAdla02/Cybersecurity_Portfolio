import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaBug, FaShieldAlt, FaNetworkWired, FaCloud, FaFingerprint, FaHtml5, FaPython, FaUserShield } from "react-icons/fa";
import { SiJavascript, SiNginx } from "react-icons/si";
import { BsTerminalFill } from "react-icons/bs";
import { MdPolicy, MdSecurity } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiSearchEyeLine } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaBug size={40} /> {/* Vulnerability Management */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdSecurity size={40} /> {/* Incident Response */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiSearchEyeLine size={40} /> {/* Threat Analysis */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdPolicy size={40} /> {/* Security Policies */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 size={40} /> {/* HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython size={40} /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript size={40} /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsTerminalFill size={40} /> {/* Bash Scripting */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiMagnifyingGlass size={40} /> {/* OSINT */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt size={40} /> {/* NIST Framework */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrCompliance size={40} /> {/* Risk Assessment / Compliance */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired size={40} /> {/* Digital Forensics / Network Analysis */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUserShield size={40} /> {/* Identity & Access Management */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCloud size={40} /> {/* Cloud Security */}
      </Col>
    </Row>
  );
}

export default Techstack;
