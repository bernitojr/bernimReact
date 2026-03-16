import { useState } from "react";

export default function Home({ onStart }) {
  const [nbLignes, setNbLignes] = useState(3);

  return (
    <div className="home">
      <h1 className="title">bernimGame</h1>

   <div className="formContainer">
       {/* Slider */}
      <label>
        Nombre de lignes : {nbLignes}
        <input
          type="range"
          min="3"
          max="5"
          className="slider"
          value={nbLignes}
          onChange={(e) => setNbLignes(Number(e.target.value))}
        />
      </label>

      {/* Animation dynamique */}
      <div className="preview">
        {Array.from({ length: nbLignes }).map((_, i) => (
          <div key={i} className="baton">|</div>
        ))}
      </div>

   </div>
      {/* Boutons */}
      <button className="btn" onClick={() => onStart(nbLignes)}>
        Jouer
      </button>

      <button className="btn-secondary">
        Règles
      </button>
    </div>
  );
}
