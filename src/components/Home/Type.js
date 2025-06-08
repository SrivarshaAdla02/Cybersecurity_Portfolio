import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cybersecurity Analyst",
          "Risk Assessment Practitioner",
          "Threat Analyst",
          "Cloud Security Analyst",
          "Digital Forensics Student",
          "GRC Enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
