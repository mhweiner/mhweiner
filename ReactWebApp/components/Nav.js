import React from 'react';

import Planet from "./Planet";
import {addClass, removeClass} from "../utils/DOM";

import styles from './Nav.scss';

export default class Nav extends React.Component {

  ref = React.createRef();
  isVisible = false;

  shouldBeVisible = page => {

    return page !== 'home';

  };

  updateVisibility = () => {

    if (this.shouldBeVisible(this.props.page) && !this.isVisible) {

      this.timeout = setTimeout(this.animateIn, 300);
      this.isVisible = true;

    } else if (!this.shouldBeVisible(this.props.page) && this.isVisible) {

      this.animateOut(() => {

        this.isVisible = false;

      });

    }

  };

  componentDidMount() {

    this.updateVisibility();

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    this.updateVisibility();

  }

  componentWillUnmount() {

    clearTimeout(this.timeout);

  }

  animateIn = () => {

    addClass(this.ref.current, styles.animateIn);
    this.ref.current.style.display = 'block';

    setTimeout(() => {

      removeClass(this.ref.current, styles.animateIn);

    }, 605);

  };

  animateOut = callback => {

    addClass(this.ref.current, styles.animateOut);

    setTimeout(() => {

      this.ref.current.style.display = 'none';
      removeClass(this.ref.current, styles.animateOut);
      callback();

    }, 605);

  };

  render() {

    return <div className={styles.default} ref={this.ref}>
      <a href='#home' className={styles.logo} title='Home'><Planet logo={true}/></a>
      <a href='#about' className={this.props.page === 'about' ? styles.selected : ''} title='About'><i className='fa fa-user-astronaut'/></a>
      <a href='#projects' className={this.props.page === 'projects' ? styles.selected : ''} title='Projects'><i className="fas fa-briefcase"/></a>
      <a href='https://mhweiner.medium.com' target='_blank' title='Publications'><i className="fas fa-pencil-alt"/></a>
    </div>;

  }

}
