import React, { Component } from 'react'

export class IntervalClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  componentDidMount(){
      console.log("Component Mounted");
      this.interval=setInterval(this.tick,1000);
  }
  componentWillUnmount(){
      console.log("Component Unmounted");
      clearInterval(this.interval);
  }
  tick=()=>{
      this.setState({
          count:this.state.count+1
      })
  }
    render() {
        const {count}=this.state
    return (
      <div>{count}</div>
    )
  }
}

export default IntervalClassCounter