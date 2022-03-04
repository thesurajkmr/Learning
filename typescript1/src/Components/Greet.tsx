import React from "react";
type GreetProps = {
  name: String;
  messageCount?: Number;
  isLoggedIn: Boolean;
};
export const Greet = (props: GreetProps) => {
  const {messageCount:0} =props
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Hello {props.name}. You have {props.messageCount} of work to do
        </h1>
      ) : (
        <h1>Welcome Guest</h1>
      )}
    </div>
  );
};
