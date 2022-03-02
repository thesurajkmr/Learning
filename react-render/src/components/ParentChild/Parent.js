import React, {useState} from 'react'
import { ChildComponent } from './ChildComponent';

function Parent() {
    const [count, setcount] = useState(0)
    console.log("Parent Render");
  return (
    <div>
        <button onClick={()=>setcount(count+1)}>count-{count}</button>
        <button onClick={()=>setcount(0)}>countToZero-{count}</button>
        <button onClick={()=>setcount(5)}>countToFive-{count}</button>
        <ChildComponent/>
    </div>
  )
}

export default Parent

