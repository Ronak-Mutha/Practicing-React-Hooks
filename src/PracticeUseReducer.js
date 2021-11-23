import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleButtonText":
      return {
        buttonText:
          state.buttonText === "Show Text" ? "Hide Text" : "Show Text",
        showText: state.showText
      };
    case "toggleShowText":
      return { buttonText: state.buttonText, showText: !state.showText };
    default:
      return state;
  }
};

export default function PracticeUseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    buttonText: "Show Text",
    showText: false
  });

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "toggleButtonText" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        {state.buttonText}
      </button>
      {state.showText && <p>Hey, Wassup!</p>}
    </div>
  );
}
