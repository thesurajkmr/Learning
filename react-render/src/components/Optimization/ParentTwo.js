import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";
// import { ChildOne } from "./ChildOne";

export const ParentTwo = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("Suraj")
  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={()=>setcount(count=>count+1)}>count-{count}</button>
      <button onClick={()=>setname("CodeEvolution")}>name-{name}</button>
      <MemoizedChildTwo name={name}/>
    </div>
  );
};
