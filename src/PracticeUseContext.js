import React, { useState, createContext } from "react";
import User from "./User";
import Login from "./Login";

export const AppContext = createContext(null);

export default function PracticeUseContext() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
}
