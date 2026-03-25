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
  const [joueur1, setJoueur1] = useState("");
  const [joueur2, setJoueur2] = useState("");


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
         joueur1={joueur1}
         setJoueur1={setJoueur1}
         joueur2={joueur2}
         setJoueur2={setJoueur2}
         onStart={() => setNbPiles(pendingLignes)}
         />
         
        </>
      ) : (
        <>
          <Game
          nbPiles={nbPiles}
          difficulte={difficulte}
          modeJeu={modeJeu}
          joueur1={joueur1}
          joueur2={joueur2} />

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
