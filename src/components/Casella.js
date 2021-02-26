const coloriDisponibili = ["white", "green", "orange", "yellow", "purple", "blue", "red"];
const carteDisponibili = ["", "1", "2", "3", "4", "5", "K"];

const Casella = ({
  indexCasella,
  number,
  color,
  cambiaNumero,
  cambiaColore,
  selected,
  cambiaSelected,
  positionName,
}) => {
  function createMiniNumeri() {
    var arrayOfMiniNumeri = [];
    for (var i = 0; i < carteDisponibili.length; i++) {
      var numero = carteDisponibili[i];

      arrayOfMiniNumeri.push(
        <div className="miniNumero" key={i} onClick={cambiaNumero.bind(this, indexCasella, numero)}>
          <span>{numero}</span>
        </div>
      );
    }
    return arrayOfMiniNumeri;
  }

  function createMiniColori() {
    var arrayOfMiniColori = [];
    for (var i = 0; i < coloriDisponibili.length; i++) {
      var colore = coloriDisponibili[i];

      arrayOfMiniColori.push(
        <div
          className="miniColore"
          key={i}
          onClick={cambiaColore.bind(this, indexCasella, colore)}
          style={{ backgroundColor: colore }}
        />
      );
    }
    return arrayOfMiniColori;
  }
  return (
    <div className="containerCasellaMain unselectable">
      <div className="containerCasellaColoreNumero">
        <div className="containerCasellaNumero">
          <div
            style={{
              backgroundColor: color,
              borderColor: "black",
              borderStyle: "solid",
              borderWidth: selected === true ? "3px" : "1px",
            }}
            className="unselectable casella"
            onClick={cambiaSelected.bind(this, indexCasella)}
          >
            <span>{number === "0" ? null : number}</span>
            <span className="positionCasella">{positionName}</span>
          </div>
          <div className="containerMiniNumeri">{createMiniNumeri()}</div>

          {/*<div className="containerSelected" style={{ backgroundColor: selected === true ? "green" : null }} />*/}
        </div>
        <div className="containerMiniColori"> {createMiniColori()}</div>
      </div>
    </div>
  );
};
export default Casella;
