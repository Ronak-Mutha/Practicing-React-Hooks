import React from "react";

export default function Login({ setUsername }) {
  return (
    <div>
      <input
        onChange={() => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}
