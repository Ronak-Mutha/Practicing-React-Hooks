import React, { useRef, useLayoutEffect, useEffect } from "react";

export default function PracticeUseLayoutEffect() {
  const inputRef = useRef(null);

  // useLayoutEffect - Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint. Prefer the standard useEffect when possible to avoid blocking visual updates.

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  });

  // use useEffect preferably.
  useEffect(() => {
    inputRef.current.value = "Hello!!";
  });

  return (
    <>
      <input
        ref={inputRef}
        value="ronak"
        style={{
          height: "40px",
          width: "400px",
          border: "2px solid limegreen"
        }}
      />
    </>
  );
}
