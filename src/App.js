import React from 'react'
import { Route } from 'wouter'

import './App.css'
import SearchResult from './pages/SearchResult'
import DetailsOfGif from './components/DetailsOfGif'
import Header from './pages/Header'
import Home from './pages/Home'


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Header />
        <div className='Gif-content'>
          <Route component={Home} path="/" />
          <Route component={SearchResult} path="/search/:keyword" />
          <Route component={DetailsOfGif} path="/gif/:id" />
        </div>
      </section>
    </div>
  );
}

export default App;
