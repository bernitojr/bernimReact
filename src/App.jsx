import { useState } from "react";
import Home from "./components/Home";
import Game from "./components/Game";
import Layout from "./components/Layout";
import ActionBar from "./components/ActionBar";

export default function App() {
  const [nbPiles, setNbPiles] = useState(null);

  return (
    <Layout>
      {nbPiles === null ? (
        <>
          <Home onStart={setNbPiles} />

          {/* Bouton Jouer dans la barre d'action */}
          <ActionBar>
            <button className="btn" onClick={() => setNbPiles(3)}>
              Jouer
            </button>
          </ActionBar>
        </>
      ) : (
        <>
          <Game nbPiles={nbPiles} />

          {/* Bouton Recommencer dans la barre d'action */}
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
