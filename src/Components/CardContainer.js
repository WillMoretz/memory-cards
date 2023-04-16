/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import Card from "./Card";

function shuffleArray(array) {
  const arrayCopy = array;
  for (let i = arrayCopy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
}

async function fetchPokemon(id) {
  const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonJSON = await pokemonData.json();
  return pokemonJSON;
}

function CardContainer(props) {
  const { pokemonIDs } = props;
  const [pokemonArray, setPokemonArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const cards = pokemonArray.map((pokemon) => (
    <Card key={pokemon.name} name={pokemon.name} imgSrc={pokemon.imgSrc} />
  ));

  useEffect(() => {
    async function getPokemons() {
      const pokemonsData = [];
      for (const id of pokemonIDs) {
        pokemonsData.push(fetchPokemon(id));
      }
      const pokemonsJSON = await Promise.all(pokemonsData);
      const pokemons = [];
      pokemonsJSON.forEach((pokemon) =>
        pokemons.push({
          name: pokemon.name,
          imgSrc: pokemon.sprites.front_default,
        })
      );

      setPokemonArray(pokemons);
      setIsLoaded(true);
    }
    getPokemons();
  }, []);

  return isLoaded ? (
    <div className="card-container">{cards}</div>
  ) : (
    <div className="loading">Loading...</div>
  );
}

export default CardContainer;
