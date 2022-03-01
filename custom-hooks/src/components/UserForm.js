import React, { useState } from "react";
import useInput from "../hooks/useInput";

function UserForm() {
  const [firstname, bindFirstName, resetFirstName] = useInput("");
  const [lastname, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label>Last name</label>
          <input {...bindLastName} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
