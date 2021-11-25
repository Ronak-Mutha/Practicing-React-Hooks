import React, { useContext } from "react";
import { AppContext } from "./PracticeUseContext";

export default function Login() {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}
