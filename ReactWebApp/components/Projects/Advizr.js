import React from 'react';

import styles from './base.scss';

export default class Advizr extends React.Component {

  render() {

    let c = (classes) => {

      return classes.join(' ');

    };

    return (<div className={styles.base}>

      <img src='/static/images/content/advizr/hero.jpg' style={{borderBottom: '2px solid black'}}/>

      <div className={styles.text}>

        <h2>A well-executed product helped a small fintech startup take down a giant.</h2>

        <a className={styles.extLink} href="https://www.advizr.com/" target="_blank">Visit Website<i className='fa fa-external-link-alt'/></a>

        <h3><i className={c(['fa', 'fa-flag', styles.challenge])}/>The Challenge</h3>
        <p>Writing a financial plan is a time consuming and labor intensive process. Advizr wants to help
          financial advisors write plans for more people at a much lower cost while elevating the experience for
          both the advisor and client.</p>

        <section>
          <h3><i className={c(['fa', 'fa-flask', styles.solution])}/>The Solution</h3>
          <p>Advizr marries robo-advising with a thoughtful user experience and solid performing application to
            create an unparalleled experience for advisors and their clients. Features are based on exhaustive
            user-research, iteration, and customer outreach programs.</p>
          <p>We leveraged a component-based modular UI that allowed us to iterate quickly
            while still allowing the application to scale (in terms of complexity without
            major rewrites). This allowed us to hone-in on our features and iterate quickly with customer feedback
            and data metrics.</p>
        </section>

        <section>
          <h3><i className={c(['fas', 'fa-cogs', styles.technology])}/>Technology</h3>
          <ul>
            <li>.NET REST API, <a href="https://github.com/mhweiner/hmjs" target='_blank'>HMJS</a>, later React JS</li>
            <li>Mobile-friendly, fully-responsive HTML5 app</li>
            <li>Highcharts, oAuth</li>
            <li>3rd party integration with Quovo, Blueleaf, Riskalyze & more</li>
            <li>Custom node.js/npm build & release tooling</li>
          </ul>
        </section>

        <section>
          <h3><i className={c(['fa', 'fa-bomb', styles.involvement])}/>Involvement</h3>
          <ul>
            <li>Business analysis, information architecture, wire-framing, and prototyping.</li>
            <li>High-level architecture and technical strategy. Made key decisions that enabled us to iterate
              quickly and remain flexible, while keeping code quality high. Wrote custom component-based, modular,
              front-end framework in JS.</li>
            <li>Helped transition company from legacy MVC .NET to modern REST API architecture.</li>
            <li>Helped transition company to an iterative Agile development process.</li>
            <li>Led front-end architecture & development. Helped build a small team of front-end developers and
              freelancers. Made key hires.
            </li>
            <li>Worked with a digital creative agency to help us with information architecture and data
              visualization.
            </li>
            <li>Wrote custom dev-ops node.js release tooling to support front-end operations and improve
              performance.
            </li>
          </ul>
        </section>

        <section>
          <h3><i className={c(['fa', 'fa-trophy', styles.achievements])}/>Achievements & Awards</h3>
          <ul>
            <li>Recognized as Best Client-Facing Technology of 2015 by FPPad.</li>
            <li>Pre-revenue to over $2MM/yr within 2 years.</li>
          </ul>
        </section>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/advizr/13.png"/>
        <img src="/static/images/content/advizr/7.png"/>
        <img src="/static/images/content/advizr/11.png"/>
        <img src="/static/images/content/advizr/8.png"/>
      </div>

    </div>);

  }

}