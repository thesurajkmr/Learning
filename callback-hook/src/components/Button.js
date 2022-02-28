import React from 'react'

function Button({handleClick,children}) {
    console.log("Rendering button- ", children);
    return (
    <div>
        <button onClick={handleClick}>
            {children}
        </button>
    </div>
  )
}

export default React.memo(Button)
// the component rerenders only if there is a change in its props or state