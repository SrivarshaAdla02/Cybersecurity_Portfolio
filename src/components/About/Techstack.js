import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaBug, FaDatabase, FaShieldAlt, FaCloud, FaHtml5 } from "react-icons/fa";
import { SiWireshark, SiPfsense, SiMicrosoftazure, SiPowerbi, SiMysql, SiJavascript, SiTerraform, SiElastic } from "react-icons/si";
import { GiFirewall } from "react-icons/gi";
import { BsTerminalFill } from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiWireshark size={40} />
        <p>Wireshark</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <FaBug size={40} />
        <p>Metasploit</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPfsense size={40} />
        <p>pfSense</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiElastic size={40} />
        <p>ELK Stack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <FaShieldAlt size={40} />
        <p>Nessus</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <BsTerminalFill size={40} />
        <p>Snort</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPowerbi size={40} />
        <p>Power BI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMicrosoftazure size={40} />
        <p>Microsoft Azure</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMysql size={40} />
        <p>SQL / MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiJavascript size={40} />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiTerraform size={40} />
        <p>Terraform</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <FaHtml5 size={40} />
        <p>HTML</p>
      </Col>
    </Row>
  );
}

export default Techstack;
