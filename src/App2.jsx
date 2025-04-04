import { useState } from "react";

const App2 = () => {
  const [progress, setProgress] = useState(50);

  const aumentar = () => setProgress((prev) => Math.min(prev + 10, 100));
  const diminuir = () => setProgress((prev) => Math.max(prev - 10, 0));

};

export default App2;
