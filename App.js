import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';


const API_URL = 'https://pokeapi.co/api/v2';


function App() {
  const [pokemon, setPokemon] = useState({ results: [] });


  useEffect(() => {
    fetch(`${API_URL}/pokemon`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPokemon(result);
      });
  }, []);


  const mixPokemons = () => {
    const mixPokemons = [...pokemon.results].sort(() => 0.5 - Math.random());
    setPokemon({ results: mixPokemons });
  };


  return (
    <div className="App">
      <h1>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' width="300px" height="auto"></img> 
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', border: '3px solid black' }}>
        {pokemon.results ? pokemon.results.map((el) => <Pokemon pokemon={el} key={el.name} />) : <div>Loading...</div>}
        
        <button onClick={mixPokemons} style={{"margin": "40px", "backgroundColor": "yellow"}}>Mix Pokemons</button>
      </div>

    </div>
  );
}


export default App;