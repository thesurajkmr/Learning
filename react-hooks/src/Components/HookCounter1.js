import React, {useState, useEffect} from 'react'

function HookCounter1() {
    const [count, setcount] = useState(0);
    useEffect(() => {
      document.title=`Clicked ${count} times`;
    })
    // We are bascically asking react to execute a fn that is passed as an
    // argument everytime the component runs
  return (
    <div>
        <button onClick={()=>setcount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounter1