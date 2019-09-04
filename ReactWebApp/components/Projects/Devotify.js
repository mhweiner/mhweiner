import React from 'react';

import styles from './base.scss';

export default class Devotify extends React.PureComponent {

  render() {

    let c = (classes) => {

      return classes.join(' ');

    };

    return (<div className={styles.base}>

      <img src='/static/images/content/devotify/1.jpg'/>

      <div className={styles.content}>

        <div className={styles.main}>

          <h2>I built an MVP for an early-stage startup that helped them raise funds.</h2>

          <p>Devotify's mission was to build true loyalty and breed advocacy for every business. The Devotify platform was a
            gamified and engaging loyalty program for local and small businesses. Businesses
            received their own fully-branded, customized app, in both the Google Play and App Store. The platform offered
            gamification with different rewards levels, push notifications, blog, coupons and special events,
            geo-location, event calendar, QR code scan system for payment and loyalty, and more.</p>

          <p>The challenge was to build a cross-platform MVP in a short timeline, under a tight budget. Each customer
            gets their own white-labled iOS and Android apps.</p>

          <h3>Technical Strategy</h3>

          <p>
            In order to deliver a cross-platform (iOS and Android) MVP under a tight budget, I went with <a href="https://cordova.apache.org/" target="_blank">Cordova</a> (formerly PhoneGap).
            The core would be an HTML5/Javascript app, with Cordova providing the bridge to the native environments, including native
            plugins for iOS an Android where necessary (written in Objective-C and Java respectively, of course).
          </p>
          <p>
            The main disadvantage of using something like Cordova is usually sacrifice in performance and "native-like" UX.
            However, since this application didn't require much in terms of performance like a game might, it was a good
            candidate for this option. Still, it was imperative that the end result felt as close to a native
            experience as possible.
          </p>

        </div>

        <div className={styles.sidebar}>

          <h3 className={styles.involvement}><i className='fa fa-user-astronaut'/>My Involvement</h3>

          <p>I was hired as a consultant to develop the MVP, which launched in early 2014.</p>

          <ul>
            <li>Architecture and development of hybrid HTML5/native cross-platform app and backend REST API.</li>
            <li>Dev-ops: Custom build process for white-label app production that scales easily with optimal performance.</li>
          </ul>

          <h3 className={styles.awards}><i className='fa fa-award'/>Outcome &amp; Achievements</h3>

          <ul>
            <li>Successfully delivered MVP by tight deadline and to excellent reception.</li>
            <li>Company was able to use the MVP to raise funding.</li>
          </ul>

          <h3 className={styles.tech}><i className='fa fa-cogs'/>Technology</h3>

          <ul>
            <li>REST API, built with a lightweight, modular custom PHP HMVC framework</li>
            <li><a href="https://cordova.apache.org/" target="_blank">Cordova</a>, <a href="http://github.com/mhweiner/hmjs" target="_blank">HMJS</a>, HTML5, Javascript, Objective-C, Java</li>
            <li>Custom CI/CD pipeline and build process (nodeJS) to quickly create new white-labeled apps for both iOS and Android</li>
          </ul>

        </div>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/devotify/5.gif" style={{borderBottom: '1px solid'}}/>
        <img src="/static/images/content/devotify/3.jpg" style={{borderBottom: '1px solid'}}/>
        <img src="/static/images/content/devotify/6.gif" style={{borderBottom: '1px solid'}}/>
      </div>

    </div>);

  }

}