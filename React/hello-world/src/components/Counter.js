// rce
import React, { Component } from "react";

class Counter extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment() {
    // if we try to change the state without the this.setState
    // method , then counter will be updated , but react wont render
    // the new element
    // UI wont re render whenever the state is changed
    // this.state.counter = this.state.counter + 1;
    
    
    
    // this.setState({
    //         counter:this.state.counter+1
        
    //     })
    //     console.log(this.state.counter);
    // we will see a difference of a value in the counter since console.log is called
    // synchronously , thats why we are getting a delay in value in the count in the 
    // console
    // for that we need to call the callback function


    // this.setState({
    //         counter:this.state.counter+1
        
    //     },
    //     ()=>{
    //         console.log(this.state.counter)
    //     }
    //     )
        this.setState((prevState)=>({
            counter:prevState.counter+1
        }),
        ()=>{
            console.log(this.state.counter);
        })
  }


// React group multiple state calls into a single call for better performance
// all the five state calls are made in a single go, and the updated value do
// not get carried over in 1 go
// When we need to update a current state , depending upon the previous states, we 
// need to pass a function as an argument
  incrementFive(){
      this.increment();
      this.increment();
      this.increment();
      this.increment();
      this.increment();
  }

  render() {
    return (
      <div>
        <h1>Counter:- {this.state.counter}</h1>
        <button onClick={() => this.incrementFive()}>Increase</button>
      </div>
    );
  }
}

export default Counter;
