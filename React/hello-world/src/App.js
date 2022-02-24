import React, { PureComponent } from "react";
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
import Namelist from "./components/Namelist";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import './appStyles.css'
import styles from './appStyles.module.css'
import Forms from "./components/Forms";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
// import PureComp from "./components/PureComp";
// import ParentComponent2 from "./components/ParentComponent2";
import RefDemo from "./components/RefDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
function App() {
  return (
    <div className="App">
      <ClickCounterTwo/>
      <HoverCounterTwo/>
      
      {/* <ClickCounter name="Suraj" />
      <HoverCounter/> */}

      {/* <ErrorBoundary>
      <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="SuperMan"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="JOKER"></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
        {/* <FocusInput/> */}
      {/* <RefDemo/> */}
    </div>
  );
}

export default App;



{/* <FragmentDemo/> */}
      {/* <Forms/> */}
      {/* <LifeCycleA/> */}
      {/* <h1 className="error">error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/> */}
      {/* <StyleSheet primary={true}></StyleSheet> */}
      {/* <Namelist/> */}
      {/* <UserGreeting/> */}
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