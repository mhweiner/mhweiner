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
              <li>Requirement Gathering</li>
              <li>Documentation &amp; Specifications</li>
              <li>Full-stack software development</li>
              <li>REST API &amp; Microservices (MoA/SoA)</li>
              <li>Front-End UI Development</li>
              <li>R&amp;D</li>
              <li>Technical Architecture &amp; Strategy</li>
              <li>Performance Optimization</li>
            </ul>
          </section>
          <section className="cont">
            <h4 className={styles.empty}>&nbsp;</h4>
            <ul>
              <li>Automated Testing</li>
              <li>Build Tooling</li>
              <li>BDD (Behavior Driven Development)</li>
              <li>Real-time Systems</li>
              <li>Modular &amp; Orthogonal Design</li>
              <li>Responsive Design</li>
              <li>SOLID</li>
            </ul>
          </section>
          <section>
            <h4>Frameworks & Tools</h4>
            <ul>
              <li>React/Redux</li>
              <li>node.js, webpack, babel</li>
              <li>pm2, Docker</li>
              <li>Swagger/OpenAPI</li>
              <li>JSONAPI.org</li>
              <li>PubNub</li>
              <li>AWS, DigitalOcean</li>
              <li>Sketch, Adobe CC</li>
            </ul>
          </section>
          <section>
            <h4>Languages & Databases</h4>
            <ul>
              <li>Javascript</li>
              <li>HTML5/CSS3</li>
              <li>PHP7</li>
              <li>Java</li>
              <li>C++</li>
              <li>Golang</li>
            </ul>
          </section>
          <section>
            <h4>UX</h4>
            <ul>
              <li>IA/UI/UX Design</li>
              <li>Wireframing</li>
              <li>A/B Testing</li>
              <li>User Research</li>
              <li>Requirement Gathering</li>
              <li>Responsive Design</li>
            </ul>
          </section>
          <section>
            <h4>Leadership</h4>
            <ul>
              <li>Mentorship</li>
              <li>Team Building &amp; Knowledge Sharing</li>
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