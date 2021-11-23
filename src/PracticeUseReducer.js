import React, { useState } from "react";

export default function PracticeUseReducer() {
  const [buttonText, setButtonText] = useState("Show Text");
  const [showText, setShowText] = useState(false);

  function handleClick() {
    buttonText === "Show Text"
      ? setButtonText("Hide Text")
      : setButtonText("Show Text");
    setShowText(!showText);
  }

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
      {showText && <p>Hey, Wassup!</p>}
    </div>
  );
}
