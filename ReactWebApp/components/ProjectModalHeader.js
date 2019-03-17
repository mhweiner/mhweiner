import React from 'react';
import styles from "./ProjectModalHeader.scss";
import {addClass, removeClass} from "../utils/DOM";
import projectData from '../projectData';

export default class ProjectModalHeader extends React.PureComponent {

    ref = React.createRef();

    setProject = (project) => {

        this.ref.current.style.display = 'block';
        this.ref.current.querySelector('a').href = projectData[project].website;

    };

    animateClose = () => {

        addClass(this.ref.current, styles.animateClose);

        setTimeout(() => {

            removeClass(this.ref.current, styles.animateClose);
            this.ref.current.style.display = 'none';

        }, 300);

        this.setState({
            project: null
        });

    };

    render() {

        return <div className={styles.default} style={{display: 'none'}} ref={this.ref}>
            <button className={styles.backButton} onClick={this.props.close}><i className='fa fa-arrow-left'/>Back<span> to Work</span></button>
            <a className={styles.extLink} target='_blank'>Visit<span> Website</span><i className='fa fa-external-link-alt'/></a>
        </div>;

    }

}