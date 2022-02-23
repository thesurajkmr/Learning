import React, { Component } from 'react'

export class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    hoverHandler=()=>{
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            }
        })
    }
  render() {
    return (
      <div>
          <h1 onMouseOver={this.hoverHandler}>Hovered {this.state.count} times</h1>
      </div>
    )
  }
}

export default HoverCounter