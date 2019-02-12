import React from 'react';

import styles from './base.scss';

export default class ElementalCognition extends React.PureComponent {

  render() {

    return (<div className={[styles.base].join(' ')}>

      <img src='/static/images/content/ec/tracks.jpg'/>

      <div className={styles.text}>

        <h2>Teaching a system through "natural learning" will help machines understand the "why" behind their answers.</h2>

        <p>Modern AI leaves much to be desired. Although machines have become pretty good at recognizing patterns, faces, and roads, they cannot understand
        something as simple as a children's bedtime story. They are unable to explain the "why" or the "how" behind the answers they give us. Their answers are either opaque or based on statistics.</p>

        <p>To tackle the problem of "understanding", Elemental Cognition, founded and led by IBM Watson alum Dr. David Ferrucci, starts by attempting to teach the system children's stories.
        To understand why something as seemingly simple as a children's story is so difficult, let's take one example:</p>

        <blockquote>The game was nearly over. The two teams were tied, one to one.  Alice kicked the ball. Oh no! She kicked it the wrong way. She kicked it toward the school building. "What a bad kick," Alice thought.</blockquote>

        <p>Who kicked the ball towards the school building? Why was that bad? Why was Alice upset? What is going on in this story?</p>

        <p>You might think you know the answers to these questions, but how do you know this? Did you picture a soccer game in your head? Did you picture where the goal might be in relation to the school building? Did you put yourself in Alice's shoes?</p>

        <p>
          As you can see, <strong>context, language, Culture, and Reasoning are the keys to understanding</strong>.
        Elemental Cognition is betting that this knowledge can be acquired the same way that we do &mdash;
        something they call "Natural Learning." One of the main ways we interact with the system is with a "plain English" dialog.
        </p>

        <h3>The Challenge</h3>

        <p>The challenge posed to me was to help them build a working front-end application that could demonstrate the capabilities of their system, with the first version
          ready for a live demo during a talk given by Dr. Ferrucci within a few months.</p>
        <p>The application had to facilitate a dialog with the machine, show its introspective thinking, and demonstrate its understanding
          in a visual way. It had to be user-friendly and visually appealing.</p>

        <section>
          <h3>Strategy</h3>
          <p>The first thing I worked on was a way to visually demonstrate the system's understanding, which I called VKR (Visual Knowledge Representation).</p>
        </section>

        <div className={styles.images} style={{margin: '30px -80px 0'}}>
          <img src='/static/images/content/ec/VKR.png'/>
        </div>

        <section>
          <p>VKR is a collection of pages that are a designed around a pivot on the data, such as "Motivation", "Objects", "Events", "Timeline", etc.</p>
          <p>Then I had to design an application where the user can "chat" with the system, see what it's "thinking", and be able to see the VKR and Summary.
            The user also needs to see the story on the left to have common reference with the system.</p>
        </section>

        <div className={styles.images} style={{margin: '30px -80px 0'}}>
          <img src='/static/images/content/ec/chat.jpg'/>
          <img src='/static/images/content/ec/thinking.jpg'/>
        </div>

        <section>
          <p>Last, I had to help design a REST API to power the app, and start building the app itself. We used Swagger and SwaggerHub to collaborate
          with the team to help build the API, while simultaneously building the app, for which we chose React and a Flux-like state management design.</p>
          <p>The development of the "backend" API and web app were built in parallel, and again, SwaggerHub helped keep us all on the same page during the process.</p>
        </section>

        <section>
          <h3>Technology</h3>
          <ul>
            <li>HTML5/CSS3/ES6/Typescript/React/Flux</li>
            <li>REST API (Java)</li>
            <li>Swagger, SwaggerHub</li>
            <li>Super-top-secret stuff I cannot disclose</li>
          </ul>
        </section>

        <section>
          <h3>My Involvement</h3>
          <ul>
            <li>Led UX strategy and conceptual design of "VKR" design system</li>
            <li>Led R&D, front-end architecture and development</li>
            <li>Worked closely with researchers and reported directly to Dr. Ferrucci</li>
          </ul>
        </section>

        <section>
          <h3>Achievements & Awards</h3>
          <ul>
            <li>Successfully delivered first version by tight deadline and was well received</li>
            <li>Used in talks by Dr. Ferrucci and continues to be used as one of the main ways to test and judge our progress as a company</li>
            <li>Used to show investors and demonstrate our IP</li>
          </ul>
        </section>

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