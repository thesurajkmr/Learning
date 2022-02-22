import React from "react";
import Person from "./Person";

function Namelist() {
    const persons=['Bruce','Clark','Diana','Bruce'];
    const personsList=persons.map((person,index)=><h2 key={index}> {index} {person}</h2>);
    return personsList;
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
