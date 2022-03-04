import React from "react";
import "./App.css";
import { Greet } from "./Components/Greet";
import { Heading } from "./Components/Heading";
import { Oscar } from "./Components/Oscar";
import { Person } from "./Components/Person";
import { PersonList } from "./Components/PersonList";
import { Status } from "./Components/Status";

const nameList = [
  { first: "Bruce", last: "Wayne" },
  { first: "Clark", last: "Kent" },
  { first: "Princess", last: "Diana" },
];

function App() {
  const personName = { first: "Bruce", last: "Wayne" };
  return (
    <div className="App">
      {/* <Greet name="Suraj" messageCount={20} isLoggedIn={true} /> */}
      {/* <Person name={personName}></Person> */}
      {/* <PersonList nameList={nameList}></PersonList> */}
      {/* <Status status="loading"/> */}
      {/* <Heading>
        Placeholder text
      </Heading> */}
      <Oscar>
        <Heading>"Hello"</Heading>
      </Oscar>
      <Greet name="Vishwas" isLoggedIn={true}/>
    </div>
  );
}

export default App;
