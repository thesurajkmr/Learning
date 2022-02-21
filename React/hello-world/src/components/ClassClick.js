import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Class Click event activated");
    }
  render() {
    return (
      <button onClick={this.clickHandler}>Click Me</button>
    )
  }
}

export default ClassClick