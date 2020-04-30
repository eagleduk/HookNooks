import React, { useState } from "react";

const HookApp = () => {
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h2>Hello {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default HookApp;
