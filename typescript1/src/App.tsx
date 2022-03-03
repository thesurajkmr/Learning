import React from "react";
import "./App.css";
import { Greet } from "./Components/Greet";
import { Person } from "./Components/Person";
import { PersonList } from "./Components/PersonList";

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
      <PersonList nameList={nameList}></PersonList>
    </div>
  );
}

export default App;
