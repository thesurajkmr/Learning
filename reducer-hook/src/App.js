import logo from "./logo.svg";
import "./App.css";
import CounterOne from "./Components/CounterOne";
import CounterTwo from "./Components/CounterTwo";
import CounterThree from "./Components/CounterThree";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";
import React, { useReducer } from "react";

export const countContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "incrementFive":
      return state + 5;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <countContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        count - {count}
        {/* <CounterOne/> */}
        {/* <CounterTwo/> */}
        {/* <CounterThree/> */}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </countContext.Provider>
  );
}

export default App;
