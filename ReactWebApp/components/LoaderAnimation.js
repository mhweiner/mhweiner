import React from 'react';

import StarryBackground2 from "./StarryBackground2";
import Rocket from "./Rocket";

import styles from './LoaderAnimation.scss';

export default class LoaderAnimation extends React.PureComponent {

    render() {

        return <div className={styles.default}>
                <Rocket/>
                <StarryBackground2/>
                <p>Loading...</p>
        </div>;

    }

}