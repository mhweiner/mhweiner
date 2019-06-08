import React from 'react';

import {addClass} from "../utils/DOM";

import styles from "./ProjectModalHeader.scss";

export default class ProjectModalHeader extends React.PureComponent {

    ref = React.createRef();

    render() {

        return <div className={styles.default}>
            <button className={styles.backButton} onClick={this.props.close} ref={this.ref}>
                <i className='fa fa-arrow-left'/><span>Back</span>
            </button>
        </div>;

    }

    animateClose = () => {

        console.log('closing...')

        addClass(this.ref.current, styles.animateClose);

    };

}