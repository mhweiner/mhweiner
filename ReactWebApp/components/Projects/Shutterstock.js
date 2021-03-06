import React from 'react';

import ResponsiveImage from '../ResponsiveImage';

import styles from './base.scss';

export default class Shutterstock extends React.PureComponent {

  render() {

    return (<div className={styles.base}>

      <ResponsiveImage src={[
        {
          minWidth: 0,
          src: '/static/images/content/shutterstock/hero_small.jpg'
        },
        {
          minWidth: 700,
          src: '/static/images/content/shutterstock/hero.jpg'
        }
      ]}/>

      <div className={styles.content}>

        <div className={styles.main}>

          <h2>I designed and developed the API that Shutterstock uses for its enterprise e-commerce.</h2>

          <p>In Spring '17, Shutterstock recognized it had a problem potentially costing them millions. Enterprise customers were not
            able to view or pay their invoices online &mdash; they had to call a service representative or mail a physical check.
            They weren't able to export their data, either. Not only was this a sub-par experience for clients, but was
            thought to be part of reason for millions of dollars in unpaid invoices.
          </p>

          <p>I was brought on as a consultant to see this project through from planning to completion.</p>

          <h3>Technical Challenges</h3>

          <p>Unfortunately, Shutterstock's enterprise billing data was tied up a legacy system that was not easy to work with and had severe
            technical limitations. We also needed to tie into many other different systems to validate requests,
            capture payment, and apply it to the user's account. We have two different stakeholders with different
            needs, and go live in a short 4 month deadline.</p>

          <p>It was decided that new projects should could not directly integrate with the legacy systems themselves, thus
            insulating those projects from legacy migrations.</p>

          <h3>Technical Strategy</h3>

          <p>The solution was to build an internal service — a REST API orchestrating layer. This service would do all of
            the heavy lifting to get around the technical limitations with the legacy system, and offer a single easy,
            well-documented and well-tested API that any Shutterstock development team can take advantage of without
            headaches.</p>

          <img src='/static/images/content/shutterstock/shutterstock-unity-invoice.png' />

          <p>Since our system had to handle billions of dollars of transactions annually by some of the world's largest
            companies, security and reliability were a top concern. We employed a strict 100% code and branch coverage testing
            policy, including unit, multi-tiered integration, and contract tests. Peer code reviews were also used to ensure code quality.</p>

        </div>

        <div className={styles.sidebar}>

          <h3 className={styles.involvement}>My Involvement</h3>

          <ul>
            <li>Led architecture &amp; development of backend API orchestration service.</li>
            <li>Requirement gathering, User Validation, API design and technical documentation.</li>
            <li>Worked with legacy system specialist to help design a solution to the performance issues.</li>
            <li>Led in writing technical documentation and API specification.</li>
            <li>Established design patterns, testing policies, and code quality best practices.</li>
            <li>Worked closely with QA to design testing procedures and wrote automated tests.</li>
            <li>Helped identify potential security issues and design solutions.</li>
          </ul>

          <h3 className={styles.awards}>Outcome</h3>

          <ul>
            <li>The project enjoyed a smooth, successful, on-time launch and was well received by users.</li>
          </ul>

          <h3 className={styles.tech}>Technology</h3>

          <ul>
            <li>NodeJS ES6, Express REST API</li>
            <li>Behavior Driven Development (BDD) with 100% unit test coverage using Mocha, Nock, and Supertest</li>
            <li>OpenAPI (Swagger) & <a href='http://jsonapi.org' target='_blank'>JSON API</a> Compliant</li>
            <li>Reporting using Bunyan, New Relic, & Sumologic</li>
            <li>Docker, Kuberneties, AWS</li>
          </ul>

        </div>

      </div>

    </div>);

  }

}
