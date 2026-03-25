export default function Endgame({ winner, modeJeu, joueur1, joueur2 }) {

  let message;

  if (modeJeu === "ia") {
    // Mode IA
    message = winner === "joueur1"
      ? "Tu as gagné ! :)"
      : "Tu as perdu ! :(";
  } else {
    // Mode PvP
    message = winner === "joueur1"
      ? `${joueur1} a gagné !`
      : `${joueur2} a gagné !`;
  }

  return (
    <div className="endgame-container">
      <h2>{message}</h2>
    </div>
  );
}
