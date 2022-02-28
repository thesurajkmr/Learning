import React,{useCallback, useState} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age, setage] = useState(25)
    const [salary, setsalary] = useState(1000)

    const incrementAge=useCallback(()=>{
        setage(age+1);
    },[age])
    const incrementSalary=useCallback(()=>{
        setsalary(salary+1000);
    },[salary])
  return (
    <>
    <Title/>
    <Count text="Age" count={age}/>
    <Button handleClick={incrementAge}>Increment Age</Button>
    <Count text="Salary" count={salary}/>
    <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  )
}

export default ParentComponent

// increment salary re-renders when age is clicked, since for every
// rerender a new version of function is created , and as a function
// is passed as a prop, the rerender sees a different version of a prop
// thus re renders the component

// use callback basically caches the increase salary function and will
// return that if the salary is not incremented
// if the salary is increased, that is the dependencies has changed, 
// it will return a new function  