import { useState, useEffect } from "react";

const App3 = () => {
  const [votos, setVotos] = useState(() => {
    return JSON.parse(localStorage.getItem("votos")) || { A: 0, B: 0, C: 0 };
  });

  useEffect(() => {
    localStorage.setItem("votos", JSON.stringify(votos));
  }, [votos]);

  const votar = (opcao) => {
    setVotos((prev) => ({ ...prev, [opcao]: prev[opcao] + 1 }));
  };

  return (
    <div>
      <h3>Simulador de Votação</h3>
      <button onClick={() => votar("A")}>Votar em A</button>
      <button onClick={() => votar("B")}>Votar em B</button>
      <button onClick={() => votar("C")}>Votar em C</button>
      <h4>Resultados:</h4>
      <p>A: {votos.A}</p>
      <p>B: {votos.B}</p>
      <p>C: {votos.C}</p>
    </div>
  );
};

export default App3;
