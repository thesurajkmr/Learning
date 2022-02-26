import "./App.css";
import ClassCounter from "./Components/ClassCounter";
import ClassCounterOne from "./Components/ClassCounterOne";
import ClassMouse from "./Components/ClassMouse";
import ComponentC from "./Components/ComponentC";
import DataFetching from "./Components/DataFetching";
import FunctionalHookCounter from "./Components/FunctionalHookCounter";
import HookCounter from "./Components/HookCounter";
import HookCounter1 from "./Components/HookCounter1";
import HookCounterFour from "./Components/HookCounterFour";
import HookCounterThree from "./Components/HookCounterThree";
import HookCounterTwo from "./Components/HookCounterTwo";
import HookMouse from "./Components/HookMouse";
import IntervalClassCounter from "./Components/IntervalClassCounter";
import MouseContainer from "./Components/MouseContainer";
import React from "react";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Suraj"}>
        <ChannelContext.Provider value={"Kumar"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterFour/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounter1/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <FunctionalHookCounter/> */}
      {/* <DataFetching/> */}
    </div>
  );
}

export default App;
