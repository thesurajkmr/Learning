import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount=0;
    const [count,setCount]=useState(0)
    const IncrementFive=()=>{
        for(let i=0;i<5;i++)
        {
            setCount(prevState=>prevState+1);
        }
    }
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prevState=>prevState+1)}>Increment</button>
        <button onClick={()=>setCount(prevState=>prevState-1)}>Decrement</button>
        <button onClick={IncrementFive}>Add 5</button>
    </div>
  )
}

export default HookCounterTwo