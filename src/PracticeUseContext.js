import React, { useState } from "react";
import User from "./User";
import Login from "./Login";

export default function PracticeUseContext() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <Login setUsername={setUsername} />
      <User username={username} />
    </div>
  );
}
