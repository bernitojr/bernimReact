export default function Endgame({ winner }) {
  return (
    <div className="endgame-container">
      <h1>
        {winner === "joueur1" ? "Tu as gagné :)" : "Tu as perdu :("}
      </h1>
    </div>
  );
}
