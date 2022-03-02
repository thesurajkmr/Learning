import React from "react";

export const ChildFive = ({ name }) => {
  console.log("Child Five Render");
  return (
    <div>
      {/* Hello {name} {person.fname} {person.lname}. */}
      Hello {name} .
    </div>
  );
};

export const MemoizedChildFive = React.memo(ChildFive);

// the child component get re rendered even if the count value is
// triggered. this is because of the person object we have in the parent
// component. everytime the parent component is re rendered, a new reference
// to the object is created as passed as a child component. since the
// reference is changed, react memo cannot optimized and hence the child
// also re renders.
// same goes for fns also


// if you component has object or fns , and if you are wrapping
// one of your child component with react memo, it is an incorrect usage of
// memoization
// 