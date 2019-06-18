import React from 'react';

export default class Transition extends React.Component {

  constructor(props) {

    super(props);
    this.component = React.createRef();
    this.state = {
      page: this.props.page,
      nextPage: null
    }

  }

  shouldComponentUpdate(nextProps, nextState) {

    if (nextProps.page === this.state.page && !this.state.nextPage) return false; // no change, no transition
    if (nextState.page !== this.state.page) return true; //next page/state update

    this.transitionTo(nextProps.page);

    return false;

  }

  transitionTo = (page) => {

    let out = this.component.current.animateOut;

    if (out) {

      out.call(undefined, () => {

        this.setPage(page);

      });

    } else {

      this.setPage(page);

    }

  };

  setPage = page => {

    this.setState({
      page: page
    });

  };

  render() {

    let Component = this.props.routes[this.state.page];

    if (Component) {

      return <Component params={this.props.params} {...this.props.passthrough} ref={this.component}/>;

    } else {

      throw (`cannot find Component '${this.state.page}'`)

    }

  }

}