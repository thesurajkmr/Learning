import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
      break;
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter + action.value };
      break;
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
      break;
    case "Decrement2":
      return { ...state, secondCounter: state.secondCounter + action.value };
      break;
    case "incrementFive":
      return { ...state, firstCounter: state.firstCounter + action.value };
      break;
    case "reset":
      return { ...state, firstCounter:initialState.firstCounter};
      break;
    case "reset2":
      return { ...state, secondCounter:initialState.secondCounter};
      break;

    default:
      return state;
      break;
  }
};
function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>count- {count.firstCounter}</h1>
        <h1>count- {count.secondCounter}</h1>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "incrementFive", value: 5 })}>
          IncrementFive
        </button>
        <button onClick={() => dispatch({ type: "Decrement", value: -1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Decrement2", value: -1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset2" })}>Reset</button>
      </div>
    </div>
  );
}

export default CounterOne;
