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

    changeState=()=>{
        this.setState({
            name:'Kumar'
        })
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getderivedstatefromprops")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount");
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycle A componentDidUpdate")
    }
  render() {
      console.log("LifeCycleA render method")
    return (
        <div>
            {/* to trigger an update life cycle, we either 
            have to change a prop or a state */}
            <h1>{this.state.name}</h1>
            <button onClick={this.changeState}>Click</button>
            <LifeCycleB/>
        </div>
    )
  }
}

export default LifeCycleA