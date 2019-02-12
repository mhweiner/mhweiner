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

        <h2>A well-executed product helped a small fintech startup take down a giant.</h2>

        <p>Writing a financial plan was a time consuming and labor intensive process. Existing tools had many features but were
          difficult to use and didn't reflect the needs of advisors or their clients, leaving a professional financial plan out of reach for many.</p>

        <p>Advizr wanted to lower the bar of entry while building an interactive experience that would help the client make the most out of their plan. However, the competition
          was tough&mdash;the industry was dominated by a few large players with nearly unlimited resources. We started out as a small team of 5 with limited funding.
        </p>

        <section>
          <h3>Strategy</h3>
          <p>Features were (and continue to be) based on exhaustive
            user-research and iteration.</p>
          <p>In order to iterate quickly without technical hangups, we leveraged a modular component-based approach and an Agile development process. This also helped our application to scale (in terms of complexity and team size) while keeping technical debt manageable and stability high.</p>
        </section>

        <section>
          <h3>Technology</h3>
          <ul>
            <li>.NET REST API, <a href="https://github.com/mhweiner/hmjs" target='_blank'>HMJS</a>, React, Highcharts, oAuth</li>
            <li>SPA Mobile-Friendly (responsive) HTML5 App</li>
            <li>3rd party integration with Quovo, Blueleaf, Riskalyze & more</li>
            <li>Custom node.js/npm build & release tooling</li>
          </ul>
        </section>

        <section>
          <h3>My Involvement</h3>
          <ul>
            <li>The first in-house full-time developer hire.</li>
            <li>Led UX and UI Design. Worked closely with stakeholders to understand customer's needs and to better empathize with them. Requirement gathering, information architecture, wire-framing, and prototyping.</li>
            <li>Led front-end architecture & development. Helped build a small team of front-end developers and
              freelancers. Made key hires.</li>
            <li>Led in REST API design.</li>
          </ul>
        </section>

        <section>
          <h3>Achievements & Awards</h3>
          <ul>
            <li>Recognized as Best Client-Facing Technology of 2015 by FPPad</li>
            <li>Pre-revenue to over $2MM/yr within 2 years</li>
            <li>2018 "Best 401k Technology" Industry Award from WealthManagement.com</li>
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