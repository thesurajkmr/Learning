import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
function App() {
  return (
    <div className="App">
      <UserGreeting/>
      {/* <ParentComponent/> */}
      {/* <EventBind></EventBind> */}
      {/* <ClassClick></ClassClick> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Counter></Counter> */}

      {/* <Message></Message> */}
      {/* <Greet></Greet> */}
      {/* <Welcome></Welcome>  */}
      {/* <Hello></Hello> */}

      {/* <Greet name="Bruce" heroName="Batman"></Greet>
        <Welcome name="Bruce" heroName="Batman"></Welcome> */}
      {/* <p>This is a children props</p> */}
      {/* </Greet> */}
      {/* <Greet name="Clark" heroName="Superman">
        <button type="submit">Action</button>
      </Greet>
      <Greet name="Diana" heroName="WonderWoman"></Greet>

        <p>This is a children props</p>
      </Welcome>
      <Welcome name="Clark" heroName="Superman">
        <button type="submit">Action</button>
      </Welcome>
      <Welcome name="Diana" heroName="WonderWoman"></Welcome> */}
    </div>
  );
}

export default App;
