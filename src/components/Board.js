import Casella from "./Casella";
import Tavolozza from "./Tavolozza";
import { useState } from "react";

const creaGrid = function () {
  var griglia = [];
  var counter = 0;
  var letters = ["A", "B", "C", "D", "E"];
  var letter = 0;
  for (var i = 0; i < 25; i++) {
    counter++;
    griglia.push({
      number: "0",
      color: "white",
      selected: false,
      positionName: `${letters[letter]}${counter.toString()}`,
    });
    if (counter == 5) {
      counter = 0;
      letter++;
    }
  }
  return griglia;
};

const Board = ({ setnumberStats, setcolorStats }) => {
  const [grid, setGrid] = useState(creaGrid());

  const cambiaNumero = function (indexCasella, numero) {
    var tempArray = grid;

    tempArray[indexCasella]["number"] = numero;

    setGrid([...tempArray]);

    const result = grid.reduce((accumulator, current) => {
      const currentNumber = current.number;
      if (accumulator[currentNumber]) {
        accumulator[currentNumber]++;
      } else {
        accumulator[currentNumber] = 1;
      }
      return accumulator;
    }, {});
    console.log(result);
    setnumberStats(result);
  };

  const cambiaColore = function (indexCasella, colore) {
    var tempArray = grid;

    tempArray[indexCasella]["color"] = colore;

    setGrid([...tempArray]);

    const result = grid.reduce((accumulator, current) => {
      const currentColor = current.color;
      if (accumulator[currentColor]) {
        accumulator[currentColor]++;
      } else {
        accumulator[currentColor] = 1;
      }
      return accumulator;
    }, {});
    setcolorStats(result);
  };

  const cambiaSelected = function (indexCasella) {
    var tempArray = grid;

    tempArray[indexCasella]["selected"] = !tempArray[indexCasella]["selected"];

    setGrid([...tempArray]);
  };

  const cambiaColoreSelected = function (colore) {
    var tempArray = grid;

    for (var indexCasella = 0; indexCasella < tempArray.length; indexCasella++) {
      if (tempArray[indexCasella]["selected"]) {
        tempArray[indexCasella]["color"] = colore;
        tempArray[indexCasella]["selected"] = !tempArray[indexCasella]["selected"];
      }
    }

    setGrid([...tempArray]);
  };

  return (
    <div className="boardAndTavolozza">
      <div className="board">
        {grid.map((element, index) => {
          return (
            <Casella
              key={index}
              number={element.number}
              color={element.color}
              selected={element.selected}
              positionName={element.positionName}
              indexCasella={index}
              cambiaNumero={cambiaNumero}
              cambiaColore={cambiaColore}
              cambiaSelected={cambiaSelected}
            />
          );
        })}
      </div>
      <Tavolozza cambiaColoreSelected={cambiaColoreSelected} />
    </div>
  );
};
export default Board;
