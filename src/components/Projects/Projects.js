import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Original image imports — replace these paths if needed
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";

// Placeholder images for your projects — replace later
import scada from "../../Assets/Projects/scada.png";
import apex from "../../Assets/Projects/apex.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apex}
              isBlog={false}
              title="Incident Response – Apex Financials"
              description="Detailed forensic investigation of two cyber attacks at Apex Financials. The first involved a spear-phishing ransomware attack, and the second analyzed a web shell-based intrusion. Tools used include Splunk, IDS logs, and MITRE ATT&CK mapping."
              ghLink="https://github.com/SrivarshaAdla02/Incident-Response-Analysis-Apex-Financials-Spring-2025"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scada}
              isBlog={false}
              title="SCADA & OT Security Labs"
              description="A hands-on lab series for industrial cybersecurity including pfSense firewall, Security Onion, Snort, Wazuh, and ELK Stack. Focused on detecting intrusions and securing SCADA networks using open-source tools."
              ghLink="https://github.com/SrivarshaAdla02/Cybersecurity-Lab-Series-for-SCADA-OT-Network-Monitoring-and-Defense"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Real-time chat room built with React.js, Material-UI, and Firebase. Supports image sharing, messaging, and reactions."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Personal blog built with Next.js and Tailwind CSS, rendering markdown content with dark mode support."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor with live preview. Built using React.js, supporting HTML/CSS/JS and auto-save."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Image classification model for plant diseases using PyTorch and ResNet34 with 98% accuracy."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
