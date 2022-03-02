import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";
// import { ChildOne } from "./ChildOne";

export const ParentThree = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("Suraj");
  console.log("ParentThree Render");
  return (
    <div>
      <button onClick={() => setcount((count) => count + 1)}>
        count-{count}
      </button>
      <button onClick={() => setname("CodeEvolution")}>name-{name}</button>
      <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree>
    </div>
  );
};
