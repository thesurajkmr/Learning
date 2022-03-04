import React, { useState } from 'react'
export const LoggedIn = () => {
    const [loggedin, setloggedin] = useState(true)
    const handleLogin=()=>{
        setloggedin(true)
    }
    const handleLogout=()=>{
        setloggedin(false)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {loggedin?'logged in':'logged out'}</div>
    </div>
  )
}
