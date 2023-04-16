import React from "react";
import CardContainer from "./CardContainer";
import ScoreBoard from "./ScoreBoard";
import "../index.css";
import pokeball from "../pokeball.svg";

// console.log(PokeballImg);

function App() {
  return (
    <>
      <header>Pokemon Memory</header>
      <div className="header-border">
        <img className="pokeball" src={pokeball} alt="a pokeball" />
      </div>
      <section>
        <ScoreBoard currentScore={0} highScore={0} />
        <CardContainer
          pokemonIDs={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        />
      </section>
      <footer>Made by Will Moretz</footer>
    </>
  );
}

export default App;
