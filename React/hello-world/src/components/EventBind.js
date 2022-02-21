// this keyword is undefined in event handler,
// thats why event binding is necessary in react class component
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // approach 3
    // this.clickHandler=this.clickHandler.bind(this);
  }

  // approach 3
  // clickHandler() {
  //   this.setState({
  //     message: "Goodbye",
  //   });
  //   console.log(this);
  // }

  // approach 4
  clickHandler=()=>{
    this.setState({
      message:'GoodBye!'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click Me</button> */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default EventBind;
