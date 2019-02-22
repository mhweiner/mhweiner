import React from 'react';

import styles from './base.scss';

export default class Shutterstock extends React.PureComponent {

  render() {

    return (<div className={styles.base}>

      <img src='/static/images/content/shutterstock/img.jpg'/>

      <div className={styles.text}>

        <h2>One of the world's largest stock photography companies was leaving millions of dollars on the table.</h2>

        <p>In Spring '17, Shutterstock recognized it had a problem costing them millions. Enterprise customers such as Google, Simon &amp; Schuster, and National Geographic were not able to view or pay their invoices online. They weren't able to export their data, either. They had to call a service
        representative or mail a physical check. For some reason, this was never priortized and resulted in a poor user experience for both clients and Shutterstock sales reps, who were straddled with a slow legacy system. There were also millions of dollars of unpaid corporate invoices, and this was believed by management to be part of the problem.</p>

        <p>Shutterstock's enterprise billing data was tied up a legacy system that was not easy to work with and had severe
          technical limitations. We also needed to tie into many other different Shutterstock systems to validate requests,
          capture payment, and apply it to the user's account. We have two different stakeholders with different
          needs, and go live in a short 4 month deadline.</p>

        <p>Another requirement was that Shutterstock engineers building interfaces could not directly integrate with the
          legacy systems themselves, thus insulating those projects from legacy migrations.</p>

        <h3><i className='fa fa-chess-rook'/>Strategy</h3>
        <p>The solution was to build an internal service — a REST API orchestrating layer. This service would do all of
          the heavy lifting to get around the technical limitations with the legacy system, and offer a single easy,
          well-documented and well-tested API that any Shutterstock development team can take advantage of without
          headaches.</p>
        <p>Since our system had to handle billions of dollars of transactions annually by some of the world's largest
          companies, security and reliability were a top concern. We employed a 100% code and branch coverage testing
          policy, and a multi-tier automated testing policy including unit, integration, and contract tests. Peer code
          reviews were also used to ensure code quality.</p>

        <img src='/static/images/content/shutterstock/shutterstock-unity-invoice.png' />

        <section className={styles.tech}>
          <h3><i className='fa fa-cogs'/>Technology & Methodology</h3>
          <ul>
            <li>NodeJS ES6, Express REST API</li>
            <li>Behavior Driven Development (BDD) with 100% unit test coverage using Mocha</li>
            <li>OpenAPI (Swagger) & <a href='http://jsonapi.org' target='_blank'>JSON API</a> Compliant</li>
            <li>Reporting using Bunyan, New Relic, & Sumologic</li>
            <li>Docker, Kuberneties, AWS</li>
          </ul>
        </section>

        <h3><i className='fa fa-user-astronaut'/>My Involvement</h3>
        <ul>
          <li>Led architecture &amp; development of backend API orchestration service.</li>
          <li>Worked with other stakeholder teams to understand and gather technical requirements.</li>
          <li>Worked with legacy system team to help design a solution to the performance issues.</li>
          <li>Worked closely with other internal teams to integrate with their services.</li>
          <li>Led in writing technical documentation and API specification.</li>
          <li>Established design patterns throughout the application, including testing procedures and philosophy.</li>
          <li>Worked closely with QA team to help enable them to help enable them to write a test plan and ensure the highest possible quality.</li>
          <li>Helped identify potential security issues and design solutions.</li>
        </ul>

        <h3><i className='fa fa-award'/>Achievements &amp; Awards</h3>
        <ul>
          <li>The project enjoyed a smooth, successful, on-time launch and was well received by users.</li>
        </ul>

      </div>

    </div>);

  }

}