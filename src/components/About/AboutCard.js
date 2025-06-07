import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="purple">Srivarsha Adla</span>, currently based in{" "}
            <span className="purple">Albany, NY, USA</span>, and working as an{" "}
            <span className="purple">Information Security Office Intern</span> at the New York State Education Department.
            <br />
            <br />
            With a background in Digital Forensics and Cybersecurity, my work focuses on:
            <ul>
              <li className="about-activity">
                <ImPointRight /> Threat detection & log correlation using <b className="purple">Splunk</b>
              </li>
              <li className="about-activity">
                <ImPointRight /> Endpoint security monitoring with <b className="purple">CrowdStrike</b>
              </li>
              <li className="about-activity">
                <ImPointRight /> Vulnerability assessments using <b className="purple">Nessus</b> and <b className="purple">Qualys</b>
              </li>
              <li className="about-activity">
                <ImPointRight /> Hands-on network analysis with <b className="purple">Wireshark</b> and <b className="purple">Sysmon</b>
              </li>
            </ul>
            I have experience with scripting in <b className="purple">Python</b> and <b className="purple">PowerShell</b> for automating analysis and response tasks. I actively contribute to projects involving security dashboards, breach detection, and incident timelines.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Cybersecurity is not a product — it's a process. I build, monitor, and defend."
          </p>
          <footer className="blockquote-footer">Srivarsha Adla</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

