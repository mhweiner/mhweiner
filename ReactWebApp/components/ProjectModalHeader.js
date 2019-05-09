import React from 'react';
import {addClass, removeClass} from "../utils/DOM";
import animations from '../animations.scss';

import styles from "./ProjectModalHeader.scss";

export default class ProjectModalHeader extends React.PureComponent {

    ref = React.createRef();

    animateIn  = () => {

        addClass(this.ref.current, animations.animateInFromBottom);

        setTimeout(() => {

            removeClass(this.ref.current, animations.animateInFromBottom);

        }, 300);

    };


    animateOut = () => {

        addClass(this.ref.current, animations.animateOutToTop);

    };

    render() {

        return <div className={styles.default} ref={this.ref}>
            <button className={styles.backButton} onClick={this.props.close}><i className='fa fa-arrow-left'/><span>Back to projects</span></button>
            <h1>{this.props.title}</h1>
            {this.props.website && <a className={styles.extLink} target='_blank'><span>Visit Website</span><i className='fa fa-external-link-alt'/></a>}
        </div>;

    }

}