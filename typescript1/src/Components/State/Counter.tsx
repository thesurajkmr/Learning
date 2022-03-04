import React, { useReducer } from "react";

type CounterState = {
  count: number;
};
// type ActionState = {
//   type: "increment" | "decrement" | "reset";
//   payload: number;
// };

type updateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type resetAction = {
  type: "reset";
};
const initialstate = { count: 0 };
function reducer(state: CounterState, action: updateAction | resetAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count + action.payload };
    case "reset":
      return state;
    default:
      return state;
  }
}
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Decrement</button>
    </div>
  );
};
