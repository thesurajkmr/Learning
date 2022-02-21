import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        // console.log("Hello");
        // console.log(this);
        // this.props.name="kumar";
        const {name,heroName}=this.props
        // const {state1, state2}=this.state
        return (
            <div>
                <h1>
                    Welcome {name} a.k.a. {heroName}
                </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;