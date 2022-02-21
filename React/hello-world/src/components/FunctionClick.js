// We pass the function as eventHandler not a function call
// absence of ()
import React from 'react'

// rfce
function FunctionClick() {

    function clickHandler(){
        console.log("Button Clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick