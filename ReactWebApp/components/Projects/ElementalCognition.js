import React from 'react';

import styles from './base.scss';
import ecStyles from './ElementalCognition.scss';

export default class ElementalCognition extends React.Component {

  render() {

    let c = (classes) => {

      return classes.join(' ');

    };

    return (<div className={[styles.base, ecStyles.default].join(' ')}>

      <div className={ecStyles.hero}/>

      <div className={styles.text}>

        <h2>Teaching a system through "natural learning" will help machines understand the "why" behind their answers.</h2>

        <p>Modern AI leaves much to be desired. Although machines have become pretty good at recognizing patterns, faces, and roads, they cannot understand
        something as simple as a children's bedtime story. They are unable to explain the "why" or the "how" behind the answers they give us. Their answers are either opaque or based on statistics.</p>

        <p>To tackle the problem of "understanding", Elemental Cognition, founded and led by IBM Watson alum Dr. David Ferrucci, starts by attempting to teach the system children's stories.
        To understand why something as seemingly simple as a children's story is so difficult, let's take one example:</p>

        <blockquote>The game was nearly over. The two teams were tied, one to one.  Alice kicked the ball. Oh no! She kicked it the wrong way. She kicked it toward the school building. "What a bad kick," Alice thought.</blockquote>

        <p>Who kicked the ball towards the school building? Why was that bad? Why was Alice upset? What is going on in this story?</p>

        <p>You might think you know the answers to these questions, but how do you know this? Did you picture a soccer game in your head? Did you picture where the goal might be in relation to the school building? Did you put yourself in Alice's shoes?</p>

        <p><strong>Context, language, Culture, and Reasoning are the keys to understanding</strong>.</p>

        <p>Elemental Cognition is betting that this knowledge can be acquired the same way that we do &mdash; something they call "Natural Learning." One of the main ways we interact with the system is with a "plain English" dialog.</p>

        <h3><i className={c(['fa', 'fa-flag', styles.challenge])}/>The Challenge</h3>

        <p>The challenge posed to me was to help them build a working application that could demonstrate the capabilities of their system, with the first version
          ready for a live demo during a talk given by Dr. Ferrucci within a few months.</p>
        <p>The application had to facilitate a dialog with the machine, show its introspective thinking, and demonstrate its understanding
          in a visual way. It had to be user-friendly and visually appealing.</p>

        <section>
          <h3><i className={c(['fa', 'fa-pawn', styles.solution])}/>Strategy</h3>
          <p>The first thing I worked on was a way to visually demonstrate the system's understanding, which I called VKR (Visual Knowledge Representation).</p>
          <p>This was an analog to a way the system already represented knowledge internally, but something more human readable.</p>
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

        <a className={styles.extLink} href="https://www.advizr.com/" target="_blank">Visit Website<i className='fa fa-external-link-alt'/></a>

      </div>

      <div className={styles.images}>
        <iframe
          src="https://player.vimeo.com/video/308217091"
          frameBorder="0"
          webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen
          style={{
            width: '100%',
            height: '571px',
            border: '1px solid',
            background: 'black'
          }}
        />
        <iframe src="https://www.youtube.com/embed/vsyPZdt6noE" frameBorder="0"
                allow="encrypted-media;"
                allowFullScreen style={{
                  width: '100%',
                  height: '571px',
                  border: '1px solid',
                  background: 'black'
                }}/>
      </div>

    </div>);

  }

}