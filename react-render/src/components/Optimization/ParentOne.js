import React, { useState } from "react";
// import { ChildOne } from "./ChildOne";

export const ParentOne = ({ children }) => {
  const [count, setcount] = useState(0);
  console.log("ParentOne Render");
  return (
    <div>
      <button onClick={()=>setcount(count=>count+1)}>count-{count}</button>
      {children}
    </div>
  );
};
