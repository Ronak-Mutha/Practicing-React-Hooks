import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PracticeUseEffect() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(`${response.data[0].name} - ${response.data[0].email}`);
      });
  }, []);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
