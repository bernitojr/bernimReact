export default function Home({
  nbLignes,
  setNbLignes,
  modeJeu,
  setModeJeu,
  difficulte,
  setDifficulte,
  onStart
}) {
  return (
    <div className="home">
      <div className="formContainer">

        {/* Choix du mode */}
        <div className="modeContainer">
          <h2>Choisir son adversaire</h2>

          <div className="modeButtons">
            <button
              className={`modeBtn ${modeJeu === "ia" ? "selected" : ""}`}
              onClick={() => setModeJeu("ia")}
            >
              🤖 IA
            </button>

            <button
              className={`modeBtn ${modeJeu === "pvp" ? "selected" : ""}`}
              onClick={() => setModeJeu("pvp")}
            >
              👤 Humain
            </button>
          </div>
        </div>

        {/* Difficulté IA */}
        {modeJeu === "ia" && (
          <div className="difficultyContainer">
            <h3>Difficulté</h3>

            <div className="difficultyButtons">
              <button
                className={`modeBtn ${difficulte === "facile" ? "selected" : ""}`}
                onClick={() => setDifficulte("facile")}
              >
                Facile
              </button>

              <button
                className={`modeBtn ${difficulte === "difficile" ? "selected" : ""}`}
                onClick={() => setDifficulte("difficile")}
              >
                Difficile
              </button>
            </div>
          </div>
        )}

        {/* Slider existant */}
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

        <div className="preview-lignes">
          {Array.from({ length: nbLignes }).map((_, i) => (
            <div key={i} className="baton"></div>
          ))}
        </div>

      </div>
    </div>
  );
}
