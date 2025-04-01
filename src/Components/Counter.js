import { useState } from "react";
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div>
      <h1>COUNTER APP</h1>
      <h2>{count}</h2>

      <div className="button-container">
        <button onClick={increaseCount}>+1</button>
        <button onClick={decreaseCount}>-1</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
