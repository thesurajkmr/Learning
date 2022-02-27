import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
      break;
    case "Decrement":
      return state - 1;
      break;
    case "incrementFive":
      return state + 5;
      break;
    case "reset":
      return initialState;
      break;

    default:
      return state;
      break;
  }
};
function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>count- {count}</h1>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("incrementFive")}>IncrementFive</button>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>
        <h1>count- {countTwo}</h1>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("incrementFive")}>IncrementFive</button>
        <button onClick={() => dispatchTwo("Decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </>
  );
}

export default CounterThree;
