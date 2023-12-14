import React, { useEffect, useState } from "react";

function CounterDisplay({ count }) {
  return <h2>I have counted to {count}</h2>;
}

export function Counter({ initialValue = 0, decrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
       
  }, []);

  useEffect(() => {
    console.log(`The value of the counter is ${counter}`);
  }, [counter, initialValue]);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - decrementAmount);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
