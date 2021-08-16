import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  function increase() {
    if (value < 10) setValue(value + 1);
  }

  function decrease() {
    if (value > 0) setValue(value - 1);
  }

  return (
    <div className="counter">
      <button onClick={increase}>+</button>

      <h2>{value}</h2>

      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;
