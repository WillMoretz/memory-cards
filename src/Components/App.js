import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import ScoreBoard from "./ScoreBoard";
import "../index.css";
import pokeball from "../pokeball.svg";

function generateRandomPokemonIDs(amount, IDs) {
  const result = [];
  let idsGenerated = 0;
  while (idsGenerated < amount) {
    const id = Math.ceil(Math.random() * 151);
    if (!IDs.includes(id) && !result.includes(id)) {
      result.push(id);
      idsGenerated += 1;
    }
  }
  return result;
}

function App() {
  const [pokemonIDs, setPokemonIDs] = useState([]);
  const [clickedIDs, setClickedIDs] = useState([]);
  const [newIDs, setNewIDs] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleCardClick = (id) => {
    if (clickedIDs.includes(id)) {
      setScore(0);
      setClickedIDs([]);
      setPokemonIDs([]);
      setNewIDs([]);
    } else {
      setClickedIDs([...clickedIDs, id]);
      setScore(score + 1);
    }
  };

  useEffect(() => {
    if (score > highScore) setHighScore(score);
    if (score < pokemonIDs.length - 2) return;
    const randomIds = generateRandomPokemonIDs(5, pokemonIDs);
    setPokemonIDs([...pokemonIDs, ...randomIds]);
    setNewIDs(randomIds);
  }, [score]);

  return (
    <>
      <header>Pokemon Memory</header>
      <div className="header-border">
        <img className="pokeball" src={pokeball} alt="" />
      </div>
      <section>
        <ScoreBoard currentScore={score} highScore={highScore} />
        <CardContainer pokemonIDs={newIDs} handleCardClick={handleCardClick} />
      </section>
      <footer>
        Made by <i>Will Moretz</i>
      </footer>
    </>
  );
}

export default App;
