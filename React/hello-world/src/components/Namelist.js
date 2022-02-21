import React from "react";
import Person from "./Person";

function Namelist() {
  const persons = [
    {
      id: 1,
      name: "Diana",
      age: 20,
      skill: "Angular",
    },
    {
      id: 2,
      name: "Clark",
      age: 21,
      skill: "Vue",
    },
    {
      id: 3,
      name: "Bruce",
      age: 22,
      skill: "React",
    },
    {
      id: 4,
      name: "Aqua",
      age: 23,
      skill: "Node",
    },
  ];
  const personList = persons.map((person) => <Person key={person.id} person={person} />);
  return <div>{personList}</div>;
}

export default Namelist;

// const names = ["Diana Suraj", "Clark Kumar", "Bruce Suku"];
// const nameList=names.map(name=><h2>{name}</h2>);
// return <div>{nameList}</div>

// return <div>
// {
//     names.map(name=><h2>{name}</h2>)
// }
// </div>

{
  /* <h2>{names[0]}</h2> 
<h2>{names[1]}</h2> 
<h2>{names[2]}</h2> */
}
