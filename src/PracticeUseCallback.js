import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function PracticeUseCallback() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hey, wassup");

  const returnComment = useCallback(
    (name) => {
      return `${data} ${name} !`;
    },
    [data]
  );

  return (
    <div>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}> Toggle </button>
      {toggle && <p>You can see me </p>}
    </div>
  );
}
