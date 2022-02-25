import axios from "axios";
import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  submitHandler=(e)=>{
      e.preventDefault();
    console.log(this.state);
    axios.post("https://jsonplaceholder.typicode.com/posts",this.data)
    .then(response=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log("error found")
    })

  }
  changeHandler=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }
  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
