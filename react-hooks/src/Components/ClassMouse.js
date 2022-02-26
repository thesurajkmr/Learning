import React, { Component } from 'react'

export class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMousePosition=(e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    componentDidMount(){
        console.log("Component did mouse executed");
        window.addEventListener('mousemove',this.logMousePosition);
    }
  render() {
      const {x,y}=this.state
    return (
      <div>x  {x} y {y}</div>
    )
  }
}

export default ClassMouse