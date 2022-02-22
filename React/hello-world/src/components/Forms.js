import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         skill:'React'
      }
      this.usernameHandler=(event)=>{
        this.setState({
            username: event.target.value
        })
      }
      this.commentsHandler=(event)=>{
          this.setState({
              comments:event.target.value
          })
      }
      this.skillsHandler=(event)=>{
          this.setState({
              skill:event.target.value
          })
      }
      this.handleSubmit=(event)=>{
          alert(`${this.state.username} ${this.state.comments} ${this.state.skill}`)
          event.preventDefault();
      }
    }
  render() {
      const {username,comments,skill}=this.state;
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <label>Username</label>
              <input type="text" value={username} onChange={this.usernameHandler}></input>

              {console.log(username)}
          </div>
          <div>
              <label>Comments</label>
              <input type="text" value={comments} onChange={this.commentsHandler}></input>

              {console.log(comments)}
          </div>
          <div>
              <label>skills</label>
              {/* <input type="text" value={this.state.skills} onChange={this.skillsHandler}></input> */}
                <select value={skill} onChange={this.skillsHandler}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue JS">Vue JS</option>
                </select>
              {/* {console.log(skills)} */}
          </div>
          <button type="submit" >Submit</button>
      </form>
    )
  }
}

export default Forms;