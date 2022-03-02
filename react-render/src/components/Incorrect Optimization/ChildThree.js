import React, { memo } from "react";

export const ChildThree = ({children,name}) => {
  console.log("Child Render");
  return <div>{children} {name}</div>;
};

export const MemoizedChildThree=React.memo(ChildThree)


// Even if the name value does not
// change, the child component re rendered
// this is because of the children props
// in react, props.children is always a new reference
// that will always cause the child component to re render
// so the takeaway from the video is that no need to wrap your
// child components with react memo, if the child component 
// itself has children components
// the incorrect memo will add to your component render time as new
// references to the  children props will always
// cause the memoized child component to re render