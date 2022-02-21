import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {

    // approach 4
    return this.state.isLoggedIn && <div>Welcome Suraj</div>

    // approach 3
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Suraj</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // approach 2
    // let message;
    // if(this.state.isLoggedIn) message="Welcome Suraj";
    // else message="Welcome Guest";
    // return <div>{message}</div>

    // approach 1
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Suraj</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
