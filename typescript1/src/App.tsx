import React from "react";
import "./App.css";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";


function App() {
  return (
    <div className="App">
      {/* <Button handleClick={(event,id)=>console.log("Button Clicked",event,1)}/> */}
    <Input value={''} handleChange={(event)=>console.log(event)}></Input>
    </div>
  );
}

export default App;
