import React from 'react'
type OscarProps={
    children:React.ReactNode 
    // safest bet for a type of a react node
}
export const Oscar = (props:OscarProps) => {
  return (
    <div>{props.children}</div>
  )
}
