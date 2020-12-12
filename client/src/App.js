import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log({ hi: "hi" });
    axios
      .get("/api")
      .then((r) => setMessage(r.data.message))
      .catch((e) => console.log({ e }));
  }, []);

  return (
    <div className="App">
      This is the message coming from MongoAtlas --- {message}
    </div>
  );
}

export default App;
