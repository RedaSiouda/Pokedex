import React from 'react';
import "./App.css"
import SearchIcon from '@mui/icons-material/Search';
import PokeCard from './Components/PokeCard';

function App() {
  return (
    <div className='app'>
      <div className="app__containTitle">
        <h1 className="app__title">Pokedex</h1>
      </div>
      <section className="app__minorSection">
        <div className="app__grid">
        <button class="btn" type="button">
        <strong><h3 className='btnH3'>Pokedex</h3></strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
          <button class="btn" type="button">
  <strong><h3 className='btnH3'>Abilities</h3></strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
          <button class="btn" type="button">
          <strong><h3 className='btnH3'>Move Set</h3></strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
          <button class="btn" type="button">
          <strong><h3 className='btnH3'>Habitat</h3></strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>

        </div>
      </section>
      <section className="app__mainSection">
        <div className="app__containSearchbar">
          <input placeholder='Search your pokemon' type="text" className="app__searchbar" />
          <button type='submit' className="app__searchBtn">{<SearchIcon/>}</button>
        </div>
        <div className="app__containPokeCard">
          <PokeCard />
        </div>
      </section>
    </div>
  )
}

export default App
