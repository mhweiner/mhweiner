import React from 'react';

import styles from './base.scss';
import MarvelStyles from './Marvel.scss';

export default class Marvel extends React.PureComponent {

  render() {

    return (<div className={styles.base}>

      <img src='/static/images/content/marvel/1.jpg' className={MarvelStyles.hero}/>

      <div className={styles.content}>

        <div className={styles.sidebar}>

          <h3 className={styles.involvement}><i className='fa fa-user-astronaut'/>My Involvement</h3>

          <ul>
            <li>Led R&D and front-end architecture.</li>
            <li>Worked with team to solve major challenges, such as payload size, performance, legacy, maintenance costs, and others.</li>
            <li>Co-invented innovative CSS build process technique to reduce filesize.</li>
            <li>Led in setting standards, methodologies and conventions to ensure a smooth and efficient process, such as the Responsive Module Library.</li>
            <li>Wrote a highly performant multi-process automated testing program specially designed for responsive websites
              (<a href="https://github.com/mhweiner/jdiff" target='_blank'>jdiff</a>).</li>
          </ul>

          <h3 className={styles.awards}><i className='fa fa-award'/>Outcome &amp; Achievements</h3>

          <ul>
            <li>Successfully launched by deadline with two weeks to spare and to excellent reception.</li>
            <li>One of the first large-scale, media-rich, high-traffic fully-responsive websites.</li>
            <li>Website lasted from 2013 - 2018!</li>
          </ul>

          <h3 className={styles.tech}><i className='fa fa-cogs'/>Technology</h3>

          <ul>
            <li>HTML5/CSS3, Javascript, ZeptoJS, PHP, Ruby</li>
            <li>Device-Agnostic Feature-Based Responsive Design (320px - 2200px+), vertical and horizontal</li>
            <li>Custom <code>sass</code> extension CSS Variant Export Script written in Ruby, served by a device-detection Disney service</li>
            <li>Atomic-design "module/component" system, similar to React</li>
            <li>Custom multi-Process PHP automated visual diff tool with <a href='https://www.seleniumhq.org/' target='_blank'>Selenium</a> (<a href="https://github.com/mhweiner/jdiff" target='_blank'>jdiff</a>)</li>
          </ul>

        </div>


        <div className={styles.main}>

          <p>In early 2013, mobile device usage had exploded, but Marvel.com was still not mobile-friendly. Marvel had two options &mdash;
            build a "mobile" version of their website, which was still standard practice for the time, or take a chance
            on a new "responsive design" methodology that was gaining buzz. Marvel didn't want mobile users to have a
            lesser experience, so they decided to take a gamble.</p>

          <p>I was hired as a consultant to lead the R&D for the new responsive Marvel.com that would support all of Marvel's business verticals.</p>

          <p>Today, <em>responsive design</em> is a well understood methodology for building websites and
            web-based applications to support any device with a single codebase. But back then, it was still an emerging technology.
            There weren't many examples and we had to make up solutions as we went. Existing large-scale responsive
            sites we saw at the time were found to be highly simplified (sacrificing features, design, and interactivity) and in some cases,
            were considered "off-brand" by our designers. Marvel insisted on having a bold "on-brand" design and an
            immersive user-experience. They wanted high-res images and videos to support the new high-dpi
            devices. They wanted it all in a short nine month deadline, and to top it off, we needed to support IE8!</p>

          <h3>Technical Challenges</h3>

          <p>The biggest technical challenges were:</p>

          <ul>
            <li>Payload size of CSS, HTML, Javascript, hi-res images, and other assets</li>
            <li>Older mobile connection speeds in 2013 (3G at best)</li>
            <li>Performance, especially on mobile devices &mdash; and even more so for older mobile devices</li>
            <li>Lack of examples and existing tooling</li>
            <li>Testing</li>
            <li>The scope of the website and tight deadline</li>
          </ul>

          <p>One of the biggest challenges we had was payload size. This means the total file size of all of the
            assets, including CSS, HTML, images, and javascript. Too large filesizes resulted in unacceptable download times
            and slowed-down or crashed devices, especially mobile.</p>

          <p>The second biggest challenge was the timeline. None of us at Marvel had ever built a responsive website before. Building this project required an entirely new project management strategy. Our PM relied on developers and designers collaborating to figure out a viable strategy that worked for everyone. One thing was clear &mdash;
            building a responsive website was going to require more work than we had previously thought. Every single page required expensive, exhaustive testing, and we had many.</p>

          <h3>Solution: Responsive Module Library</h3>

          <p>One of my first suggestions was to create what I called a "Responsive Module Library". Each of these reusable components
            would be full-width across the page, responsive and tested in isolation. Any page that is composed of these modules
            exclusively would itself be guaranteed to be fully-responsive and also fully-tested without having to test each page individually.</p>

          <p>I worked closely with the design team to pair down the number of modules that we would have to build. Not only did this reduce development time, it also helped with our filesize concerns as well.</p>

          <h3>Solution: CSS Variant Export Script</h3>

          <p>Our biggest technical challenge was solving the CSS file-size problem. Our unique solution actually violated
            some of the idealistic theory of "device agnostic responsive design" at the time. We designed an automated
            build process that intelligently broke apart the CSS code only required by specific devices or browsers, and
            packaged them into different files we called "variants." Then, using a device-detection service, we were able
            to send only the code each device actually used. For example, only IE8 got all of the
            IE8 hacks. Smaller devices only got the CSS styles for smaller devices, since smaller devices cannot
            physically become bigger (unlike a desktop that can become smaller by making the window smaller). We saw
            massive filesize savings across the board, especially for iPhones and other small mobile devices.</p>

          <h3>Solution: Mobile First CSS</h3>

          <p>We discovered that by coding our default styles for the smallest devices and then progressively enhancing our way up to large desktop browsers, we could save about 33% of filesize. However, this created problems for IE8, which did not recognize the required "media queries".
            We were able to get around this problem by leveraging our CSS Variant Export Script and using <a href='https://sass-lang.com/' target='_blank'>sass</a> <i className='fa fa-external-link-alt' style={{fontSize: '13px'}}/> mixins.</p>

        </div>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/marvel/2.jpg"/>
        <img src="/static/images/content/marvel/3.jpg" className={MarvelStyles.mobileScreenshot}/>
        <img src="/static/images/content/marvel/4.jpg"/>
        <img src="/static/images/content/marvel/4.gif"/>
      </div>

    </div>);

  }

}