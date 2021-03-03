import Header from "./Header";

const Punteggi = () => {
  return (
    <div className="unselectable">
      <div className="containerPunteggi">
        <Header />

        <h3>PUNTEGGI</h3>
        <ul>
          <li>La carta scoperta è 1: +10 punti</li>
          <li>La carta scoperta è 2: +20 punti</li>
          <li>La carta scoperta è 3: +30 punti</li>
          <li>La carta scoperta è 4: +40 punti</li>
          <li>La carta scoperta è 5: +50 punti</li>
          <li>La carta scoperta è K: +100 punti</li>
          <li>Se si scoprono tutte le carte di una fila: +10 punti</li>
          <li>Se si scoprono tutte le carte di una colonna: +10 punti</li>
          <li>Se si scoprono tutte le carte di una diagonale grande: +10 punti</li>
        </ul>

        <h3>PREMI</h3>
        <ul>
          <li>Bottino Reale Bronzo se il punteggio è compreso tra 10 e 399</li>
          <li>Bottino Reale Argento se il punteggio è compreso tra 400 e 549</li>
          <li>Bottino Reale Oro se il punteggio è superiore a 550</li>
        </ul>
      </div>

      <input type="button" className="button" value="Reset" onClick={() => window.location.reload(false)} />
    </div>
  );
};
export default Punteggi;
