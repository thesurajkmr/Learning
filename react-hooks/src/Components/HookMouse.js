import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    
    const logMousePosition=(e)=>{
        console.log("Mouse Movement");
        setx(e.clientX)    
        sety(e.clientY)    
    }
    useEffect(() => {
      console.log("UseEffect called");
      window.addEventListener('mousemove',logMousePosition)
        
      return ()=>{
          console.log("Component unmounting code")
          window.removeEventListener('mousemove',logMousePosition)
      }
      
    }, [])
    // empty array means you dont depend on anything to change
    // just get rendered once and then relax
    
  return (
    <div>
        x {x} y {y}
    </div>
  )
}

export default HookMouse