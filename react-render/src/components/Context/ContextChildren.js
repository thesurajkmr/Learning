import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export const ChildA = () => {
  console.log("Child A render");
  return (
    <>
      <div>ChildA</div>
      <ChildB />
    </>
  );
};

export const MemoizedChildA=React.memo(ChildA)

// we can get the behavior we wanted, if we use memo here
// one thing to note that if the child c has more childs, 
// those childs will get re rendered due to default
// parent child relationship

export const ChildB = () => {
  console.log("Child B render");
  return (
    <>
      <div>ChildB</div>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("Child C render");
  return <div>count is {count} Child C</div>;
};


// react sees that the parent component have been flagged
// when it is rendering the parent component, it sees that the
// it also contains a context provider , it then checks to see that
// if the context provider has been given a new value , since
// we increment the count value the parent component 
// has indeed been given a new value, react will make a note
// to re render all the components that consume the re render value
// react travels down to child c, and when it encounters child c,
// it re renders the child component

// but this is not how it works
// this is because when a parent component re renders
// all its children component re renders
// infact the child c was re rendered, because the parent component re rendered,
// and not necessarily the value was changed 

// context helps us solve the problem of props dealing
// so we dont have to specify props through every nested componnent
// but when it comes to context and the re rendering behavior,
// it is not the most helpful