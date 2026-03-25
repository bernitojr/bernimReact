export default function Home({
  nbLignes,
  setNbLignes,
  modeJeu,
  setModeJeu,
  difficulte,
  setDifficulte,
  joueur1,
  setJoueur1,
  joueur2,
  setJoueur2,
  onStart
}) {
  return (
    <div className="home">
      <div className="formContainer">

        {/* Choix du mode */}
        <div className="modeContainer">
          <h2>Qui allez-vous affronter ?</h2>

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

         {/* input name visible uniquement si on select mode PVP  */}
        
          {modeJeu === "pvp" && (
  <div className="namesContainer">
    <input
  className="inputName"
  type="text"
  placeholder="Nom du joueur 1"
  value={joueur1}
  onFocus={() => {
    if (joueur1 === "Joueur 1") setJoueur1("");
  }}
  onBlur={() => {
    if (joueur1.trim() === "") setJoueur1("");
  }}
  onChange={(e) => setJoueur1(e.target.value)}
/>


    <input
     className="inputName"
      type="text"
      placeholder="Nom du joueur 2"
      value={joueur2}
     onFocus={() => {
    if (joueur2 === "Joueur 2") setJoueur2("");
  }}
  onBlur={() => {
    if (joueur2.trim() === "") setJoueur2("");
  }}
      onChange={(e) => setJoueur2(e.target.value)}
    />
  </div>
)}

          {/* bouton de difficulté visible uniquement en mode IA  */}

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

<div className="action-bar">
  <button className="btn" onClick={onStart}>
    Jouer
  </button>
</div>

      </div>
    </div>
  );
}
