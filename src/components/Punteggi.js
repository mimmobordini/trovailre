const Punteggi = () => {
  return (
    <div className="containerPunteggi unselectable">
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
    </div>
  );
};
export default Punteggi;
