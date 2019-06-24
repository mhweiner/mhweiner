import React from 'react';

import styles from './base.scss';

export default class Advizr extends React.PureComponent {

  render() {

    return (<div className={styles.base}>

      <img src='/static/images/content/advizr/hero2.jpg' style={{
        marginBottom: '30px',
        boxSizing: 'border-box'
      }}/>

      <div className={styles.text}>

        <h2>Early-stage fintech startup Advizr needed to move fast while building a reliable product with minimal funding.</h2>

        <p>For professional Financial Advisors, writing a financial plan by hand is a hugely time consuming and labor intensive process. Existing tools were difficult to use
          and didn't reflect the needs of advisors or their clients, leaving a professional financial plan out of reach for many.</p>

        <p>Advizr wanted to change all of that &mdash; lowering the bar of entry while building an interactive experience that would help the client make the most out of their plan.
          Unfortunately, the industry was dominated by a few large players with nearly unlimited resources. We started out as a small team of 5 with limited funding.
        </p>

        <p><span className={styles.highlight}>As the first full-time developer hire, I helped lead technical strategy, taking ownership over Front-End (UI) development and User Experience (UX).</span></p>

        <h3>Technical Strategy</h3>
        <p>It was clear to me that as a very small early stage startup, the ability to iterate and grow the application quickly while mitigating risk was crucial. It's not like our clients had handed us specs &mdash; we didn't really know what we needed to build. To this end, I wanted to make things as modular
          as possible. This was 2014, and component libraries like React were not quite ready or met our requirements. I ended up writing my own micro-library <a href='http://github.com/mhweiner/hmjs' target='_blank'>HMJS</a>, built around jQuery, vanilla Javascript, and the ubiquitous <a href="https://mustache.github.io/" target='_blank'>Mustache</a> templating library.
          It had excellent performance and supported legacy browsers down to IE9, a business requirement at the time. This strategy succeeded in both embracing new techniques while minimizing the risk of being locked into
          large nascent frameworks and ecosystems. My library was only a couple dozen lines of code, and mostly relied on other proven libraries such as jQuery and Mustache. Later on, Advizr would migrate to React, once it became stable and our requirement to support legacy browsers was dropped.
        </p>
        <p>We also moved to a stateless REST API micro-services architecture, fully responsive SPA (single page application), and an Agile development process. Although the backend was .NET, front-end engineers would be completely insulated from this, making it easier
          to hire more developers. Along with a healthy dose of preventative investment into managing technical debt, this helped our application to
          scale while keeping up velocity, all with minimal resources.</p>

        <h3>Design Strategy</h3>
        <p>Similar to the technical strategy, the design strategy would be carefully aligned with the business strategy of closely engaging with customers, positive user experience (especially cutting down on learning curves), and iteration.</p>
        <p>Early on, I helped bring in a specialty boutique design agency who had experience with financial products. I worked with them and the co-founders to craft the User Experience and design through countless iterations and use-case analysis.</p>

        <h3 className={styles.awards}><i className='fa fa-award'/>Achievements &amp; Awards</h3>
        <ul>
          <li>Recognized as Best Client-Facing Technology of 2015 by FPPad</li>
          <li>2018 "Best 401k Technology" Industry Award from WealthManagement.com</li>
        </ul>

        <h3 className={styles.involvement}><i className='fa fa-user-astronaut'/>My Involvement</h3>
        <ul>
          <li>The first in-house full-time developer hire.</li>
          <li>Helped build a small team of front-end developers and freelancers. Made key hires.</li>
          <li>Led technical strategy and front-end development.</li>
          <li>Led UX and UI Design. Worked closely with stakeholders to understand customer's needs.</li>
          <li>Requirement gathering, information architecture, wire-framing, and prototyping.</li>
        </ul>

        <section className={styles.tech}>
          <h3 className={styles.tech}><i className='fa fa-cogs'/>Technology & Methodology</h3>
          <ul>
            <li>SPA Mobile-Friendly (responsive) HTML5 App</li>
            <li>.NET REST API, vanilla ES5 Javascript, jQuery, <a href="https://github.com/mhweiner/hmjs" target='_blank'>HMJS</a>, Highcharts, oAuth. Later, ReactJS/Redux.</li>
            <li>3rd party integration with Quovo, Blueleaf, Riskalyze & more</li>
            <li>Custom node.js/npm build & release tooling</li>
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