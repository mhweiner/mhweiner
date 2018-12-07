import React from 'react';

import styles from './Projects.scss';

export default class Projects extends React.Component {

  render() {

    return (
      <div className={styles.default}>
        <div className={styles.belt}>
          <h3>work.</h3>
          <div className={styles.container}>

            <article>
              <div className={styles.img} style={{
                background: 'linear-gradient(90deg, #ff8100, #ff636f)'
              }}>
                <div className={styles.seeProject}><i className='fa fa-fighter-jet'/>Go to Mission</div>
                <img src="static/images/logos/advizr-icon.png" style={{
                  maxWidth: 'none',
                  maxHeight: 'none',
                  height: '59%'
                }}/>
              </div>
              <div className={styles.description}>
                <img src='static/images/award.png' className={styles.awardBadge}/>
                <ul className={styles.tags}>
                  <li>Front-End</li>
                  <li>UX</li>
                  <li>API Design</li>
                </ul>
                <h4>Advizr</h4>
                <p>Financial Planning, reinvented.</p>
              </div>
            </article>

            <article>
              <div className={styles.img} style={{
                background: 'url(/static/images/ec-bg.png) center center no-repeat',
                backgroundSize: 'cover'
              }}>
                <div className={styles.seeProject}><i className='fa fa-fighter-jet'/>Go to Mission</div>
                <img src="static/images/logos/ec.png" className={styles.ec}/>
              </div>
              <div className={styles.description}>
                <ul className={styles.tags}>
                  <li>Front-End</li>
                  <li>UX</li>
                  <li>API Design</li>
                </ul>
                <h4>Elemental Cognition</h4>
                <p>Public-facing and internal applications for a leading Artificial Intelligence research company.</p>
              </div>
            </article>

            <article>
              <div className={styles.img} style={{
                background: 'url(/static/images/shutterstock-bg.jpg) center center no-repeat',
                backgroundSize: 'cover'
              }}>
                <div className={styles.seeProject}><i className='fa fa-fighter-jet'/>Go to Mission</div>
                <img src="static/images/logos/shutterstock.png"style={{maxWidth: '75%'}}/>
              </div>
              <div className={styles.description}>
                <ul className={styles.tags}>
                  <li>Back-End</li>
                  <li>API Design</li>
                </ul>
                <h4>Shutterstock Invoice API</h4>
                <p>Microservice that powers Shutterstock's enterprise e-commerce systems.</p>
              </div>
            </article>

            <article>
              <div className={styles.img} style={{
                background: 'url(/static/images/marvel-bg.jpg) center center no-repeat',
                backgroundSize: 'cover'
              }}>
                <div className={styles.seeProject}><i className='fa fa-fighter-jet'/>Go to Mission</div>
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

            <article>
              <div className={styles.img} style={{background: 'linear-gradient(to bottom right, #dcd9d9, #d8d8d8)'}}>
                <div className={styles.seeProject}><i className='fa fa-fighter-jet'/>Go to Mission</div>
                <img src="static/images/logos/ciro.png" style={{maxHeight:'70px'}}/>
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

            <article>
              <div className={styles.img} style={{background: '#3e9391'}}>
                <div className={styles.seeProject}><i className='fa fa-fighter-jet'/>Go to Mission</div>
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

          </div>
        </div>
      </div>
    )

  }

}