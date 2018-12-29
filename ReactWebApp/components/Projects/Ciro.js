import React from 'react';

import styles from './base.scss';
import ciroStyles from './Ciro.scss';

export default class Ciro extends React.PureComponent {

  render() {

    let c = (classes) => {

      return classes.join(' ');

    };

    return (<div className={styles.base}>

      <div className={ciroStyles.hero}>
        <img src='/static/images/content/ciro/lockup.png'/>
      </div>

      <div className={styles.text}>

        <h2>Project management and collaboration tools should speed up communication, not slow it down.</h2>

        <a className={styles.extLink} href="https://www.advizr.com/" target="_blank">Visit Website<i className='fa fa-external-link-alt'/></a>

        <h3><i className={c(['fa', 'fa-flag', styles.challenge])}/>The Challenge</h3>
        <p>Existing tools are slow and painful. They either show too much information, or too little. Most importantly, they don't solve the biggest problem that teams face — too many interruptions. </p>
        <p>Frustrated by existing project management tools, I decided to create my own. It had to:</p>
        <ul>
          <li><b>Have a smart queue notification system</b> that limits annoying disruptions in your chat channels. Slack is not a queue. Email isn't (a good one) either. Let's have a queue.</li>
          <li><b>Be super fast</b>, intuitive, and easy to use. Keyboard shortcuts to quickly zip through forms.</li>
          <li><b>Be flexible.</b> Every team works differently, and does Agile differently.</li>
          <li><b>Have easy and powerful search tools.</b></li>
          <li><b>Have automatic sorting</b> by priority and effort, as prescribed by Agile.</li>
          <li><b>Clear head space.</b> Limit distractions and information overload.</li>
          <li><b>Support concurrent multi-project and multi-sprint scenarios</b>.</li>
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
        <img src="/static/images/content/ciro/ss-notification.png" style={{borderBottom: '1px solid'}}/>
        <img src="/static/images/content/ciro/ss-workflow.png" style={{borderBottom: '1px solid'}}/>
        <img src="/static/images/content/ciro/ss-sprints.png" style={{borderBottom: '1px solid'}}/>
        <img src="/static/images/content/ciro/ss-tasks.png" style={{borderBottom: '1px solid'}}/>
      </div>

    </div>);

  }

}