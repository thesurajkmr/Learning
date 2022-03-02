import React, { useState } from "react";

const initState = {
  fname: "Bruce",
  lname: "Wayne",
};
export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);
  console.log("Object use state render");
  const changeName = () => {
    // person.fname = "Clark";
    // person.lname = "Kent";
    // setPerson(person);
    const newPerson={...person}
    newPerson.fname='Clark'
    newPerson.lname='Kent'
    setPerson(newPerson)
  };
  return (
    <div>
      <div>
        {person.fname} {person.lname}
      </div>
      <button onClick={changeName}>Click</button>
    </div>
  );
};


// when we use object as state, the refernec to the object must
// change in order to request react for a re render