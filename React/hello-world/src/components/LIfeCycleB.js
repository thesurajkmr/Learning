import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Suraj"
      }
      console.log("LifeCycle B Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB getderivedstatefromprops")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB componentDidMount");
    }
  render() {
      console.log("LifeCycleB render method")
    return (
      <div></div>
    )
  }
}

export default LifeCycleB