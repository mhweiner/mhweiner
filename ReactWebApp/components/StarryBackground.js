import React from 'react';

import styles from "./StarryBackground.scss";

export default class StarryBackground extends React.PureComponent{

    render() {
        return (
            <div className={styles.default}>
                <div className={styles.stars}/>
                <div className={styles.stars2}/>
                <div className={styles.stars3}/>
            </div>
        );
    }

}