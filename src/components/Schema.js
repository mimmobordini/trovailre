const Schema = ({ numberStats, colorStats }) => {
  return (
    <div className="schemaContainer unselectable">
      <table>
        <thead>
          <tr>
            <th>CARTA</th>
            <th>QUANTITA</th>
            <th>SEGNATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>7</td>
            <td>{numberStats["1"]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>4</td>
            <td>{numberStats["2"]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>5</td>
            <td>{numberStats["3"]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>{numberStats["4"]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>3</td>
            <td>{numberStats["5"]}</td>
          </tr>
          <tr>
            <td>K</td>
            <td>1</td>
            <td>{numberStats["K"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Schema;
