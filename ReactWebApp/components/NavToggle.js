import React from 'react';

import styles from './NavToggle.scss';

export default class NavToggle extends React.Component {

  onClick = (e) => {

    e.preventDefault();
    this.props.toggleNav(!this.props.isOpen);

  };

  render() {

    let classes = [styles.default];

    if (this.props.isOpenToggle) {

      classes.push(styles.isOpen);

    }

    return <a className={classes.join(' ')} href="#" onClick={this.onClick}><i className='fa fa-bars'/>Menu</a>;

  }

}