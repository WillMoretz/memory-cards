import React from "react";
import "../index.css";
import CardContainer from "./CardContainer";
import ScoreBoard from "./ScoreBoard";

function App() {
  return (
    <>
      <header>------ Memory</header>
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
