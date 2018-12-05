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
              <div className={styles.img} style={{background: 'white'}}>
                <img src="static/images/logos/advizr.png"/>
              </div>
              <div className={styles.description}>
                <ul className={styles.tags}>
                  <li>Front-End</li>
                  <li>UX</li>
                  <li>API Design</li>
                </ul>
                <h4>Advizr</h4>
                <p>Financial Planning, reinvented.</p>
              </div>
            </article>

            <article data-id="marvel">
              <div className={styles.img} style={{background: '#ef0000'}}>
                <img src="static/images/logos/marvel-white.png"/>
              </div>
              <div className={styles.description}>
                <ul className={styles.tags}>
                  <li>Front-End</li>
                  <li>R&D</li>
                  <li>Leadership</li>
                </ul>
                <h4>Marvel.com</h4>
                <p>The official website of Marvel Entertainment.</p>
              </div>
            </article>

            <article data-id="ciro">
              <div className={styles.img} style={{background: 'linear-gradient(to bottom right, #dcd9d9, #d8d8d8)'}}>
                <img src="static/images/logos/ciro-icon2.png" style={{maxHeight:'70px'}}/>
              </div>
              <div className={styles.description}>
                <ul className={styles.tags}>
                  <li>Full-Stack</li>
                  <li>UX</li>
                  <li>Founder</li>
                </ul>
                <h4>Ciro</h4>
                <p>Helping development teams communicate more effectively.</p>
              </div>
            </article>

            <article data-id="shutterstock">
              <div className={styles.img} style={{
                background: 'url(/static/images/shutterstock-bg.jpg) center center no-repeat',
                backgroundSize: 'cover'
              }}>
                <img src="static/images/logos/shutterstock.png"style={{maxWidth: '75%'}}/>
              </div>
              <div className={styles.description}>
                <ul className={styles.tags}>
                  <li>Back-End</li>
                  <li>Architecture</li>
                  <li>API Design</li>
                </ul>
                <h4>Shutterstock Invoice API</h4>
                <p>Microservice that powers Shutterstock's enterprise e-commerce systems.</p>
              </div>
            </article>

            <article data-id="devotify">
              <div className={styles.img} style={{background: '#3e9391'}}>
                <img src="static/images/logos/devotify.png" style={{maxHeight: '50%'}}/>
              </div>
              <div className={styles.description}>
                <ul className={styles.tags}>
                  <li>Front-End</li>
                  <li>UX</li>
                </ul>
                <h4>Devotify</h4>
                <p>Hyper-local loyalty platform for iOS and Android.</p>
              </div>
            </article>

            <article data-id="roadsign">
              <div className={styles.img} style={{background: '#88c15f'}}>
                <img src="static/images/logos/roadsign.png" style={{
                  maxWidth: '73%',
                  maxHeight: '68%'
                }}/>
              </div>
              <div className={styles.description}>
                <h4>Roadsign</h4>
                <p>National shipping logistics tracking platform.</p>
              </div>
            </article>

          </div>
        </div>
      </div>
    )

  }

}