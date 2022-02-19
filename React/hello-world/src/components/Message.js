import React, { Component } from "react";
class Message extends Component{
    constructor(){
        super();
// This is required because we extend React's Component class
// and a call is required to the base class constructor
        this.state={
            message: "Welcome Visitor"
        }
    }
    changeMessage(){
        this.setState({
            message:"THank you for subscribing"
        })
    }
    render(){
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;