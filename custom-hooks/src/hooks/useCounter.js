import { useState } from "react";

function useCounter(initialState=0,value=1) {
    const [count, setcount] = useState(initialState);
    const increment=()=>{
        setcount(count+value);
    }
    const decrement=()=>{
        setcount(count-value);
    }
    const reset=()=>{
        setcount(initialState);
    }
    return [count,increment,decrement,reset];
}

export default useCounter