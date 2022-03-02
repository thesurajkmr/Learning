import React, { useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("Suraj");

  const person = { fname: "Bruce", lname: "Wayne" };
  const handler=()=>{}
  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setcount((count) => count + 1)}>
        count-{count}
      </button>
      <button onClick={() => setname("CodeEvolution")}>name-{name}</button>
      {/* <MemoizedChildFive name={name} person={person} /> */}
      <MemoizedChildFive name={name} handler={handler} />
    </div>
  );
};
