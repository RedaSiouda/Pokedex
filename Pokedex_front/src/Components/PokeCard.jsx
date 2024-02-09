import React, { useState, useEffect } from 'react';
import '../CSS/PokeCard.css';
import axios from 'axios';

function PokeCard() {
  const [pokeCard, setPokeCard] = useState([]);

  //fetching data from pokeAPI
  useEffect(() => {
    console.log('effect');
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(async (response) => {
        console.log('promise fulfilled');
        const pokemonDetails = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const detailsResponse = await axios.get(pokemon.url);
            return detailsResponse.data;
          })
        );
        setPokeCard(pokemonDetails);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon data:', error);
      });
  }, []);

  return (
    <div className='pokeCardGrid'>
      {pokeCard.map((pokemon, index) => (
        <div key={index} className='pokeCard'>
          <div className='pokeCard__innerCard'>
            <div className='pokeCard__frontSide'>
              <img className='pokeCard__spriteFront' src={pokemon.sprites.front_default} alt={`Sprite of ${pokemon.name}`} />
              <p className='pokeCard__name'>{pokemon.name}</p>
              <div className='pokeCardTypes'>
                {pokemon.types.map((type, typeIndex) => (
                  <p key={typeIndex} className={`type ${type.type.name}`}>
                    {type.type.name}
                  </p>
                ))}
              </div>
            </div>
            <div className='pokeCard__backSide'>
              <img className='pokeCard__spriteBack' src={pokemon.sprites.back_default} alt={`Sprite of ${pokemon.name}`} />
              <p className='pokeCard__backText'>see more</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokeCard;
