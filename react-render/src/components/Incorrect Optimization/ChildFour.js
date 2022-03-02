import React from "react";

export const ChildFour = ({ name }) => {
  const date = new Date();
  console.log("Child Four Render");
  return (
    <div>
      Hello {name}. it is currently {date.getHours()}:{date.getMinutes()}:
      {date.getSeconds()}
    </div>
  );
};

export const MemoizedChildFour = React.memo(ChildFour);

// in this case, on clicking the name button the time gets updated due
// to props change, but the time do not get updated on clicking 
// the count button. 
// 
