import React from 'react';
import styles from './Filter.scss';
import animations from '../../animations.scss';
import {DOMEvent} from "../../utils/DOMEvent";

export default class Filter extends React.PureComponent {

  state = {showMenu: false};
  bodyClickListener;
  buttonRef = React.createRef();
  menuRef = React.createRef();
  tagsContainerRef = React.createRef();

  toggleMenu = (e) => {

    e.preventDefault();
    e.stopPropagation();

    this.setState({
      showMenu: !this.state.showMenu
    });

  };

  onClickMenuItem = (e) => {

    if (e.target.tagName.toUpperCase() === 'LI' && e.target.innerHTML) {

      e.preventDefault();
      e.stopPropagation();

      this.props.selectTag(e.target.innerHTML);
      this.setState({
        showMenu: !this.state.showMenu
      });

    }

  };

  onClickTag = (e) => {

    e.preventDefault();
    e.stopPropagation();

    if (e.target.tagName.toUpperCase() === 'BUTTON') {

      this.props.removeTag(e.target.dataset.tag);

    } else if (e.target.tagName.toUpperCase() === 'I') {

      this.props.removeTag(e.target.parentNode.dataset.tag);

    }

  };

  componentDidMount() {

    this.bodyClickListener = DOMEvent.addListener(document.body, 'click', () => {

      this.setState({
        showMenu: false
      });

    });

    DOMEvent.addListener(this.buttonRef.current, 'click', this.toggleMenu);
    DOMEvent.addListener(this.menuRef.current, 'click', this.onClickMenuItem);
    DOMEvent.addListener(this.tagsContainerRef.current, 'click', this.onClickTag);

  }

  componentWillUnmount() {

    DOMEvent.removeListener(this.bodyClickListener);

  }

  render() {

    let tags = this.props.selected ? this.props.selected.map((tag, k) =>
      <button key={k.toString()} data-tag={tag}>{tag}<i className='fa fa-times'/></button>
    ) : [];

    let filterOptions = [];

    this.props.options.map((option, k) => {

      if (this.props.selected.indexOf(option) === -1) {

        filterOptions.push(<li key={k.toString()}>{option}</li>);

      }

    });

    return (
      <div className={styles.default}>
        <button ref={this.buttonRef} disabled={!filterOptions.length}>Filter<i className='fas fa-angle-down'/></button>
        <div className={styles.tags} ref={this.tagsContainerRef}>
          {tags}
        </div>
        <ul style={{display: this.state.showMenu ? '' : 'none'}} className={animations.animateInFromBottom} ref={this.menuRef}>
          {filterOptions}
        </ul>
      </div>
    )

  }

}