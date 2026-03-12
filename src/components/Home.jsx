import { useState } from "react";

export default function Home({ onStart }) {
  const [nbPiles, setNbPiles] = useState(3);

  return (
    <div className="home">
      <h1 className="title">bernimGame</h1>

      {/* Slider */}
      <label>
        Nombre de piles : {nbPiles}
        <input
          type="range"
          min="3"
          max="5"
          value={nbPiles}
          onChange={(e) => setNbPiles(Number(e.target.value))}
        />
      </label>

      {/* Animation dynamique */}
      <div className="preview">
        {Array.from({ length: nbPiles }).map((_, i) => (
          <div key={i} className="baton">|</div>
        ))}
      </div>

      {/* Boutons */}
      <button className="btn" onClick={() => onStart(nbPiles)}>
        Jouer
      </button>

      <button className="btn-secondary">
        Règles
      </button>
    </div>
  );
}
