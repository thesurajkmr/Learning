import React from "react";

function Person({person}) {
  return (
    <div>
      <h2>
        My ID is {person.id}. My name is {person.name}. My age is {person.age}.
        My skill is {person.skill}
      </h2>
    </div>
  );
}

export default Person;
