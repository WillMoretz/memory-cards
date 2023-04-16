import React, { useState } from "react";
import CardContainer from "./CardContainer";
import ScoreBoard from "./ScoreBoard";
import "../index.css";
import pokeball from "../pokeball.svg";

function generateRandomPokemonID(amount, IDs) {
  const result = [];
  let idsGenerated = 0;
  while (idsGenerated < amount) {
    const id = Math.floor(Math.random() * 151);
    if (!IDs.includes(id)) {
      result.push(id);
      idsGenerated += 1;
    }
  }
  return result;
}

function App() {
  // const [pokemonIDs, setpokemonIDs] = useState([]);

  return (
    <>
      <header>Pokemon Memory</header>
      <div className="header-border">
        <img className="pokeball" src={pokeball} alt="a pokeball" />
      </div>
      <section>
        <ScoreBoard currentScore={0} highScore={0} />
        <CardContainer pokemonIDs={generateRandomPokemonID(10, [])} />
      </section>
      <footer>
        Made by <i>Will Moretz</i>
      </footer>
    </>
  );
}

export default App;
