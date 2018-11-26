import React from 'react';

import styles from './Skills.scss';

export default class Skills extends React.Component {

  render() {

    return (
      <div className={styles.default}>
        <div className={styles.belt}>
          <h3>skills.</h3>
          <section>
            <h4>Technical</h4>
            <ul>
              <li>Business Analysis</li>
              <li>Requirement Gathering</li>
              <li>Documentation & Specifications</li>
              <li>R&D</li>
              <li>Technical Architecture</li>
              <li>Technical Strategy</li>
              <li>Integrations</li>
              <li>Automated Testing</li>
              <li>REST API & Micro-services (MoA/SoA)</li>
              <li>Build Tooling</li>
              <li>Continuous Integration (CI)</li>
            </ul>
          </section>
          <section className="cont">
            <h4>&nbsp;</h4>
            <ul>
              <li>Deployment Engineering</li>
              <li>BDD (Behavior Driven Development)</li>
              <li>Performance Optimization</li>
              <li>Modular & Orthogonal Design</li>
              <li>Responsive Design</li>
            </ul>
          </section>
          <section>
            <h4>Frameworks & Tools</h4>
            <ul>
              <li>node.js / npm</li>
              <li>Linux / CentOS / Ubuntu</li>
              <li>bash</li>
              <li>AWS, DigitalOcean</li>
              <li>Docker & Kubernetes</li>
              <li>Jenkins</li>
              <li>Swagger / OpenAPI</li>
              <li>PubNub (Real-time)</li>
              <li>Mailgun</li>
              <li>Twilio</li>
              <li>React</li>
            </ul>
          </section>
          <section>
            <h4>Languages & Databases</h4>
            <ul>
              <li>Javascript (incl. ES6)</li>
              <li>PHP7</li>
              <li>HTML5/CSS3</li>
              <li>Java</li>
              <li>C++</li>
              <li>Python</li>
              <li>MySQL / MariaDB / PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </section>
          <section>
            <h4>UX</h4>
            <ul>
              <li>Information Architecture</li>
              <li>Wireframing</li>
              <li>User Research</li>
              <li>Requirement Gathering</li>
              <li>Responsive Design</li>
              <li>UI Design</li>
            </ul>
          </section>
          <section>
            <h4>Leadership</h4>
            <ul>
              <li>Mentorship</li>
              <li>Team Building & Knowledge Sharing</li>
              <li>Onboarding</li>
              <li>Process Design</li>
              <li>Agile Project Management</li>
            </ul>
          </section>
        </div>
      </div>
    )

  }

}