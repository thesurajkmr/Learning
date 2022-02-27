import React, { useContext } from "react";
import { countContext } from "../App";
function ComponentC() {
  const CountContext = useContext(countContext);
  return (
    <div>
      count - {CountContext.countState}
      <button onClick={() => CountContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => CountContext.countDispatch("Decrement")}>
        Decrement
      </button>
      <button onClick={() => CountContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentC;
