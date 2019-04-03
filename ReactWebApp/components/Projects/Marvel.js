import React from 'react';

import styles from './base.scss';
import MarvelStyles from './Marvel.scss';

export default class Marvel extends React.PureComponent {

  render() {

    return (<div className={styles.base}>

      <img src='/static/images/content/marvel/1.jpg' className={MarvelStyles.hero}/>

      <div className={styles.text}>

        <h2>Marvel.com broke new ground in 2013 to become one of the first media-rich, high-traffic, fully-responsive websites.</h2>

        <p>In early 2013, Marvel realized it had a problem. Mobile device usage was on an sharply upward trend, but their
          website was not mobile-friendly. Marvel had two options &mdash; build a "mobile" version of their website, which
          was still standard practice for the time, or take a gamble on a new and relatively unproven "responsive design"
          methodology that was gaining buzz. Marvel's digital department lacked the budget and resources for supporting
          two separate websites (a story for another day), and also didn't want mobile users to have a lesser experience.
          They decided to take a gamble.</p>
          <p>Today, <em>responsive design</em> is a well understood "standard practice" methodology for building websites and
            web-based applications to support any device with a single codebase. But back then, it was still an emerging technology.
          There were several competing ideologies, and had yet to be proven for a large-scale, media-rich and highly
            interactive product like Marvel.com. There simply weren't many examples. Most responsive
            sites at the time were highly simplified (sacrificing features, design, and interactivity) and in some cases,
            were considered "off-brand" by our designers. Marvel insisted on having a bold "on-brand" design and an
            immersive user-experience. They wanted high-res images and videos to support the new high-dpi
            devices. They wanted it all in a short nine month deadline, and
            to top it off, we needed to support IE8!</p>
        <p>The biggest technical challenges were:</p>
        <ul>
          <li>Payload size of CSS, HTML, Javascript, hi-res images, and other assets.</li>
          <li>Older mobile connection speeds in 2013 (3G at best).</li>
          <li>Performance, especially on mobile devices. Double especially older mobile devices.</li>
          <li>Lack of examples and existing tooling.</li>
          <li>The scope of the website and tight deadline.</li>
        </ul>

        <h3><i className='fa fa-user-astronaut'/>My Involvement</h3>
        <ul>
          <li>Led R&D and front-end architecture.</li>
          <li>Worked with team to solve major challenges, such as payload size, performance, legacy, maintenance costs, and others.</li>
          <li>Co-invented innovative build process &mdash; a CSS variant export technique to battle CSS file size.</li>
          <li>Led in setting standards, methodologies and conventions to ensure a smooth and efficient process, such as the Responsive Module Inventory.</li>
          <li>Wrote an automated testing suite specially designed for Marvel.com.</li>
          <li>Development and promotion of interactive Style Guide with the help of the Design team.</li>
        </ul>

        <h3>Challenges: Payload Size, Download/Startup Performance, and Tight Deadline</h3>

        <p>One of the biggest challenges we had was payload size. This means the total file size of all of the require assets, including CSS, HTML, images, and javascript. Our first attempts resulted in HUGE filesizes.
        Not only does this result in unacceptable download times, but it slowed down and often crashed most mobile devices of the time! If we didn't solve this problem, we would have failed.</p>

        <p>The second biggest challenge was the timeline. None of us at Marvel had ever built a responsive website before. Building this project required an entirely new project management strategy. Our PM relied on developers and designers collaborating to figure out a viable strategy that worked for everyone. One thing was clear &mdash;
        building a responsive website was going to require more work than we had previously thought. Every single page required expensive, exhaustive testing, and we had many.</p>

        <h3><i className='fa fa-star'/>Solution 1: Responsive Module Library</h3>
        <p>One of my first suggestions was to create what I called a "Responsive Module Library". Each of these components
        would be full-width across the page, responsive and tested in isolation. Any page that is composed of these modules
          exclusively would itself be guaranteed to be fully-responsive and also fully-tested without having to test each page individually.</p>
        <p>I worked closely with the design team to pair down the number of Modules that we would have to build. Not only did this dramatically reduce development time, it also helped with our filesize concerns, as we were able to increase code re-use.</p>

        <h3><i className='fa fa-star'/>Solution 2: CSS Variant Export Script</h3>
        <p>Our biggest technical challenge was solving the CSS file-size problem. Our unique solution actually violated
          some of the idealistic theory of "device agnostic responsive design" at the time. We designed an automated
          build process that intelligently broke apart the CSS code only required by specific devices or browsers, and
          packaged them into different files we called "variants." Then, using a device-detection service, we were able
          to send only the code each device actually used. For example, only IE8 got all of the
          IE8 hacks. Smaller devices only got the CSS styles for smaller devices, since smaller devices cannot
          physically become bigger (unlike a desktop that can become smaller by making the window smaller). We saw
          massive filesize savings across the board, especially for iPhones and other small mobile devices.</p>

        <h3><i className='fa fa-star'/>Solution 3: Mobile First CSS</h3>
        <p>We discovered that by coding our default styles for the smallest devices and then progressively enhancing our way up to large desktop browsers, we could save about 33% of filesize. However, this created problems for IE8, which did not recognize the required "media queries".
          We were able to get around this problem by leveraging our CSS Variant Export Script and using <a href='https://sass-lang.com/' target='_blank'>sass</a> <i className='fa fa-external-link-alt' style={{fontSize: '13px'}}/> mixins.</p>

        <h3><i className='fa fa-award'/>Outcome & Achievements</h3>
        <ul>
          <li>Successfully launched by deadline with 2 weeks to spare and to excellent reception.</li>
          <li>One of the first large-scale, media-rich, high-traffic fully-responsive websites.</li>
          <li>Website lasted from 2013 - 2018! Even the new site still borrows from the old.</li>
        </ul>

        <section className={styles.tech}>
          <h3><i className='fa fa-cogs'/>Technology & Methodology</h3>
          <ul>
            <li>HTML5/CSS3, Javascript, ZeptoJS, PHP, Ruby</li>
            <li>Device-Agnostic Feature-Based Responsive Design (320px - 2200px+), vertical and horizontal</li>
            <li>Custom <code>sass</code> extension CSS Variant Export Script written in Ruby, served by an internal device-detection Disney service</li>
            <li>Atomic-design "module/component" system, similar to React</li>
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