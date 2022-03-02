import React, { memo } from "react";

export const ChildTwo = () => {
  console.log("Child Render");
  return <div>ChildComponent</div>;
};

export const MemoizedChildTwo=React.memo(ChildTwo)
