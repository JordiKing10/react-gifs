import React from 'react'
import { Route } from 'wouter'

import './App.css'
import ListOfGifs from './components/ListOFGifs'
import DetailsOfGif from './components/DetailsOfGif'
import Header from './components/Header'


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Header />
        <div className='Gif-content'>
          <Route 
            component={ListOfGifs}
            path="/gifs/:keyword" 
            />
          <Route 
            component={DetailsOfGif}
            path="/gif/:id" 
          />
        </div>
      </section>
    </div>
  );
}

export default App;
