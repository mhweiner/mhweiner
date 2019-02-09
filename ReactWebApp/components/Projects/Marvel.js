import React from 'react';

import styles from './base.scss';
import marvelStyles from './Marvel.scss';

export default class Marvel extends React.PureComponent {

  render() {

    return (<div className={styles.base}>

      <div className={marvelStyles.hero}>
        <img src='/static/images/content/marvel/1.jpg'/>
      </div>

      <div className={styles.text}>

        <h2>Marvel.com broke new ground in 2013 to become one of the first large-scale, media-rich, high-traffic fully-responsive websites.</h2>

        <p>In early 2013, Marvel realized it had a problem. They noticed a trend in how people consumed Marvel content. Soon, mobile would actually overtake desktop.</p>
        <p>In addition for the need for a better mobile experience, they realized that they would not have the budget to support separate mobile, tablet, and desktop websites. Large phones like the Note were gaining in popularity, and the Microsoft Surface had just launched.</p>
        <img src='/static/images/content/marvel/devices.jpg' />
        <p><em>Responsive Design</em> was an emerging technology. In theory, it allowed for one single codebase to support <em>any</em> device.
          However, there were many unsolved problems and approaches. Only a few popular websites had adopted Responsive Design in some fashion, so there weren't that many examples or articles on the topic. Most examples seemed to be simplified or "watered down," and in most cases, were "off-brand." </p>
        <p>Marvel wasn't satisfied with this. They insisted on having a bold "on-brand" design and an immersive user-experience. They wanted high-resolution images and videos to support the new high-dpi devices such as Apple's "Retina" iPhone 4. They wanted interactive elements that were difficult to implement while supporting slower devices and cellular data speeds typical at the time. They wanted it all in a short 9 month deadline, and to top it off, they needed to still support IE8!</p>
        <p>While under contract, Marvel asked me to help do the initial R&D into a technical strategy for building a "responsive" website, by their deadline, and with their requirements.</p>
        <p>The biggest technical challenges were:</p>
        <ul>
          <li>Payload size of CSS, HTML, Javascript, hi-res images, and other assets.</li>
          <li>Older mobile connection speeds in 2013 (3G at best).</li>
          <li>Performance, especially on mobile devices. Double especially older mobile devices.</li>
          <li>Lack of examples and existing tooling.</li>
          <li>The scope of the website and tight deadline.</li>
        </ul>

        <section>
          <h3>STRATEGY: Responsive Module System</h3>
          <p>The original designs called for dozens of graphical and interactive components across the new website. Building and testing all of the pages as designed were
            estimated to blow past our deadline by months.
          </p>
        </section>

        <section className={marvelStyles.tech}>
          <h3>Technology & Methodology</h3>
          <ul>
            <li>HTML5/CSS3/Javascript/ZeptoJS/PHP/Ruby</li>
            <li>Device-Agnostic Feature-Based Responsive Design (320px - 2200px+), vertical and horizontal</li>
            <li>Custom <code>sass</code> extension CSS Variant Export Script written in Ruby, served by a device-detection Disney service WALT</li>
            <li>Atomic-design "module" system</li>
          </ul>
        </section>

        <section>
          <h3>My Involvement</h3>
          <ul>
            <li>Led R&D and front-end architecture.</li>
            <li>Worked with team to create solutions to major challenges, such as payload size, performance, legacy, maint. costs</li>
            <li>Co-invented innovative build process &mdash; a CSS variant export technique to battle CSS file size.</li>
            <li>Led in setting standards, methodologies and conventions to ensure a smooth and efficient process, such as the Responsive Module Inventory, in partnership with the Design team, specifically the Art Director.</li>
            <li>Wrote an automated testing suite specially designed for Marvel and responsive websites. This cut down on our QA turnaround significantly and kept quality high.</li>
            <li>Development and promotion of interactive Style Guide with the help of the Design team. The Style Guide was used by Marvel's business partners, such as ABC and app development vendors.</li>
          </ul>
        </section>

        <section>
          <h3>Achievements</h3>
          <ul>
            <li>Successfully launched by deadline with 2 weeks to spare and to an excellent reception.</li>
            <li>One of the first large-scale, media-rich, high-traffic fully-responsive websites.</li>
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