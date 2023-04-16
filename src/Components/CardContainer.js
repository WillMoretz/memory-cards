/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import Card from "./Card";

function shuffleArray(array) {
  const arrayCopy = array;
  for (let i = arrayCopy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

async function fetchPokemon(id) {
  const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonJSON = await pokemonData.json();
  return {
    name: pokemonJSON.name,
    imgSrc: pokemonJSON.sprites.front_default,
  };
}

function CardContainer(props) {
  const { pokemonIDs } = props;
  const [pokemonArray, setPokemonArray] = useState([]);
  const [currentIDs, setCurrentIDs] = useState([]);

  let pokemonArrayCopy = pokemonArray;
  pokemonArrayCopy = shuffleArray(pokemonArrayCopy);
  const cards = pokemonArrayCopy.map((pokemon) => (
    <Card key={pokemon.name} name={pokemon.name} imgSrc={pokemon.imgSrc} />
  ));

  useEffect(() => {
    if (currentIDs === pokemonIDs) return;
    async function getPokemons() {
      const pokemonsData = [];
      for (const id of pokemonIDs) {
        pokemonsData.push(fetchPokemon(id));
      }
      const pokemons = await Promise.all(pokemonsData);

      setPokemonArray(pokemons);
      setCurrentIDs(pokemonIDs);
    }
    getPokemons();
  }, [pokemonIDs]);

  return currentIDs.length !== 0 ? (
    <div className="card-container">{cards}</div>
  ) : (
    <div className="loading">Loading...</div>
  );
}

export default CardContainer;
