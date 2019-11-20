import React from 'react';

import styles from './base.scss';
import ECStyles from './ElementalCognition.scss';
import ResponsiveImage from "../ResponsiveImage";

export default class ElementalCognition extends React.PureComponent {

  state = {
    h: true //hide images
  };

  componentDidMount() {

    window._unlock = (pw) => {

      if (pw === 'password') {

        this.setState({
          unlocked: true
        });

      }

    };

  }

  render() {

    return (<div className={styles.base}>

      <ResponsiveImage src={[
        {
          minWidth: 0,
          src: '/static/images/content/ec/hero_small.jpg'
        },
        {
          minWidth: 700,
          src: '/static/images/content/ec/hero.jpg'
        }
      ]} style={{
        marginBottom: '40px'
      }}/>

      <div className={styles.content}>

        <div className={styles.main}>

          <h2>I designed and developed an interface to an experimental, revolutionary AI machine.</h2>

          <p>Today's AI falls short. Although AI has become pretty good at calculating odds and recognizing faces, it cannot understand
            something as simple as a children's bedtime story. It is unable to explain the "why" or the "how" behind the answers is gives us.</p>

          <p>To tackle the problem of "understanding", Elemental Cognition, founded and led by IBM Watson alum Dr. David Ferrucci, starts by attempting to
            teach the system children's stories. EC believes that context, language, culture, and reasoning are the keys to this level of understanding.
            They are also betting that this knowledge can be acquired the same way that we do &mdash; something they call
            "Natural Learning." One of the main ways we interact with the system is with a "plain English" dialog or chat.
          </p>

          <p>I was hired as a senior full-stack engineer and UX designer to help design and build interfaces with this system, and to demonstrate its capabilities.</p>

          <h3>The Challenge</h3>

          <p>The challenge posed to me was to help them build a working front-end application that could demonstrate the capabilities of their system, with the first version
            ready for a live demo during a talk given by Dr. Ferrucci within a few months.</p>

          <p>The application had to facilitate a dialog with the machine, show its introspective thinking, and demonstrate its understanding
            in a visual way. It had to be user-friendly and visually appealing.</p>

          <h3>UX Strategy</h3>

          <p>The first thing I worked on was a way to visually demonstrate the system's understanding, which I called VKR (Visual Knowledge Representation).</p>

          {this.state.unlocked &&  <div className={ECStyles.img} style={{margin: '30px -80px 0'}}>
            <img src='/static/images/content/ec/VKR.png'/>
          </div>}

          <p>VKR is a collection of pages that are a designed around a pivot on the data, such as "Motivation", "Objects", "Events", "Timeline", etc.</p>

          <p>Then I had to design an application where the user can "chat" with the system, see what it's "thinking", and be able to see the VKR and Summary.
            The user also needs to see the story on the left to have common reference with the system.</p>

          {this.state.unlocked && <div className={ECStyles.img} style={{margin: '30px -80px 0'}}>
            <img src='/static/images/content/ec/chat.jpg'/>
            <img src='/static/images/content/ec/thinking.jpg'/>
          </div>}

          <h3>Technical Strategy</h3>

          <p>Last, I helped design a REST API and then started building the front-end application itself. We used Swagger and SwaggerHub to collaborate
            with the team to help build the API, while simultaneously building the app, for which we chose React and a Flux state management design.</p>
          <p>The development of the "backend" API and web app were built in parallel, and again, SwaggerHub helped keep us all on the same page during the process.</p>

          <p className={ECStyles.nda}>
            <img src='/static/images/content/ec/system-broken.png'/>
            Unfortunately, due to a non-disclosure agreement, I am not able to currently post pictures or videos of the
            app publicly on this website, but I have been given permission to show them in person.
          </p>

        </div>

        <div className={styles.sidebar}>

          <h3 className={styles.involvement}>My Involvement</h3>

          <ul>
            <li>Led R&D, front-end architecture and development.</li>
            <li>Led UX strategy and conceptual design of "VKR" design system.</li>
            <li>Worked closely with researchers and reported directly to Dr. Ferrucci.</li>
          </ul>

          <h3 className={styles.awards}>Outcome</h3>

          <ul>
            <li>Successfully delivered first version by tight deadline and to excellent reception.</li>
            <li>Used in talks by Dr. Ferrucci and continues to be used as one of the main ways to test and judge our progress as a company.</li>
            <li>Used to show investors and demonstrate our IP.</li>
          </ul>

          <h3 className={styles.tech}>Technology</h3>
          <ul>
            <li>HTML5, ES6, Typescript, React, Flux</li>
            <li>REST API (Java)</li>
            <li>Swagger, SwaggerHub</li>
          </ul>

        </div>

      </div>

      <div className={styles.images}>
        {!this.state.unlocked && <iframe
            src="https://player.vimeo.com/video/308217091"
            frameBorder="0"
            webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen
            style={{
              width: '100%',
              height: '571px',
              border: '1px solid',
              background: 'black'
            }}
        />}
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
