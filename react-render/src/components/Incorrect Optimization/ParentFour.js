import React, { useMemo, useState, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("Suraj");

  const person = { fname: "Bruce", lname: "Wayne" };

  const memoizedperson = useMemo(() => person, []);
  const handler = () => {};
  const memoizedHandler = useCallback(handler, []);
  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setcount((count) => count + 1)}>
        count-{count}
      </button>
      <button onClick={() => setname("CodeEvolution")}>name-{name}</button>
      {/* <MemoizedChildFive name={name} person={memoizedperson} /> */}
      <MemoizedChildFive name={name} handler={memoizedHandler} />
    </div>
  );
};

// use memo for object refernces
// use callback for function referennces
