import React, { Component } from "react";

// class RefDemo extends Component {
//     constructor(props) {
//       super(props)
//       this.inputRef=React.createRef();
//     }

//     componentDidMount(){
//         // console.log(this.inputRef);
//         this.inputRef.current.focus();
//     }
//     clickHandler=()=>{
//         alert(this.inputRef.current.value);
//     }
//     render() {
//     return (
//       <div>
//           <input type="text" ref={this.inputRef}></input>
//           <button onClick={this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }

// export default RefDemo

// method 2 older approach
class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.cbRef=null
    this.setRef=(event)=>{
        this.cbRef=event;
    }
  }

  componentDidMount() {
    // console.log(this.inputRef);
    if(this.cbRef){
        this.cbRef.focus();
    }
  }
  clickHandler = () => {
    alert(this.cbRef.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.setRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
