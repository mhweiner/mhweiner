import React from 'react';

import StarryBackground2 from "./StarryBackground2";
import Rocket from "./Rocket";

import styles from './LoaderAnimation.scss';

export default class LoaderAnimation extends React.PureComponent {

  ref = React.createRef();

  componentDidMount() {

    this.timeout = setTimeout(() => {

      if (!this.ref) return;
      this.ref.current.style.opacity = 1;

    }, 200);

  }

  componentWillUnmount() {

    clearTimeout(this.timeout);

  }

  render() {

      return <div className={styles.default} ref={this.ref}>
              <Rocket/>
              <StarryBackground2/>
              <p>{this.props.text || 'Loading...'}</p>
      </div>;

  }

}