import React from 'react'
import './App.css';
import {Route, Link} from "wouter"

import ListOfGifs from './components/ListOfGifs'

function App() {
  return (
    <div className="App">
      <section className="App-content">
          <h1>GIPHY</h1>
          <div id="links">
            <Link to='/gif/panda'>PANDAS</Link>
            <Link to='/gif/china'>CHINA</Link>
            <Link to='/gif/fútbol'>FÚTBOL</Link>
            <Link to='/gif/guerra'>GUERRA</Link>
            <Link to='/gif/gatos'>GATOS</Link>
            <Link to='/gif/perros'>PERROS</Link>
            <Link to='/gif/bebés'>BEBÉS</Link>
            <Link to='/gif/animales'>ANIMALES</Link>
            <Link to='/gif/baile'>BAILE</Link>
            <Link to='/gif/fuegos'>FUEGOS</Link>
            <Link to='/gif/montañas'>MONTAÑAS</Link>
            <Link to='/gif/amanecer'>AMANECER</Link>
            <Link to='/gif/comida'>COMIDA</Link>
            <Link to='/gif/postres'>POSTRES</Link>
            <Link to='/gif/caricaturas'>CARICATURAS</Link>
            <Link to='/gif/sorpresa'>SORPRESA</Link>
            <Link to='/gif/películas'>PELÍCULAS</Link>
            <Link to='/gif/deportes'>DEPORTES</Link>
            <Link to='/gif/magia'>MAGIA</Link>
            <Link to='/gif/ejercicio'>EJERCICIO</Link>
            <Link to='/gif/cumpleaños'>CUMPLEAÑOS</Link>
            <Link to='/gif/trucos'>TRUCOS</Link>
            <Link to='/gif/niños'>NIÑOS</Link>
            <Link to='/gif/naturaleza'>NATURALEZA</Link>
            <Link to='/gif/videojuegos'>VIDEOJUEGOS</Link>
            <Link to='/gif/motivación'>MOTIVACIÓN</Link>
            <Link to='/gif/emojis'>EMOJIS</Link>
            <Link to='/gif/esquí'>ESQUÍ</Link>
            <Link to='/gif/ciudades'>CIUDADES</Link>
            <Link to='/gif/facepalm'>FACEPALM</Link>
            <Link to='/gif/abrazos'>ABRAZOS</Link>
            <Link to='/gif/canto'>CANTO</Link>
            <Link to='/gif/chocala'>CHÓCALA</Link>
            <Link to='/gif/aplausos'>APLAUSOS</Link>
            <Link to='/gif/chimenea'>CHIMENEA</Link>
            <Link to='/gif/nieve'>NIEVE</Link>
            <Link to='/gif/asombro'>ASOMBRO</Link>
            <Link to='/gif/bicicletas'>BICICLETAS</Link>
            <Link to='/gif/cachorros'>CACHORROS</Link>
            <Link to='/gif/suerte'>SUERTE</Link>
            <Link to='/gif/memes'>MEMES</Link>
            <Link to='/gif/zoológico'>ZOOLÓGICO</Link>
            <Link to='/gif/extremo'>EXTREMO</Link>
            <Link to='/gif/playa'>PLAYA</Link>
            <Link to='/gif/tacos'>TACOS</Link>
            <Link to='/gif/redes'>REDES</Link>
            <Link to='/gif/amor'>AMOR</Link>
            <Link to='/gif/trabajo'>TRABAJO</Link>
            <Link to='/gif/explosión'>EXPLOSIÓN</Link>
            <Link to='/gif/montañas'>MONTAÑAS</Link>
            <Link to='/gif/invierno'>INVIERNO</Link>
            <Link to='/gif/flores'>FLORES</Link>
            <Link to='/gif/omg'>OMG</Link>
            <Link to='/gif/gracias'>GRACIAS</Link>
          </div>
          <div id="gifs">
            <Route path="/gif/:keyword" component={ListOfGifs} />
          </div>
      </section>
    </div>
  )
}

export default App;
