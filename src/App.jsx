import { useState } from "react";
import Home from "./components/Home";
import Game from "./components/Game";
import Layout from "./components/Layout";
import ActionBar from "./components/ActionBar";

export default function App() {
  const [nbPiles, setNbPiles] = useState(null);
  const [pendingLignes, setPendingLignes] = useState(3); // valeur du slider
  const [modeJeu, setModeJeu] = useState("ia");
  const [difficulte, setDifficulte] = useState("facile");

  return (
    <Layout>
      {nbPiles === null ? (
        <>
         <Home
         nbLignes={pendingLignes}
         setNbLignes={setPendingLignes}
         modeJeu={modeJeu}
         setModeJeu={setModeJeu}
         difficulte={difficulte}
         setDifficulte={setDifficulte}
         onStart={() => setNbPiles(pendingLignes)}
         />

          <ActionBar>
            <button className="btn" onClick={() => setNbPiles(pendingLignes)}>
              Jouer
            </button>
          </ActionBar>
        </>
      ) : (
        <>
          <Game
          nbPiles={nbPiles}
          difficulte={difficulte} />

          <ActionBar>
            <button className="btn" onClick={() => window.location.reload()}>
              Recommencer
            </button>
          </ActionBar>
        </>
      )}
    </Layout>
  );
}
