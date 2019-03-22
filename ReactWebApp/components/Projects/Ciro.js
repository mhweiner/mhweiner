import React from 'react';

import styles from './base.scss';

export default class Ciro extends React.PureComponent {

  render() {

    let c = (classes) => {

      return classes.join(' ');

    };

    return (<div className={styles.base}>

      <img src='/static/images/content/ciro/lockup.png' style={{
        maxWidth: '800px',
        margin: '22px auto 56px',
        display: 'block'
      }}/>

      <div className={styles.text}>

        <h2>Project management and collaboration tools should speed up communication, not slow it down.</h2>

        <p>Existing tools are slow and painful. They either show too much information, or too little. Most importantly, they don't solve the biggest problem that teams face — too many interruptions. </p>
        <p>Frustrated by existing project management tools, I decided to create my own. It had to:</p>
        <ul>
          <li><b>Treat things you need to read or respond to like tasks.</b> It featured a "smart" queue notification system that track what you have read or responded to, based on underlying task prioritization and urgency. This limits annoying disruptions in your chat channel. Slack is not a queue. Email isn't (a good one) either.</li>
          <li><b>Be super fast</b>, intuitive, and easy to use. Keyboard shortcuts to quickly zip through forms.</li>
          <li><b>Be flexible.</b> Every team works differently, and does Agile differently.</li>
          <li><b>Have easy and powerful search tools.</b></li>
          <li><b>Have automatic sorting</b> by priority and effort, as prescribed by Agile.</li>
          <li><b>Clear head space.</b> Limit distractions and information overload.</li>
          <li><b>Support concurrent multi-project and multi-sprint scenarios</b>.</li>
        </ul>

        <section className={styles.tech}>
          <h3><i className='fa fa-cogs'/>Technology & Methodology</h3>
          <ul>
            <li>Fully responsive, custom component-based Javascript SPA MVVM framework built with <a href="http://github.com/mhweiner/hmjs" target="_blank">HMJS</a></li>
            <li>PHP7 REST API, built with a lightweight, modular custom HMVC framework</li>
            <li>Real-time via <a href="http://pubnub.com" target="_blank">PubNub</a></li>
            <li>CentOS / Apache / DigitalOcean / Docker / Kubernetes</li>
            <li>Custom build & CI process with node.js</li>
          </ul>
        </section>

        <h3><i className='fa fa-user-astronaut'/>My Involvement</h3>
        <p>I am the <strong>sole founder</strong> and did all of the design, architecture, strategy, development, and dev-ops for the MVP.</p>

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