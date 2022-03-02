import React from "react";

export const ChildComponent = () => {
  console.log("Child Render");
  return <div>ChildComponent</div>;
};

// Child component never re renders if the new state is same 
// as the old state
