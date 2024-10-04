import { useState } from "react";
import "./Vote.css";

function Vote({ count }: { count: number }) {
  const [counter, setCounter] = useState(count);

  return (
    <div className="vote">
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Vote;
