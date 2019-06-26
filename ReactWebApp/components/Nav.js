import React from 'react';

import Planet from "./Planet";

import styles from './Nav.scss';

export default class Nav extends React.Component {

  ref = React.createRef();

  componentDidMount() {

    if (this.props.hidden) {

      this.hide();

    }

  }

  componentWillUpdate(nextProps, nextState, nextContext) {

    console.log(nextProps.page)

    if (nextProps.hidden && !this.props.hidden) {

      this.hide();
      return false;

    } else if (!nextProps.hidden && this.props.hidden) {

      this.show();
      return false;

    }

    return true;

  }

  hide = () => {

    this.ref.current.style.opacity = 0;
    setTimeout(() => {
      this.ref.current.style.display = 'none';
    }, 300);

  };

  show = () => {

    setTimeout(() => {

      this.ref.current.style.display = 'block';

      setTimeout(() => {

        this.ref.current.style.opacity = 1;

      }, 100);

    }, 200);

  };

  render() {

    let classes = [styles.default];

    if (this.props.opaque) {

      classes.push(styles.opaque);

    }

    if (this.props.page === 'home') {

      classes.push(styles.homepage);

    }

    return <div className={classes.join(' ')} ref={this.ref}>
      <a href='#home' className={styles.logo}><Planet logo={true}/></a>
      <a href='#about' className={this.props.page === 'about' ? styles.selected : null}>about</a>
      <a href='#projects' className={this.props.page === 'projects' ? styles.selected : null}>projects</a>
      <a href='http://github.com/mhweiner' target='_blank'>github</a>
    </div>;

  }

}