import React from "react";
type GreetProps={
    name:String
}
export const Greet = (props:GreetProps) => {
  return (
    <div>
      <h1>Hello {props.name}. You have lot of work to do</h1>
    </div>
  );
};
