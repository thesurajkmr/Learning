import React, { Component } from 'react'

export class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         click:0
      }
    }

    clickHandler=()=>{
        this.setState(prevState=>{
            return {
                click:prevState.click+1
            }
        })
    }

  render() {
    return (
      <div>
          <button onClick={this.clickHandler}>Clicked {this.state.click} times</button>
      </div>
    )
  }
}

export default ClickCounter