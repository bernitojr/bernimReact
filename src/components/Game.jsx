import { useEffect, useState } from "react";
import { coupIA } from "./IA";
import Endgame from "./Endgame";
import Messages from "./Messages";
import Pyramide from "./Pyramide";

export default function Game({ nbPiles }) {
  const [pyramide, setPyramide] = useState([]);
  const [tour, setTour] = useState("joueur1");
  const [winner, setWinner] = useState(null);
  const [messages, setMessages] = useState([]);
  

  // Initialisation
  useEffect(() => {
    const lignes = nbPiles;
    const p = Array.from({ length: lignes }, () => Math.floor(Math.random() * 7) + 1);
    setPyramide(p);

    setTour(Math.random() < 0.5 ? "joueur1" : "ordi");
  }, []);


function addMessage(text, className) {
  setMessages(prev => {
    let updated = [
      ...prev,
      {
        id: Date.now() + Math.random(), // id unique
        text,
        class: className,
        appear: true
      }
    ];

    if (updated.length > 4) {
      updated.shift(); // supprime le plus ancien
    }

    return updated;
  });
}



  function jouerCoup(ligne, choix, joueur) {
    const newP = [...pyramide];
    newP[ligne] -= choix;

    setPyramide(newP);
    addMessage(`${joueur} retire ${choix} bâton(s)`, joueur);

    if (newP.reduce((a, b) => a + b, 0) === 0) {
      setWinner(joueur);
      return;
    }

    setTour(joueur === "joueur1" ? "ordi" : "joueur1");
  }

  // Tour IA
  useEffect(() => {
    if (tour === "ordi" && winner === null) {
      setTimeout(() => {
        const [ligne, choix] = coupIA(pyramide);
        jouerCoup(ligne, choix, "ordi");
      }, 800);
    }
  }, [tour]);

  return (
    <div className="home">
        <div className="formContainer">
      <Messages messages={messages} setMessages={setMessages} />


      {!winner && (
        <p className={`tour-actuel ${tour}`}>
          {tour === "joueur1" ? "C'est ton tour !" : "C'est mon tour !"}
        </p>
      )}

      {winner ? (
        <Endgame winner={winner} />
      ) : (
        <Pyramide pyramide={pyramide} jouerCoup={jouerCoup} />
      )}

      <button className="btn" onClick={() => window.location.reload()}>
        Quitter la partie
      </button>
    </div>
    </div>
  );
}
