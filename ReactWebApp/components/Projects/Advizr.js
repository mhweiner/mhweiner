import React from 'react';

import styles from './base.scss';

export default class Advizr extends React.Component {

  render() {

    let c = (classes) => {

      return classes.join(' ');

    };

    return (<div className={styles.base}>

      <img src='/static/images/content/advizr/hero2.jpg' style={{borderBottom: '2px solid black', marginBottom: '30px'}}/>

      <div className={styles.text}>

        <h2>How a well-executed product helped a small fintech startup take down a giant.</h2>

        <a className={styles.extLink} href="https://www.advizr.com/" target="_blank">Visit Website<i className='fa fa-external-link-alt'/></a>

        <p>When Advizr first launched their MVP in 2014, writing a financial plan was a time consuming and labor intensive process.
          Existing tools had many features but were difficult to use and didn't necessarily reflect the needs of advisors or their clients.</p>
        <p>Advizr wanted to lower the bar of entry while building an interactive experience that helped the client make the most out of their plan. However, the competition
          was tough&mdash;the industry was dominated by a few large players with nearly unlimited resources.
        </p>

        <section>
          <h3><i className={c(['fas', 'fa-chess-pawn', styles.solution])}/>Strategy</h3>
          <p>Advizr married robo-advising with a thoughtful design and solid performing application to
            create an unparalleled experience for both advisors and their clients. Features were (and continue to be) based on exhaustive
            user-research and iteration.</p>
          <p>In order to iterate quickly without technical hangups, we leveraged a modular component-based approach and an Agile development process. This also helped our application to scale (in terms of complexity and team size) while keeping technical debt managable and stability high.</p>
          <p>Customers and their clients were not just happy, but became our biggest advocates.</p>
        </section>

        <section>
          <h3><i className={c(['fas', 'fa-cogs', styles.technology])}/>Technology</h3>
          <ul>
            <li>.NET REST API, <a href="https://github.com/mhweiner/hmjs" target='_blank'>HMJS</a>, React, Highcharts, oAuth</li>
            <li>Mobile-friendly (responsive) HTML5 app</li>
            <li>3rd party integration with Quovo, Blueleaf, Riskalyze & more</li>
            <li>Custom node.js/npm build & release tooling</li>
          </ul>
        </section>

        <section>
          <h3><i className={c(['fa', 'fa-bomb', styles.involvement])}/>My Involvement</h3>
          <ul>
            <li>Lead UX and UI Design. Worked closely with stakeholders to understand customer's needs and to better empathize with them. Requirement gathering, information architecture, wire-framing, and prototyping.</li>
            <li>Helped transition company from legacy MVC .NET to modern REST API architecture.</li>
            <li>Helped transition company to an iterative Agile development process.</li>
            <li>Led front-end architecture & development. Helped build a small team of front-end developers and
              freelancers. Made key hires.</li>
          </ul>
        </section>

        <section>
          <h3><i className={c(['fa', 'fa-trophy', styles.achievements])}/>Achievements & Awards</h3>
          <ul>
            <li>Recognized as Best Client-Facing Technology of 2015 by FPPad</li>
            <li>Pre-revenue to over $2MM/yr within 2 years</li>
            <li>2018 "Best 401k Technology" Industry Award from WealthManagement.com</li>
          </ul>
        </section>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/advizr/13.png"/>
        <img src="/static/images/content/advizr/8.png"/>
        <img src="/static/images/content/advizr/7.png"/>
        <img src="/static/images/content/advizr/11.png"/>
      </div>

    </div>);

  }

}