import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Schema from "./components/Schema";
import Punteggi from "./components/Punteggi";

function App() {
  const [numberStats, setnumberStats] = useState({});
  const [colorStats, setcolorStats] = useState({});

  return (
    <div>
      <div className="boardAndSchema">
        <Board setnumberStats={setnumberStats} setcolorStats={setcolorStats} />
        <div className="rightMenu">
          <Header />
          <Schema numberStats={numberStats} colorStats={colorStats} />
          <Punteggi />
          <input type="button" className="button" value="Reset" onClick={() => window.location.reload(false)} />
        </div>
      </div>
    </div>
  );
}

export default App;
