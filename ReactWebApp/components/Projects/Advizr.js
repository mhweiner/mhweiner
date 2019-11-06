import React from 'react';

import ResponsiveImage from "../ResponsiveImage";

import styles from './base.scss';

export default class Advizr extends React.PureComponent {

  render() {

    return (<div className={styles.base}>

      <img src="/static/images/content/advizr/7.png" style={{
        width: '100%',
        margin: '0 auto 40px',
        maxWidth: '800px',
        display: 'block'
      }}/>

      <div className={styles.content}>

        <div className={styles.main}>

          <h2>I helped a fledgling startup grow from pre-revenue to a profitable, industry-leading, award-winning business.</h2>

          <p>For professional Financial Advisors, writing a financial plan was a time consuming and labor intensive process. Existing tools were difficult to use
            and didn't reflect the needs of advisors or their clients, leaving a professional financial plan out of reach for many.</p>

          <p>Advizr, an early-stage 5-person startup, wanted to change all of that, making financial plans more accessible, and more useful.</p>

          <p>As the first full-time developer hire, I helped lead technical strategy, taking ownership of UX and UI Development.</p>

          <h3>Technical Strategy</h3>

          <p>It was clear to me that as an early stage startup, <mark>the ability to iterate
            and grow the application quickly while mitigating risk</mark> was crucial. It's not like our clients had handed
            us specs &mdash; we didn't really know what we needed to build. To this end, I wanted to make things as modular and flexible
            as possible, and adopt an Agile methodology. It was this philosophy of iteration, coupled with a tight consumer relationship, that would
            end up being the key to our success.</p>

          <p>When I first joined, my first priority was to move from a traditional .NET MVC application to a REST API powered SPA (single page application).
            There were many benefits to this, but all contributed to increased velocity, scalability, testability, and flexibility.
          </p>

          <p>My second priority was implementing a good Agile workflow process that allowed us to iterate and try out new features while allocating time
          to manage technical debt and re-investing into our infrastructure.
          </p>

          <p>Unfortunately, this was 2014, and front-end component libraries like React were not quite ready or met our requirements. I ended up writing a small simple library <a href='http://github.com/mhweiner/hmjs' target='_blank'>HMJS</a>, built around jQuery, vanilla Javascript, and the ubiquitous <a href="https://mustache.github.io/" target='_blank'>Mustache</a> templating library.
            It had excellent performance (outperformed Angular) and supported legacy browsers down to IE9, a requirement at the time. This strategy succeeded in both embracing new techniques while minimizing the risk of being locked into
            large nascent frameworks and ecosystems. The tiny and well-tested HMJS library mostly relied on other proven libraries such as jQuery and Mustache. Later on, Advizr would migrate to React, once it became stable and our requirement to support legacy browsers was dropped.
          </p>

          <p>The front-end UI was also responsive (mobile-friendly) down to tablet sizes. This was a requirement so that Advisors can run the software on an iPad while working with their clients, and hand it to them.</p>

          <h3>Design Strategy</h3>

          <p>Similar to the technical strategy, the design strategy would be carefully aligned with the business strategy of closely engaging with customers, unparalleled user experience (especially cutting down on learning curves), and iteration.</p>

          <p>Early on, I helped bring in a specialty boutique design agency who had experience with financial products. I worked with them and the co-founders to craft the UX and design through countless iterations and in-depth use-case analysis.</p>

        </div>

        <div className={styles.sidebar}>

          <h3 className={styles.involvement}><i className='fa fa-user-astronaut'/>My Involvement</h3>

          <ul>
            <li>Led API Design, UX, and UI development.</li>
            <li>Helped build a small team.</li>
            <li>Requirement gathering, information architecture, wireframing, and prototyping.</li>
            <li>Helped transition to Agile and installed processes.</li>
          </ul>

          <h3 className={styles.awards}><i className='fa fa-award'/>Achievements &amp; Awards</h3>

          <ul>
            <li>Acquired by Orion Advisor Services in 2019</li>
            <li>Pre-revenue to $2MM in two years</li>
            <li>Recognized as Best Client-Facing Technology of 2015 by FPPad</li>
            <li>2018 "Best 401k Technology" Industry Award from WealthManagement.com</li>
            <li>Customers loved our product!</li>
          </ul>

          <h3 className={styles.tech}><i className='fa fa-cogs'/>Technology</h3>

          <ul>
            <li>SPA mobile-friendly (fully-responsive) HTML5 app</li>
            <li>.NET REST API, vanilla Javascript, jQuery, <a href="https://github.com/mhweiner/hmjs" target='_blank'>HMJS</a>, Highcharts, oAuth. Later, ReactJS.</li>
            <li>3rd party integration with Quovo, Blueleaf, Riskalyze & more</li>
            <li>Custom node.js/npm build & release tooling</li>
          </ul>

        </div>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/advizr/13.png" style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
        <img src="/static/images/content/advizr/8.png"  style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
        <img src="/static/images/content/advizr/5.png"  style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
        <img src="/static/images/content/advizr/2.png"  style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
        <img src="/static/images/content/advizr/11.png"/>
      </div>

    </div>);

  }

}