import React,{useState} from "react";
import { ChildOne } from "./ChildOne";
import { ParentOne } from "./ParentOne";

export const GrandParent = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>
        GrandParent Count - {count}
      </button>
      <ParentOne newCount={count}>
          <ChildOne/>
      </ParentOne>
    </div>
  );
};


// if you cause the parent one component to re render
// because of state change in the same component
// react will not re render the child one component
// as it is the same element which couldnt have changed

// if we click the grandparent component, all the components
// re rendered
// grandparent changes the it state and causes a re render
// which in turn cause the parent one component to re render
// react now knows that the parent one component is not
// re rendering due to its state change but rather because of the
// parent component re render that means the props could have changed 

// react will proceed for the child one component , but ofcourse ignore
// the render output and not committed to the dom