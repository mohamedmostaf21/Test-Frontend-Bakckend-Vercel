import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://test-frontend-bakckend-vercel-fq3jlv9ai-amg16.vercel.app")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <h1>Frontend</h1>
      <h2>{message}</h2>
    </>
  );
}

export default App;