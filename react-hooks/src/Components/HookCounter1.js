import React, { useState, useEffect } from "react";

function HookCounter1() {
  const [count, setcount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Document title changed");
    document.title = `Clicked ${count} times`;
  },[count]); //the array of values the effect depends upon, if the values in this
//   array changes, then only the effect renders
  // We are bascically asking react to execute a fn that is passed as an
  // argument everytime the component runs
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setcount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounter1;
