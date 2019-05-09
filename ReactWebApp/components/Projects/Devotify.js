import React from 'react';

import styles from './base.scss';

export default class Devotify extends React.PureComponent {

  render() {

    let c = (classes) => {

      return classes.join(' ');

    };

    return (<div className={styles.base}>

      <img src='/static/images/content/devotify/1.jpg'/>

      <div className={styles.text}>

        <h2>When solutions-driven technology serves business needs, engineering decisions become easier.</h2>

        <p>Devotify's mission is to build true loyalty and breed advocacy for every business.
          The Devotify platform is a gamified and engaging loyalty program for local and small businesses. Businesses
          receive their own fully-branded, customized app, in both the Google Play and App Store. The platform offers
          features such as gamification with different rewards levels, push notifications, blog,
          coupons and special events, geo-location, event calendar, QR code scan system, and more.</p>

        <p>The challenge was to build a cross-platform MVP in a short timeline, under a tight budget. Each customer gets their own white-labled iOS and Android apps.</p>

        <h3>Strategy</h3>
        <p>
          In order to deliver a cross-platform (iOS and Android) MVP under a tight budget, I decided to use <a href="https://cordova.apache.org/" target="_blank">Cordova</a>
          &nbsp;(formerly PhoneGap). This allowed for the core of the application to be a single project, instead of
          two entirely separate projects (iOS and Android). The core would be an HTML5/Javascript app, with Cordova
          providing the bridge to the native environments, including native plugins where necessary.
        </p>
        <p>
          The disadvantages of using Cordova is usually sacrifice in performance and "native-like" UX. Since this application didn't
          require much in terms of performance like an interactive game would, it was a good candidate for this option.
          Still, great care was taken to mitigate these issues, with the end result feeling very close to a native
          experience, at nowhere near the cost of developing two separate native apps.
        </p>

        <h3 className={styles.awards}><i className='fa fa-award'/>Outcome & Achievements</h3>
        <ul>
          <li>Successfully delivered MVP by tight deadline and to excellent reception.</li>
          <li>Company was able to successfully receive funding.</li>
        </ul>

        <h3 className={styles.involvement}><i className='fa fa-user-astronaut'/>My Involvement</h3>
        <p>I was hired as a consultant to develop the MVP, which launched in late 2014. Devotify has since added new features and built their own <i>Devotify</i> app which is a hyper-local discovery app.</p>
        <ul>
          <li>Architecture and development of hybrid HTML5/native cross-platform app and backend REST API.</li>
          <li>Business analysis & requirement gathering.</li>
          <li>Dev-ops: Custom build process for white-label app production that scales easily with optimal performance.</li>
        </ul>

        <h3 className={styles.tech}><i className='fa fa-cogs'/>Technology & Methodology</h3>
        <ul>
          <li>REST API, built with a lightweight, modular custom PHP HMVC framework</li>
          <li>White-labeled apps are a cross-platform hybrid HTML5/Javascript application with <a href="https://cordova.apache.org/" target="_blank">Cordova</a> (formerly PhoneGap), running a custom UI Component framework built with <a href="http://github.com/mhweiner/hmjs" target="_blank">HMJS</a></li>
          <li>Custom CI/CD pipeline and build process (nodeJS) to quickly create new white-labeled apps for both iOS and Android</li>
        </ul>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/devotify/5.gif" style={{borderBottom: '1px solid'}}/>
        <img src="/static/images/content/devotify/3.jpg" style={{borderBottom: '1px solid'}}/>
        <img src="/static/images/content/devotify/6.gif" style={{borderBottom: '1px solid'}}/>
      </div>

    </div>);

  }

}