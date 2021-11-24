import React, { useRef } from "react";
import Button from "./Button";

export default function PracticeUseImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        {" "}
        Button from parent{" "}
      </button>
      <Button ref={buttonRef} />
    </>
  );
}
