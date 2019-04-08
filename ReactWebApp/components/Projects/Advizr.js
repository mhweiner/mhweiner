import React from 'react';

import styles from './base.scss';

export default class Advizr extends React.PureComponent {

  render() {

    return (<div className={styles.base}>

      <img src='/static/images/content/advizr/hero2.jpg' style={{
        marginBottom: '30px',
        border: '2px solid #e6e6e6',
        boxSizing: 'border-box'
      }}/>

      <div className={styles.text}>

        <h2>Early-stage fintech startup Advizr needed to move fast while building a reliable product with minimal funding.</h2>

        <p>Writing a financial plan was a time consuming and labor intensive process. Existing tools were difficult to use
          and didn't reflect the needs of advisors or their clients, leaving a professional financial plan out of reach for many.</p>

        <p>Advizr wanted to lower the bar of entry while building an interactive experience that would help the client make the most out of their plan. However, the competition
          was tough&mdash;the industry was dominated by a few large players with nearly unlimited resources. We started out as a small team of 5 with limited funding.
        </p>

        <h3><i className='fa fa-flask'/>Solution</h3>
        <p>As a very small early stage startup, the ability to iterate and scale quickly while mitigating risk was crucial. For this, I wanted to make things as modular
          and "componentized" as possible. Component libraries like React had yet to become popular (and didn't support legacy browsers), so I used my own lightweight
          tool called <a href='http://github.com/mhweiner/hmjs' target='_blank'>HMJS</a>, built around the ubiquitous <a href="https://mustache.github.io/" target='_blank'>Mustache</a> templating library.
          This same tool was previously used successfully in high performance hybrid iOS and Android applications.
        </p>
        <p>We also moved to a stateless REST API micro-services architecture and an Agile development process. Although
          not news-worthy today, this was forward thinking for a small startup at the time. Along with a healthy dose of
          preventative investment into managing technical debt, this helped our application to scale while keeping up
          velocity and with minimal resources.</p>

        <h3><i className='fa fa-award'/>Achievements &amp; Awards</h3>
        <ul>
          <li>Recognized as Best Client-Facing Technology of 2015 by FPPad</li>
          <li>Pre-revenue to over $2MM/yr within 2 years</li>
          <li>2018 "Best 401k Technology" Industry Award from WealthManagement.com</li>
        </ul>

        <h3><i className='fa fa-user-astronaut'/>My Involvement</h3>
        <ul>
          <li>The first in-house full-time developer hire.</li>
          <li>Led UX and UI Design. Worked closely with stakeholders to understand customer's needs and to better empathize with them. Requirement gathering, information architecture, wire-framing, and prototyping.</li>
          <li>Led front-end architecture & development. Helped build a small team of front-end developers and
            freelancers. Made key hires.</li>
          <li>Led in REST API design.</li>
          <li>Helped transition company to Agile.</li>
        </ul>

        <section className={styles.tech}>
          <h3><i className='fa fa-cogs'/>Technology & Methodology</h3>
          <ul>
            <li>SPA Mobile-Friendly (responsive) HTML5 App</li>
            <li>.NET REST API, <a href="https://github.com/mhweiner/hmjs" target='_blank'>HMJS</a>, Highcharts, oAuth</li>
            <li>3rd party integration with Quovo, Blueleaf, Riskalyze & more</li>
            <li>Custom node.js/npm build & release tooling</li>
          </ul>
        </section>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/advizr/13.png" style={{border: '2px solid #e6e6e6'}}/>
        <img src="/static/images/content/advizr/8.png" style={{border: '2px solid #e6e6e6'}}/>
        <img src="/static/images/content/advizr/7.png"/>
        <img src="/static/images/content/advizr/11.png"/>
      </div>

    </div>);

  }

}