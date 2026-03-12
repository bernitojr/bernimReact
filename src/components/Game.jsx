import { useEffect, useState } from 'react'
import { coupIA } from "./IA"
import Endgame from "./Endgame"
import Line from "./Line"

export default function Game( {nbPiles}) {

    const [pyramide, setPyramide] = useState([])
    const [tour, setTour] = useState("joueur1")
    const [winner, setWinner] = useState(null)

    // générer la pyramide
    useEffect(() =>{
        const lignes = nbPiles
        const p = Array.from({length: lignes}, () => Math.floor(Math.random() * 7) +1)
        setPyramide(p)

        // tirage du 1er joueur
        setTour(Math.random() < 0.5 ? "joueur1" : "ordi")
    }, [])

    function jouerCoup(ligne, choix, joueur) {
        const newP = [...pyramide]
        newP[ligne] -= choix

        setPyramide(newP)

        if(newP.reduce((a, b) => a+b, 0) === 0){
            setWinner(joueur)
            return
        }

        setTour(joueur === "joueur1" ? "ordi" : "joueur1")
    }
    
    // qd c'est l'IA qui joue
    useEffect( () => {
        if (tour === "ordi" && winner === null){
            setTimeout(() => {
                const [ligne, choix] = coupIA(pyramide)
                jouerCoup(ligne, choix, "ordi")
            }, 800)
        }
    }, [tour])

  return (
    <div>
        {winner ? (
            <Endgame winner={winner} />
        ) : (
            <div>
                <h2>Tour : {tour}</h2>
                {pyramide.map((nb, i) => (
                    <Line key={i} index={i} nb={nb} jouerCoup={jouerCoup} />
                ))}
            </div>
        )}
    </div>
  )
}
