import React, {useState} from 'react'

function UseState() {
    const [count, setcount] = useState(0)
    console.log("UseState Render");
  return (
    <div>
        <button onClick={()=>setcount(count+1)}>count-{count}</button>
        <button onClick={()=>setcount(0)}>countToZero-{count}</button>
        <button onClick={()=>setcount(5)}>countToFive-{count}</button>
    </div>
  )
}

export default UseState


// React requires that the useState update must pass in or return
// a new reference as the state value. if the state is a primitive
// type it must be a new string, number or boolean
// if it is not the case , the react will simply bail out of the render
// phase
// the bailing part has 2 phases, 
// a=> if only the initial render is completed, the value passed in
// the setter fn is same as before , react bails out from proceeding
// further
// however if the component has re rendered already the component will 
// proceed with the render phase one more time
// react only goes to the render phase to discard the result