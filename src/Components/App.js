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
        <CardContainer pokemonID="7" />
      </section>
      <footer>Made by Will Moretz</footer>
    </>
  );
}

export default App;
