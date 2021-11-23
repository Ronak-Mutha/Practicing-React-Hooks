import "./styles.css";
import { useState, useEffect } from "react";

export default function PracticeUseState() {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("black");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    count % 15 === 0
      ? setColor("yellow")
      : count % 5 === 0
      ? setColor("green")
      : count % 3 === 0
      ? setColor("red")
      : setColor("black");
  }, [count, color]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function fizzBuzz() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="App">
      <p style={{ color }}>{count}</p>
      <button onClick={fizzBuzz}>Increment Count </button>
      <h1> {inputValue} </h1>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
