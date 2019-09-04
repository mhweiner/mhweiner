import React from 'react';
import {DOMEvent} from "../utils/DOMEvent";
import throttle from "../utils/throttle";

export default class ResponsiveImage extends React.Component {

  ref = React.createRef();
  src;
  listenerId;

  componentDidMount() {

    this.listenerId = DOMEvent.addListener(window, 'resize', throttle(this.update, 200));
    this.update();

  }

  componentWillUnmount() {

    DOMEvent.removeListener(this.listenerId);

  }

  update = () => {

    let w = window.innerWidth;

    if (typeof this.props.src === 'string') {

      this.ref.current.src = this.props.src;

    } else if (typeof this.props.src === 'object') {

      for (let i = 0; i < this.props.src.length; i++) {

        let min = this.props.src[i].minWidth;
        let max = i + 1 < this.props.src.length ? this.props.src[i + 1].minWidth : 100000;

        if (w >= min && w < max) {

          let src = this.props.src[i].src;

          if (this.src !== src) {

            this.ref.current.src = src;

          }

          this.src = src;

          return;

        }

      }

    }

  };

  render() {

    return <img ref={this.ref} style={this.props.style} alt=''/>

  }

}