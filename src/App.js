import "./App.css";
import { useState } from "react";
import Board from "./components/Board";
import Schema from "./components/Schema";
import Punteggi from "./components/Punteggi";

function App() {
  const [numberStats, setnumberStats] = useState({});
  const [colorStats, setcolorStats] = useState({});

  return (
    <div className="boardAndSchema">
      <Board setnumberStats={setnumberStats} setcolorStats={setcolorStats} />

      <Schema numberStats={numberStats} colorStats={colorStats} />
      <Punteggi />
    </div>
  );
}

export default App;
