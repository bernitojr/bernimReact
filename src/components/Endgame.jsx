export default function Endgame({ winner }) {
  return (
    <div>
      <h1>{winner === "joueur1" ? "Tu as gagné !" : "L'IA a gagné !"}</h1>
      <button onClick={() => window.location.reload()}>
        Rejouer
      </button>
    </div>
  );
}
