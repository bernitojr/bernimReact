import { useEffect, useState } from "react";
import { coupIA } from "./IA";
import Endgame from "./Endgame";
import Messages from "./Messages";
import Pyramide from "./Pyramide";
import confetti from "canvas-confetti";

export default function Game({ nbPiles, difficulte }) {
  const [pyramide, setPyramide] = useState([]);
  const [tour, setTour] = useState("joueur1");
  const [winner, setWinner] = useState(null);
  const [messages, setMessages] = useState([]);
  const [hovered, setHovered] = useState( {ligne:null, index:null });
  const [disappear, setDisappear] = useState ( {ligne:null, index:null });
  

  // Initialisation
  useEffect(() => {
    const lignes = nbPiles;
    const p = Array.from({ length: lignes }, () => Math.floor(Math.random() * 7) + 1);
    setPyramide(p);

    // setTour(Math.random() < 0.5 ? "joueur1" : "ordi");
    setTour("joueur1");
  }, []);

  function addMessage(joueur, choix, ligne) {
  const acteur = joueur === "joueur1" ? "Tu" : "Je";
  const pluriel = choix > 1 ? "s" : "";
  const ligneAffichee = ligne + 1; // pour afficher ligne 1, 2, 3...

  const text = `${acteur} retire ${choix} bâton${pluriel} de la ligne ${ligneAffichee}`;

  setMessages(prev => {
    let updated = [
      ...prev,
      {
        id: Date.now() + Math.random(),
        text,
        class: joueur,
        appear: true
      }
    ];

    if (updated.length > 4) {
      updated.shift();
    }

    return updated;
  });
}




useEffect(() => {
  if (winner !== null) {
    setMessages([]); // supprime tous les messages
  }
}, [winner]);



  function jouerCoup(ligne, choix, joueur) {
    const newP = [...pyramide];
    newP[ligne] -= choix;

    setPyramide(newP);
  addMessage(joueur, choix, ligne);


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
        const [ligne, choix] = coupIA(pyramide, difficulte);
        jouerCoup(ligne, choix, "ordi");
      }, 800);
    }
  }, [tour]);


  // confettis de victoire
  useEffect(() => {
    if(winner === "joueur1") {
      confetti({
        particleCount: 450,
        spread: 80,
        origin: { y: 0.6}
      });
    }
  }, [winner])
return (
  <div className="home">
    <div className="formContainer">

      {winner === null && (
        <Messages messages={messages} setMessages={setMessages} />
      )}

      {!winner && (
        <p className={`tour-actuel ${tour}`}>
          {tour === "joueur1" ? "C'est ton tour !" : "C'est mon tour !"}
        </p>
      )}

      {winner ? (
        <Endgame winner={winner} />
      ) : (
        <Pyramide 
          pyramide={pyramide}
          jouerCoup={jouerCoup}
          hovered={hovered}
          setHovered={setHovered}
          disappear={disappear}
          setDisappear={setDisappear}
        />
      )}


    </div>
  </div>
);

}
