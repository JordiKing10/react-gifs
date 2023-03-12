import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOFGifs'

import { Link, Route } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Enlaces GIFS</h1>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/monos'>Gifs de monos</Link>
        <Link to='/gif/perros'>Gifs de perros</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword" 
        />
      </section>
    </div>
  );
}

export default App;
