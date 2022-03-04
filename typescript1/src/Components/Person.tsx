import React from 'react'
import { PersonProps } from './Person.types'
export const Person = (props:PersonProps) => {
  return (
    <div>Hello {props.name.first}</div>
  )
}
