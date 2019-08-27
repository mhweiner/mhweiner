import React from 'react';

import styles from './base.scss';

export default class Advizr extends React.PureComponent {

  render() {

    return (<div className={styles.base}>

      <img src='/static/images/content/advizr/hero2.jpg' style={{
        marginBottom: '40px',
        boxSizing: 'border-box',
        boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'
      }}/>

      <div className={styles.content}>

        <div className={styles.sidebar}>

          <h3 className={styles.involvement}><i className='fa fa-user-astronaut'/>My Involvement</h3>

          <p>As the first full-time developer hire, I helped lead technical strategy, taking ownership UX and UI Development.</p>

          <ul>
            <li>Led API Design, UX, and UI development.</li>
            <li>Helped build a small team.</li>
            <li>Worked closely with stakeholders to understand customer's needs.</li>
            <li>Requirement gathering, information architecture, wireframing, and prototyping.</li>
          </ul>

          <h3 className={styles.awards}><i className='fa fa-award'/>Achievements &amp; Awards</h3>

          <ul>
            <li>Pre-revenue to $2MM in two years</li>
            <li>Recognized as Best Client-Facing Technology of 2015 by FPPad</li>
            <li>2018 "Best 401k Technology" Industry Award from WealthManagement.com</li>
          </ul>

          <h3 className={styles.tech}><i className='fa fa-cogs'/>Technology</h3>

          <ul>
            <li>SPA mobile-friendly (fully-responsive) HTML5 app</li>
            <li>.NET REST API, vanilla Javascript, jQuery, <a href="https://github.com/mhweiner/hmjs" target='_blank'>HMJS</a>, Highcharts, oAuth. Later, ReactJS.</li>
            <li>3rd party integration with Quovo, Blueleaf, Riskalyze & more</li>
            <li>Custom node.js/npm build & release tooling</li>
          </ul>

        </div>

        <div className={styles.main}>

          <p>For professional Financial Advisors, writing a financial plan was a time consuming and labor intensive process. Existing tools were difficult to use
            and didn't reflect the needs of advisors or their clients, leaving a professional financial plan out of reach for many.</p>

          <p>Advizr, an early-stage 5-person startup, wanted to change all of that, making financial plans more accessible, and more useful.</p>

          <h3>Technical Strategy</h3>

          <p>It was clear to me that as an early stage startup, <em style={{fontWeight: 'bold'}}>the ability to iterate and grow the application quickly while mitigating risk</em> was crucial. It's not like our clients had handed us specs &mdash; we didn't really know what we needed to build. To this end, I wanted to make things as modular
            as possible. This meant moving from a traditional .NET MVC framework to a REST API powered single page application (SPA).  This was 2014, and front-end component libraries like React were not quite ready or met our requirements. I ended up writing a "micro-library" <a href='http://github.com/mhweiner/hmjs' target='_blank'>HMJS</a>, built around jQuery, vanilla Javascript, and the ubiquitous <a href="https://mustache.github.io/" target='_blank'>Mustache</a> templating library.
            It had excellent performance (outperformed Angular) and supported legacy browsers down to IE9, a requirement at the time. This strategy succeeded in both embracing new techniques while minimizing the risk of being locked into
            large nascent frameworks and ecosystems. My library was only a couple dozen lines of code, and mostly relied on other proven libraries such as jQuery and Mustache. Later on, Advizr would migrate to React, once it became stable and our requirement to support legacy browsers was dropped.
          </p>

          <p>In addition moved from from an also moved from a traditional Mto a stateless REST API micro-services architecture, fully responsive SPA (single page application), and an Agile development process. Although the backend was .NET, front-end engineers would be completely insulated from this, making it easier
            to hire more developers. Along with a healthy dose of preventative investment into managing technical debt, this helped our application to
            scale while keeping up velocity, all with minimal resources.</p>

          <h3>Design Strategy</h3>

          <p>Similar to the technical strategy, the design strategy would be carefully aligned with the business strategy of closely engaging with customers, positive user experience (especially cutting down on learning curves), and iteration.</p>

          <p>Early on, I helped bring in a specialty boutique design agency who had experience with financial products. I worked with them and the co-founders to craft the User Experience and design through countless iterations and use-case analysis.</p>

        </div>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/advizr/13.png" style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
        <img src="/static/images/content/advizr/8.png"  style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
        <img src="/static/images/content/advizr/7.png"/>
        <img src="/static/images/content/advizr/11.png"/>
      </div>

    </div>);

  }

}