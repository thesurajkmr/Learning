import React, { useState } from "react";

export const initstate = ["Bruce", "Wayne"];
export const ArrayUseState = () => {
  const [person, setperson] = useState(initstate);
  const alterArray = () => {
    // person.push("Clark");
    // person.push("Kent");
    // setperson(person); 
    //This doesen't work. when we push elements into the same array,
    // the array value changed but th array reference do not change

    const newPersons=[...person]
    newPersons.push("Clark")
    newPersons.push("Kent")
    setperson(newPersons)
  };
  console.log("Array Use State");
  return (
    <div>
      <button onClick={alterArray}>Click</button>
    {
        person.map(pers=><div key={pers}>{pers}</div>)
    }
    </div>
  );
};


// use state or use reducer update must pass in or 
// return a new reference value 
// since we mutate the object or the array, that is why we dont get a new
// reference 