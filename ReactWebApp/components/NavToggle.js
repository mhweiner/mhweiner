import React from 'react';

import styles from './NavToggle.scss';

export default class NavToggle extends React.PureComponent {

  onClick = (e) => {

    e.preventDefault();
    this.props.toggleNav(!this.props.isOpen);

  };

  render() {

    let classes = [styles.default];

    if (this.props.isOpen) {

      classes.push(styles.open);

    }

    return <a className={classes.join(' ')} onClick={this.onClick}><span/></a>;

  }

}