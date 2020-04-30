import React from "react";

export default class NoneHookApp extends React.Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () => {
    this.setState(state => {
      return {
        count: state.count - 1
      };
    });
  };
  render() {
    return (
      <div>
        <h2>Hello {this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
