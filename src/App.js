import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("black");
  
  useEffect(() => {
    count % 15 === 0
      ? setColor("yellow")
      : count % 5 === 0
      ? setColor("green")
      : count % 3 === 0
      ? setColor("red")
      : setColor("black");
  }, [count, color]);

  function fizzBuzz() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="App">
      <p style={{ color }}>{count}</p>
      <button onClick={fizzBuzz}>Increment Count </button>
    </div>
  );
}
