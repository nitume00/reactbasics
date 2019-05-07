import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  state = {
    count: this.props.value
  };

  handleIncrement = id => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getStyles()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(10)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getStyles() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
