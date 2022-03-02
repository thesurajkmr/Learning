import React, { useReducer } from "react";

const initialstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
      break;
    case "decrement":
      return state - 1;
      break;
    case "reset":
      return initialstate;
      break;
    default:
      return initialstate;
      break;
  }
};
export const UseReducer = () => {
  console.log("UseReducer rendered");
  const [count,dispatch]=useReducer(reducer,initialstate)
  return <div>
    <h1>{count}</h1>
    <button onClick={()=>dispatch('increment')}>Increment</button>
    <button onClick={()=>dispatch('decrement')}>Decrement</button>
    <button onClick={()=>dispatch('reset')}>Reset</button>
  </div>;
};



// use reducer have the same behaviour as useState