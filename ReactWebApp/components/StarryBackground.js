import React from 'react';

import styles from "./StarryBackground.scss";

export default function StarryBackground() {

  return (
    <div>
      <div className={styles.stars}/>
      <div className={styles.stars2}/>
      <div className={styles.stars3}/>
    </div>
  );

}