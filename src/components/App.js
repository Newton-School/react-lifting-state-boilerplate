import React, { useState } from "react";

const CounterDisplay = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>The current count is </h2>
      <h2 id="currentDisplay">{count}</h2>
    </>
  );
};

const CounterButton = () => {
  return (
    <>
      <h3>Click here to increment</h3>
      <button id="increment">Click me</button>
    </>
  );
};

const App = () => {
  return (
    <div>
      <CounterDisplay />
      <CounterButton />
    </div>
  );
};

export default App;
