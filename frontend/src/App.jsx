import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://test-frontend-bakckend-vercel-zgua-rncbohcyn-amg16.vercel.app/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Axios Error:", error);

        if (error.response) {
          console.log("Status:", error.response.status);
          console.log("Data:", error.response.data);
        } else if (error.request) {
          console.log("No response received");
        } else {
          console.log(error.message);
        }
      });
  }, []);

  return (
    <>
      <h1>Frontend</h1>
      <h2>{message}</h2>
    </>
  );
}

export default App;