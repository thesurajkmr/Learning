import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);
  const incrementOne = () => {
    setcounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setcounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterTwo % 2 === 0;
  }, [counterTwo]);

  return (
    <div>
      <div>
        CounterOne
        <button onClick={incrementOne}>{counterOne}</button>
      </div>
      <div>
        CounterTwo
        <button onClick={incrementTwo}>{counterTwo}</button>
        {isEven ? "even" : "odd"}
      </div>
    </div>
  );
}

export default Counter;

// Usememo hook only calculate the cache value when one of the
// dependency is changed. this optimization helps to avoid expensive
// calculation at every render


// usecallback caches the provided function instance itself, whereas 
// usememo invokes the provided function and caches its result.

// cache a fn, usecallback
// cache a result of a fn, usememo
