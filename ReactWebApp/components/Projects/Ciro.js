import React from 'react';

import styles from './base.scss';

export default class Ciro extends React.PureComponent {

  render() {

    let c = (classes) => {

      return classes.join(' ');

    };

    return (<div className={styles.base}>

      <img src='/static/images/content/ciro/lockup.png' style={{
        display: 'block',
        margin: '40px auto',
        maxWidth: '800px',
        width: '100%'
      }}/>

      <div className={styles.content}>

        <div className={styles.main}>

          <h2>I started my own company aimed at solving inefficiencies in the way teams communicate.</h2>

          <p>Existing tools are slow and painful. They either show too much information, or too little. Most importantly, they don't solve the biggest problem that teams face — too many interruptions. </p>

          <p>Frustrated by existing project management tools, I decided to create my own. It had to:</p>

          <ul>
            <li>Limit distractions and information overload.</li>
            <li>Treat things you need to read or respond to like tasks. Slack is not a queue. Email isn't a good one either.</li>
            <li>Be super fast, intuitive, and easy to use. Keyboard shortcuts to quickly zip through forms.</li>
            <li>Be flexible. Every team works differently, and does Agile differently.</li>
            <li>Have easy and powerful search tools.</li>
            <li>Have automatic sorting by priority and effort, as prescribed by Agile.</li>
            <li>Support concurrent multi-project and multi-sprint scenarios.</li>
            <li>Support floating team members.</li>
          </ul>

          <h3>Outcome</h3>

          <p>I worked on Ciro full-time for
            a year and a half, signing up thousands of users and taking hundreds of feature requests. Although there has been some user validation, it turned out to be a very
            difficult market to penetrate. There is a lot of friction in getting a team switched to a new platform, and the project management space
          is incredibly crowded. I also made several mistakes, including not finding a co-founder
          soon enough. I take away a lot of lessons from this project.</p>

        </div>

        <div className={styles.sidebar}>

          <h3 className={styles.involvement}>My Involvement</h3>

          <p>I am the <strong>sole founder</strong> and did all of the design, architecture, strategy, development, and dev-ops for the MVP.</p>

          <h3 className={styles.tech}>Technology</h3>

          <ul>
            <li>Fully responsive, custom component-based Javascript SPA MVVM framework built with <a href="http://github.com/mhweiner/hmjs" target="_blank">HMJS</a></li>
            <li>PHP7 REST API, built with a lightweight, modular custom HMVC framework</li>
            <li>Real-time via <a href="http://pubnub.com" target="_blank">PubNub</a></li>
            <li>CentOS / Apache / DigitalOcean / Docker / Kubernetes</li>
            <li>Custom build & CI process with node.js</li>
          </ul>

        </div>

      </div>

      <div className={styles.images}>
        <img src="/static/images/content/ciro/ss-notification.png" style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
        <img src="/static/images/content/ciro/ss-workflow.png" style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
        <img src="/static/images/content/ciro/ss-sprints.png" style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
        <img src="/static/images/content/ciro/ss-tasks.png" style={{boxShadow: 'rgba(0,0,0,0.1) 0 0 10px'}}/>
      </div>

    </div>);

  }

}