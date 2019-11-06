import React from 'react';

import Planet from "./Planet";
import {addClass, removeClass} from "../utils/DOM";

import styles from './Nav.scss';

export default class Nav extends React.Component {

  ref = React.createRef();

  componentDidMount() {

    this.timeout = setTimeout(this.animateIn, 200);

  }

  componentWillUnmount() {

    clearTimeout(this.timeout);

  }

  animateIn = () => {

    addClass(this.ref.current, styles.animateIn);
    this.ref.current.style.display = 'block';

    setTimeout(() => {

      removeClass(this.ref.current, styles.animateOut);

    }, 600);

  };

  animateOut = callback => {

    addClass(this.ref.current, animations.animateOutToTop);
    setTimeout(callback, 600);

  };

  render() {

    return <div className={styles.default} ref={this.ref}>
      <a href='#home' className={styles.logo}><Planet logo={true}/></a>
      <a href='#about' className={this.props.page === 'about' ? styles.selected : ''}><i className='fa fa-user-astronaut'/></a>
      <a href='#projects' className={this.props.page === 'projects' ? styles.selected : ''}><i className="fas fa-briefcase"/></a>
    </div>;

  }

}