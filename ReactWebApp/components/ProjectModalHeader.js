import React from 'react';

import styles from "./ProjectModalHeader.scss";

export default class ProjectModalHeader extends React.PureComponent {

    render() {

        return <div className={styles.default}>
            <button className={styles.backButton} onClick={this.props.close}><i className='fa fa-arrow-left'/><span>Back</span></button>
        </div>;

    }

}