import React, { Component } from 'react'
import LifeCycleB from './LIfeCycleB'
class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Suraj"
      }
      console.log("LifeCycle A Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getderivedstatefromprops")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount");
    }
  render() {
      console.log("LifeCycleA render method")
    return (
        <div>
            <LifeCycleB/>
        </div>
    )
  }
}

export default LifeCycleA