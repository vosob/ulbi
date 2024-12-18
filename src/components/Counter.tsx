import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className={classes.btn} onClick={() => setCount(count + 1)}>
        increment
      </button>
      <p>Current count: {count}</p>
    </div>
  );
};
