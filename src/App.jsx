import { useState } from "react";
import Home from "./components/Home";
import Game from "./components/Game";

export default function App() {
  const [nbPiles, setNbPiles] = useState(null);

  return (
    <div className="app">
      {nbPiles === null ? (
        <Home onStart={setNbPiles} />
      ) : (
        <Game nbPiles={nbPiles} />
      )}
    </div>
  );
}
