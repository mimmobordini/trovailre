const coloriDisponibili = ["white", "green", "orange", "yellow", "purple", "blue", "red"];

const Tavolozza = ({ cambiaColoreSelected }) => {
  return (
    <div className="containerTavolozza">
      <div className="tavolozza">
        {coloriDisponibili.map((element, index) => {
          return (
            <div
              className="coloreTavolozza"
              key={index}
              style={{ backgroundColor: element }}
              onClick={cambiaColoreSelected.bind(this, element)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Tavolozza;
