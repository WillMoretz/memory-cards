import React, { useEffect, useState } from "react";
import Card from "./Card";

function shuffleArray(array) {
  const arrayCopy = array;
  for (let i = arrayCopy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
}

function CardContainer(props) {
  const { pokemonID } = props;
  const [pokemonArray, setPokemonArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const cards = pokemonArray.map((pokemon) => (
    <Card key={pokemon.name} name={pokemon.name} imgSrc={pokemon.imgSrc} />
  ));

  useEffect(() => {
    async function fetchPokemon() {
      const pokemonData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
      );
      const pokemonJSON = await pokemonData.json();
      setPokemonArray([
        ...pokemonArray,
        {
          name: pokemonJSON.name,
          imgSrc: pokemonJSON.sprites.front_default,
        },
      ]);
      setIsLoaded(true);
    }
    fetchPokemon();
  }, []);

  return isLoaded ? (
    <div className="card-container">{cards}</div>
  ) : (
    <div className="loading">Loading...</div>
  );
}

export default CardContainer;
