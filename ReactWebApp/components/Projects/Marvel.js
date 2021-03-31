import React from 'react';

import styles from './base.scss';
import MarvelStyles from './Marvel.scss';

export default class Marvel extends React.PureComponent {

  render() {

    return (<div className={styles.base}>

      <img src='/static/images/content/marvel/lockup.png' className={MarvelStyles.hero}/>

      <div className={styles.content}>

        <div className={styles.main}>

          <h2>I led R&D for Marvel.com, one of the first high-traffic responsive websites.</h2>

          <p>In early 2013, mobile device usage had exploded, but Marvel.com was still not mobile-friendly. Marvel had two options &mdash;
            build a "mobile" version of their website, which was still standard practice for the time, or take a chance
            on a new "responsive design" methodology that was gaining buzz. Marvel didn't want mobile users to have a
            lesser experience, so they decided to take a gamble.</p>

          <p>I was hired as a consultant to lead the R&D for the new responsive Marvel.com that would support all of Marvel's business verticals.</p>

          <p>Today, responsive designis a well understood methodology for building websites and
            web-based applications to support any device with a single codebase. But back then, it was still an emerging technology.
            There weren't many examples and we had to make up solutions as we went. Existing large-scale responsive
            sites we saw at the time were found to be highly simplified (sacrificing features, design, and interactivity) and in some cases,
            were considered "off-brand" by our designers. Marvel insisted on having a bold "on-brand" design and an
            immersive user-experience. They wanted it all in a short nine month deadline, and to top it off, we needed to support IE8!</p>

          <h3>Technical Challenges</h3>

          <p>The biggest technical challenges were:</p>

          <ul>
            <li>Payload size of CSS, HTML, Javascript, hi-res images, and other assets</li>
            <li>Older mobile connection speeds in 2013 (3G at best)</li>
            <li>Performance, especially on mobile devices</li>
            <li>Lack of examples and existing tooling</li>
            <li>Testing</li>
            <li>The scope of the website and tight deadline</li>
          </ul>

          <p>One of the biggest challenges we had was payload size, especially CSS. Too large CSS files resulted in unacceptable download and rendering times,
            and even slowed-down or crashed devices.</p>

          <p>The second biggest challenge was the timeline. None of us at Marvel had ever built a responsive website before. Building this project required an entirely new project management strategy. Our PM relied on developers and designers collaborating to figure out a viable strategy. One thing was clear &mdash;
            building Marvel.com as a responsive website was going to be a lot of work. Every single page required expensive, exhaustive testing, and we had many.</p>

          <h3>Solution: Responsive Module Library</h3>

          <p>One of my first contributions was to create what I called a "Responsive Module Library". Each of these reusable components
            would be full-width across the page, fully-responsive, and tested in isolation. Any page that is composed of these modules
            exclusively would itself be guaranteed to be fully-responsive and also fully-tested.</p>

          <p>I worked closely with the design team to pair down the number of modules that we would have to build. Not only did this greatly reduce development and QA time, it also helped with our file size concerns as well, which turned out to be a really big deal.</p>

          <h3>Solution: Mobile First CSS</h3>

          <p>We discovered that by coding our default styles for the smallest devices and then progressively enhancing our way up to large desktop browsers, we could save about 33% of filesize. However, this created problems for IE8, which did not recognize the required "media queries".
            We were able to get around this problem by leveraging our CSS Variant Export Script and using <a href='https://sass-lang.com/' target='_blank'>sass</a> <i className='fa fa-external-link-alt' style={{fontSize: '13px'}}/> mixins.</p>

          <h3>Solution: CSS Variant Export Script</h3>

          <p>Our biggest technical challenge was solving the CSS file size problem. Co-invented with my colleague Andres Gallo,
            we came up with a way to intelligently break apart the CSS code into "variants" automatically during the build process.
            Using a backend device-detection service, we were able to send these variants only to the devices that needed it.
            For example, only IE8 got all of the IE8 hacks. Smaller devices (ie, iPhone) only got the styles they required, nothing more.
            Desktop would get smaller and larger variants. Devices with touch inputs would get that variant, and so on.
            We saw massive filesize savings across the board, especially for small mobile devices. This drastically improved download speeds,
          runtime performance, and stability.</p>

        </div>

        <div className={styles.sidebar}>

          <h3 className={styles.involvement}>My Involvement</h3>

          <ul>
            <li>Led R&D and front-end development.</li>
            <li>Led in setting standards, methodologies and conventions to ensure a smooth and efficient process and reduce QA workload, such as the innovative Responsive Module Library.</li>
            <li>Co-invented innovative CSS build process technique to reduce filesize.</li>
            <li>Wrote automated visual CI/CD testing suite specially designed for Marvel.com using a perceptual difference engine.
              (<a href="https://github.com/mhweiner/jdiff" target='_blank'>jdiff</a>).</li>
            <li>Worked closely with Art Director and Art Department to align design and tech efforts.</li>
          </ul>

          <h3 className={styles.awards}>Outcome</h3>

          <ul>
            <li>Successfully launched two weeks early and to excellent reception.</li>
            <li>One of the first large-scale, media-rich, high-traffic fully-responsive websites.</li>
            <li>Website lasted from 2013 - 2018!</li>
          </ul>

          <h3 className={styles.tech}>Technology</h3>

          <ul>
            <li>HTML5/CSS3, Javascript, ZeptoJS, PHP, Ruby</li>
            <li>Device-Agnostic Feature-Based Responsive Design (320px - 2200px+), vertical and horizontal</li>
            <li>Custom <code>sass</code> extension CSS Variant Export Script written in Ruby, served by a device-detection Disney service</li>
            <li>Atomic-design module and component-based system</li>
            <li>Custom multi-Process PHP automated visual diff tool with <a href='https://www.seleniumhq.org/' target='_blank'>Selenium</a> (<a href="https://github.com/mhweiner/jdiff" target='_blank'>jdiff</a>)</li>
          </ul>

        </div>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/marvel/2.jpg"/>
        <img src="/static/images/content/marvel/3.jpg" className={MarvelStyles.mobileScreenshot}/>
        <img src="/static/images/content/marvel/portfolio-marvel_com-work-01.jpg"/>
        <img src="/static/images/content/marvel/portfolio-marvel_com-work-02.jpg"/>
        <img src="/static/images/content/marvel/portfolio-marvel_com-work-03.jpg"/>
      </div>

    </div>);

  }

}
