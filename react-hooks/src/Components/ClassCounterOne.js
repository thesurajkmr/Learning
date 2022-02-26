import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCounter=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidMount(){
        document.title=`you have clicked ${this.state.count} times`;
        return true;
    }
    componentDidUpdate(){
        document.title=`you have clicked ${this.state.count} times`;
    }

  render() {
    return (
      <div>
          <button onClick={this.incrementCounter}>
          you have clicked {this.state.count} times
          </button>
      </div>
    )
  }
}

export default ClassCounterOne