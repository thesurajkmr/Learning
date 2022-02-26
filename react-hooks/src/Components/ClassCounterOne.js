import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    document.title = `you have clicked ${this.state.count} times`;
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updated");
      document.title = `you have clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <button onClick={this.incrementCounter}>
          you have clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
