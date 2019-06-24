import React from 'react';
import styles from "./BackButton.scss";

export default class BackButton extends React.Component {

  render() {

    return <button className={styles.default} onClick={this.props.onClick}/>

  }

}