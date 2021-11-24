import React, { useRef } from "react";

export default function PracticeUseRef() {
  const inputRef = useRef(null);

  const clickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Ex...." ref={inputRef} />
      <button onClick={clickHandler}>Change Name</button>
    </div>
  );
}
