import axios from "axios";
import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      errorMessage: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response);
        this.setState({
          post: response.data,
        });
        // console.log(this.state.post[0])
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Error receiving the data" });
      });
  }
  render() {
    const { post ,errorMessage} = this.state;
    console.log(post);
    return (
      <div>
        <h1>list of posts</h1>
        {post.length
          ? post.map((post) => <div key={post.id}>{post.title}</div>)
          : null}

        {
            errorMessage.length?<div> {errorMessage}</div>:null
        }
      </div>
    );
  }
}

export default PostList;
