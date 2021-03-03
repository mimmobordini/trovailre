import uno from "../1.png";
import due from "../2.png";
import tre from "../3.png";
import quattro from "../4.png";
import cinque from "../5.png";
import kappa from "../K.png";

const Schema = ({ numberStats, colorStats }) => {
  var elementList = [
    { quantita: 7, source: uno, trovate: numberStats["1"] },
    { quantita: 4, source: due, trovate: numberStats["2"] },
    { quantita: 5, source: tre, trovate: numberStats["3"] },
    { quantita: 5, source: quattro, trovate: numberStats["4"] },
    { quantita: 3, source: cinque, trovate: numberStats["5"] },
    { quantita: 1, source: kappa, trovate: numberStats["K"] },
  ];

  return (
    <div className="unselectable">
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>SEGNATE</th>
          </tr>
        </thead>
        <tbody>
          {elementList.map((element, index) => {
            return (
              <tr>
                <td>
                  <span>{element.quantita}x</span>
                </td>
                <td>
                  <img src={element.source} />
                </td>
                <td>
                  <span>{element.trovate}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Schema;
