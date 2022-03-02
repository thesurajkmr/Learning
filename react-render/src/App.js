import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState/UseState";
import { UseReducer } from "./components/UseReducer/UseReducer";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { ArrayUseState } from "./components/Immutable State/ArrayUseState";
import Parent from "./components/ParentChild/Parent";
import { ParentOne } from "./components/Optimization/ParentOne";
import { ChildComponent } from "./components/ParentChild/ChildComponent";
import { GrandParent } from "./components/Optimization/GrandParent";
import { ParentTwo } from "./components/Optimization/ParentTwo";

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <ObjectUseState/> */}
      {/* <Parent/> */}
      {/* <ParentOne>
        <ChildComponent />
      </ParentOne> */}
      {/* <GrandParent/> */}
      <ParentTwo/>
    </div>
  );
}

export default App;
