import "./App.css";
import React from "react";
import { ContextParent } from "./components/Context/ContextParent";
import { ChildA } from "./components/Context/ContextChildren";



function App() {
  return (
    <div className="App">
      <ContextParent>
        {<ChildA/>}
      </ContextParent>
    </div>
  );
}

export default App;
