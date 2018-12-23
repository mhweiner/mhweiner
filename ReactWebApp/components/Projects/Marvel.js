import React from 'react';

import styles from './base.scss';
import marvelStyles from './Marvel.scss';

export default class Marvel extends React.Component {

  render() {

    let c = (classes) => {

      return classes.join(' ');

    };

    return (<div className={styles.base}>

      <div className={marvelStyles.hero}>
        <img src='/static/images/content/marvel/1.jpg'/>
      </div>

      <div className={styles.text}>

        <h2>Marvel.com broke new ground in 2013 to become one of the first large-scale, media-rich, high-traffic fully-responsive websites.</h2>

        <a className={styles.extLink} href="https://www.advizr.com/" target="_blank">Visit Website<i className='fa fa-external-link-alt'/></a>

        <h3><i className={c(['fa', 'fa-flag', styles.challenge])}/>The Challenge</h3>
        <p>Marvel's audience is increasingly mobile. To support the shifting device landscape, the website required a complete overhaul to become fully-responsive. In addition, the scope of the website was increased, unifying all of Marvel's business verticals under one domain.</p>
        <p>To make the challenge even more difficult, the designers wanted a bold, "on-brand" design, instead of a compromised watered-down experience typical of responsive websites at the time. We were given a 9 month deadline, and to top it off, we needed to support IE8!</p>
        <p>The biggest technical challenges were:</p>
        <ul>
          <li>Payload size of CSS, HTML, Javascript, hi-res images, and other assets.</li>
          <li>Older mobile connection speeds in 2013 (3G at best).</li>
          <li>Performance, especially on mobile devices. Double especially older mobile devices.</li>
          <li>The scope of the website, deadline, and lack of examples. We were breaking new ground.</li>
        </ul>

        <section>
          <h3><i className={c(['fa', 'fa-flask', styles.solution])}/>The Solution</h3>
          <p>Advizr marries robo-advising with a thoughtful user experience and solid performing application to
            create an unparalleled experience for advisors and their clients. Features are based on exhaustive
            user-research, iteration, and customer outreach programs.</p>
          <p>We leveraged a component-based modular UI that allowed us to iterate quickly
            while still allowing the application to scale (in terms of complexity without
            major rewrites). This allowed us to hone-in on our features and iterate quickly with customer feedback
            and data metrics.</p>
        </section>

        <section>
          <h3><i className={c(['fas', 'fa-cogs', styles.technology])}/>Technology</h3>
          <ul>
            <li>HTML5/CSS3/Javascript/ZeptoJS/PHP</li>
            <li>Newfangled "device agnostic feature based responsive design" methodology</li>
            <li>Custom sass extension CSS Variant Export Script written in Ruby</li>
          </ul>
        </section>

        <section>
          <h3><i className={c(['fa', 'fa-bomb', styles.involvement])}/>Involvement</h3>
          <ul>
            <li>Led R&D and front-end architecture.</li>
            <li>Worked with team to create solutions to major challenges, such as payload size, performance, legacy, maint. costs</li>
            <li>Co-invented innovative build process &mdash; a CSS variant export technique to battle CSS file size.</li>
            <li>Led in setting standards, methodologies and conventions to ensure a smooth and efficient process, such as the Responsive Module Inventory, in partnership with the Design team, specifically the Art Director.</li>
            <li>Wrote an automated testing suite specially designed for Marvel and responsive websites. This cut down on our QA turnaround significantly and kept quality high.</li>
            <li>Development and promotion of interactive Style Guide with the help of the Design team. The Style Guide was used by Marvel's business partners, such as ABC and app development vendors.</li>
            <li>Almost met Robert Downy, Jr.</li>
          </ul>
        </section>

        <section>
          <h3><i className={c(['fa', 'fa-trophy', styles.achievements])}/>Achievements & Awards</h3>
          <ul>
            <li>Recognized as Best Client-Facing Technology of 2015 by FPPad.</li>
            <li>Pre-revenue to over $2MM/yr within 2 years.</li>
          </ul>
        </section>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/marvel/2.jpg" style={{border: '1px solid #999'}}/>
        <img src="/static/images/content/marvel/3.jpg" style={{border: '1px solid #999', maxWidth: '320px', margin: '0 auto 20px auto', display: 'block'}}/>
        <img src="/static/images/content/marvel/4.jpg" style={{border: '1px solid #999'}}/>
        <img src="/static/images/content/marvel/4.gif" style={{border: '1px solid #999'}}/>
      </div>

    </div>);

  }

}