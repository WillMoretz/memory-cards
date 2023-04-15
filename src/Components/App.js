import React from "react";
import "../index.css";
import ScoreBoard from "./ScoreBoard";

function App() {
  return (
    <>
      <header>------ Memory</header>
      <section>
        <ScoreBoard currentScore={0} highScore={0} />
      </section>
      <footer>Made by Will Moretz</footer>
    </>
  );
}

export default App;
