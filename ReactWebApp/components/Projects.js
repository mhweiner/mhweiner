import React from 'react';

import styles from './Projects.scss';

export default class Projects extends React.Component {

  render() {

    return (
      <div className={styles.default}>
        <div className={styles.belt}>
          <h3>work.</h3>
          <div className={styles.container}>
            <article data-id="advizr">
              <div className={styles.img}><img src="static/images/logos/advizr.png"/></div>
              <div className={styles.description}>
                <span className={styles.tag}>Front-End</span>
                <span className={styles.tag}>UX</span>
                <span className={styles.tag}>Leadership</span>
                <p>Financial Planning, reinvented.</p>
              </div>
            </article>
            <article data-id="marvel">
              <div className={styles.img}><img src="static/images/logos/marvel-white.png"/></div>
              <div className={styles.description}>
                <span className={styles.tag}>Front-End</span>
                <span className={styles.tag}>R&D</span>
                <span className={styles.tag}>Leadership</span>
                <p>The official website of Marvel Entertainment.</p>
              </div>
            </article>
            <article data-id="ciro">
              <div className={styles.img}><img src="static/images/logos/ciro-icon2.png"/></div>
              <div className={styles.description}>
                <span className={styles.tag}>Full-Stack</span>
                <span className={styles.tag}>UX</span>
                <span className={styles.tag}>Founder</span>
                <p>Helping development teams communicate more effectively.</p>
              </div>
            </article>
            <article data-id="shutterstock">
              <div className={styles.img}><img src="static/images/logos/shutterstock.png"/></div>
              <div className={styles.description}>
                <span className={styles.tag}>Back-End</span>
                <p>Shutterstock Enterprise Invoice API</p>
              </div>
            </article>
            <article data-id="devotify">
              <div className={styles.img}><img src="static/images/logos/devotify.png"/></div>
              <div className={styles.description}>
                <span className={styles.tag}>Front-End</span>
                <span className={styles.tag}>UX</span>
                <p>Hyper-local loyalty platform for iOS and Android.</p>
              </div>
            </article>
            <article data-id="roadsign">
              <div className={styles.img}><img src="static/images/logos/roadsign.png"/></div>
              <div className={styles.description}>
                <p>National shipping logistics tracking platform.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    )

  }

}