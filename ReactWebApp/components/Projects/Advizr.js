import React from 'react';

import styles from './base.scss';

export default function Advizr() {

  return (<div className={styles.base}>

    <img src="/static/images/content/advizr/7.png" style={{
      width: '100%',
      margin: '0 auto 40px',
      maxWidth: '800px',
      display: 'block'
    }}/>

    <div className={styles.content}>

      <div className={styles.main}>

        <h2>I helped a fledgling startup grow from pre-revenue to an industry-leading, award-winning business.</h2>

        <p>For professional Financial Advisors, writing a financial plan was a time consuming and labor intensive
          process. Existing tools were difficult to use
          and didn't reflect the needs of advisors or their clients, leaving a professional financial plan out of reach
          for many.</p>

        <p>Advizr, an early-stage 5-person startup, wanted to change all of that, making financial plans more
          accessible, and more useful.</p>

        <p>As the first full-time developer hire, I helped lead technical strategy, taking ownership of UX and UI
          Development.</p>

        <h3>Technical Strategy</h3>

        <p>
          As an early stage startup, the ability to iterate and grow the application quickly, <strong>while mitigating risk</strong>,
          is crucial. It's not like our clients had handed us specs &mdash; we
          didn't really know what we needed to build. To this end, I wanted to make things as modular and flexible as
          possible. It was this philosophy of practical iteration, coupled with a tight consumer relationship, that
          would end up being our key to success.
        </p>

        <p>My first priority was to move from a traditional .NET MVC application to a REST API powered SPA (single page
          application). There are many benefits, but I
          was looking for improved UX, scalability, testability, and flexibility. One of the biggest benefits was
          scalability in terms of hiring additional front-end talent. Front-end engineers wouldn't need to learn .NET,
          or need to have the back-end run in a virtual machine. This drastically simplified the
          setup and development environment and increased velocity for front-end engineers (such as myself).
          This helped to make front-end less of a bottleneck.
        </p>

        <p>My second priority was implementing an Agile
          workflow process that allowed us to iterate and try out new features while allocating time to manage technical
          debt and re-investing in our infrastructure.
        </p>

        <p>In 2014, front-end component libraries like React were not yet available, so we used a very
          simple Javascript component library that I wrote, <a href='http://github.com/mhweiner/hmjs' target='_blank'>HMJS</a>.
          This strategy succeeded in both embracing new techniques while minimizing the risk of being locked into
          large nascent frameworks and ecosystems (later on, Advizr would seamlessly migrate to React). The result of
          our efforts yielded a component-driven, flexible, and super-speedy interface with an excellent user experience
          that customers loved.
        </p>

        <p>The front-end UI was also responsive (mobile-friendly) down to tablet sizes. One of the requirements was
          to enable Advisors to hand clients an iPad and collaborate with them in real-time.</p>

        <h3>Design Strategy</h3>

        <p>Similar to the technical strategy, the design strategy would be carefully aligned with the business strategy
          of closely engaging with customers, unparalleled user experience (especially cutting down on learning curves),
          and iteration.</p>

        <p>I helped bring in a specialty boutique design agency who had experience with financial products. I
          worked with them and the co-founders to craft the UX and design through countless iterations and in-depth
          use-case analysis.</p>

      </div>

      <div className={styles.sidebar}>

        <h3 className={styles.involvement}>My Involvement</h3>

        <ul>
          <li>Led API Design, UX, and UI development.</li>
          <li>Helped build a small team and established Agile process.</li>
          <li>Requirement gathering, information architecture, wireframing, and prototyping.</li>
        </ul>

        <h3 className={styles.awards}>Outcome &amp; Awards</h3>

        <ul>
          <li>Acquired by Orion Advisor Services in 2019</li>
          <li>Pre-revenue to $2MM in two years</li>
          <li>Recognized as Best Client-Facing Technology of 2015 by FPPad</li>
          <li>2018 "Best 401k Technology" Industry Award from WealthManagement.com</li>
        </ul>

        <h3 className={styles.tech}>Technology</h3>

        <ul>
          <li>SPA mobile-friendly (fully-responsive) HTML5 app</li>
          <li>.NET REST API, vanilla Javascript, jQuery, <a href="https://github.com/mhweiner/hmjs"
                                                            target='_blank'>HMJS</a>, Highcharts, oAuth. Later, ReactJS.
          </li>
          <li>3rd party integration with Quovo, Blueleaf, Riskalyze & more</li>
          <li>Custom node.js/npm build & release tooling</li>
        </ul>

      </div>

    </div>

    <div className={styles.images}>
      <img src="/static/images/content/advizr/13.png" style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
      <img src="/static/images/content/advizr/8.png" style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
      <img src="/static/images/content/advizr/5.png" style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
      <img src="/static/images/content/advizr/2.png" style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
      <img src="/static/images/content/advizr/11.png"/>
    </div>

  </div>);

}
