import React from 'react';

export default class Transition extends React.Component {

  constructor(props) {

    super(props);
    this.component = React.createRef();

  }

  /**
   * Animate out the current Component.
   */
  animateOut = () => {

    let out = this.component.current.animateOut;

    if (out) {

      out.call(undefined, () => {

        this.animateIn();

      });

    } else {

      this.animateIn();

    }

  };

  /**
   * Animate in new component.
   */
  animateIn = () => {

    this.page = this.props.page;
    this.forceUpdate();

  };

  render() {

    if (!this.page) {

      this.page = this.props.page;

    } else if (this.props.page !== this.page && this.component.current) {

      //new page!
      this.animateOut();

    }

    let Component = this.props.routes[this.page];

    if (Component) {

      return <div>
        <Component params={this.props.params} {...this.props.passthrough} ref={this.component}/>
      </div>;

    } else {

      throw (`cannot find Component '${this.page}'`)

    }

  }

}