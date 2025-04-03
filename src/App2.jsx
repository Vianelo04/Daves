import { useState } from "react";

const App2 = () => {
  const [progress, setProgress] = useState(50);

  const aumentar = () => setProgress((prev) => Math.min(prev + 10, 100));
  const diminuir = () => setProgress((prev) => Math.max(prev - 10, 0));

  return (
    <div style={{ width: "300px" }}>
      <div style={{ width: "100%", background: "#ccc", borderRadius: "5px" }}>
        <div
          style={{
            width: `${progress}%`,
            background: "#4caf50",
            height: "20px",
            borderRadius: "5px",
          }}
        ></div>
      </div>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
};

export default App2;