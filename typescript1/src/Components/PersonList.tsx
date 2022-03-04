import React from "react";
import { Name } from "./Person.types";
type nameListProps = {
  nameList: Name[];
};
export const PersonList = (props: nameListProps) => {
  return (
    <div>
      {props.nameList.map((name) => (
        <h1>
          Hello {name.first} {name.last}
        </h1>
      ))}
      {/* <h1>Bruce Wayne</h1>
        <h1>Clark Kent</h1>
        <h1>Princess Diana</h1> */}
    </div>
  );
};
//  key={name.first}