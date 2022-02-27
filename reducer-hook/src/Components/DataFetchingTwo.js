import React, { useReducer, useEffect } from "react";
import axios from "axios";
function DataFetchingTwo() {
  const initialState = {
    loading: true,
    error: "",
    post: "",
  };
  const reducer = (count, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          error: "",
          post: action.payload,
        };
      case "FETCH_ERROR":
        return {
          loading: true,
          error: "Something went wroong",
          post: {},
        };
      default:
        return state;
    }
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : ""}
    </div>
  );
}

export default DataFetchingTwo;
