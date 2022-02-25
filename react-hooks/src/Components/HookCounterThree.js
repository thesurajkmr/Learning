import { useState } from "react";
import React from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name,firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name,lastname: e.target.value })}
        />
        <h2>{JSON.stringify(name)}</h2>
        <h1>your first name - {name.firstname}</h1>
        <h1>your last name - {name.lastname}</h1>
      </form>
    </div>
  );
}

export default HookCounterThree;

// the setter function provided by the useState hooks does not automatically merge and
// hook objects , we have to do it manually using spread operator
